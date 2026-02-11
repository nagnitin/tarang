import { useState, FormEvent } from "react";
import { Bot, CornerDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat-bubble";
import { ChatInput } from "@/components/ui/chat-input";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat-message-list";

type Sender = "user" | "ai" | "system";

interface ChatMessage {
  id: number;
  content: string;
  sender: Sender;
}

const PROJECTS = [
  "Blinking LED with 555 Timer",
  "Arduino Weather Station",
  "Custom Mechanical Keyboard",
  "ESP32 Home Automation Sensor",
];

const systemPrompt = `
You are "Tarang Project Assistant", a helpful AI for the Electronics & Communication Engineering department at Gauhati University.

Your ONLY job is to help with electronics and embedded systems projects, especially these featured projects:
- Blinking LED with 555 Timer
- Arduino Weather Station
- Custom Mechanical Keyboard
- ESP32 Home Automation Sensor

Guidelines:
- Answer clearly and concisely, focusing on practical implementation.
- Prefer step-by-step guidance: required components, high-level circuit, and code outline.
- If the question is NOT about projects, hardware, circuits, or implementation details, reply:
  "I’m dedicated to project-related questions only. Please ask me about circuits, components, code, or project ideas."
- When relevant, suggest which of the featured projects best matches the student's question.
`;

export const ProjectChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      content:
        "Hello, I’m the Tarang Project Assistant. Ask me about your electronics projects or any of the featured projects above.",
      sender: "ai",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);



  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const nextId = messages.length + 1;
    const userMessage: ChatMessage = {
      id: nextId,
      content: trimmed,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Check for API key is now done on the server, but we can't check it here easily without an endpoint.
    // Instead we will handle the error from the server.

    try {
      setIsLoading(true);

      const history = messages
        .filter((m) => m.sender !== "system")
        .map((m) => `${m.sender === "user" ? "Student" : "Assistant"}: ${m.content}`)
        .join("\n");

      const prompt = `${systemPrompt}\n\nConversation so far:\n${history}\nStudent: ${trimmed}\nAssistant:`;

      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 512,
          },
        }),
      });

      const raw = await res.json();

      if (!res.ok) {
        console.error("Gemini error response:", raw);

        if (res.status === 429) {
          throw new Error("I'm receiving too many requests right now. Please wait a moment and try again.");
        }

        if (res.status === 503) {
          throw new Error("The AI service is currently overloaded. Please try again later.");
        }

        throw new Error(
          raw.message || `Gemini request failed (status ${res.status}).`
        );
      }

      const data = raw as {
        candidates?: Array<{
          content?: { parts?: Array<{ text?: string }> };
        }>;
      };

      const textResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ??
        "I’m having trouble connecting to the project assistant right now.";

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          content: textResponse,
          sender: "ai",
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          setMessages((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              content: err instanceof Error ? err.message : "Something went wrong. Please try again.",
              sender: "ai",
            },
          ]);
        },
      ]);
    } finally {
  setIsLoading(false);
}
  };

return (
  <ExpandableChat
    size="lg"
    position="bottom-right"
    icon={<Bot className="h-6 w-6" />}
    aria-label="Tarang project assistant chat"
  >
    <ExpandableChatHeader className="flex-col text-center justify-center">
      <h1 className="text-lg font-semibold">Tarang Project Assistant</h1>
      <p className="text-xs text-muted-foreground">
        Ask only project-related questions. Featured projects:
        {" "}
        {PROJECTS.join(", ")}.
      </p>
    </ExpandableChatHeader>

    <ExpandableChatBody>
      <ChatMessageList smooth>
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            variant={message.sender === "user" ? "sent" : "received"}
          >
            <ChatBubbleAvatar
              className="h-8 w-8 shrink-0"
              src={undefined}
              fallback={message.sender === "user" ? "ST" : "AI"}
            />
            <ChatBubbleMessage
              variant={message.sender === "user" ? "sent" : "received"}
            >
              {message.content}
            </ChatBubbleMessage>
          </ChatBubble>
        ))}

        {isLoading && (
          <ChatBubble variant="received">
            <ChatBubbleAvatar className="h-8 w-8 shrink-0" fallback="AI" />
            <ChatBubbleMessage isLoading />
          </ChatBubble>
        )}
      </ChatMessageList>
    </ExpandableChatBody>

    <ExpandableChatFooter>
      <form
        onSubmit={handleSubmit}
        className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
      >
        <ChatInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about components, circuits, or code for a project…"
          className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center p-3 pt-0 justify-end">
          <Button type="submit" size="sm" className="ml-auto gap-1.5">
            Send
            <CornerDownLeft className="size-3.5" />
          </Button>
        </div>
      </form>
    </ExpandableChatFooter>
  </ExpandableChat>
);
}

