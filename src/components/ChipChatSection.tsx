import { useEffect, useState } from "react";
import { Cpu, Building2, Wifi, Package, RefreshCw } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

type NewsArticle = {
  title: string;
  description: string | null;
  source?: { name?: string };
  publishedAt?: string;
  url?: string;
};

const fallbackItems = [
  { icon: Cpu, title: "New Silicon", desc: "Latest chip announcements from Intel, AMD, NVIDIA, and ARM.", color: "text-primary" },
  { icon: Building2, title: "Industry Moves", desc: "Mergers, acquisitions, and new semiconductor fab constructions.", color: "text-accent" },
  { icon: Wifi, title: "Evolving Standards", desc: "Rollout of Wi-Fi 7, USB4, next-gen display protocols.", color: "text-primary" },
  { icon: Package, title: "Supply Chain Watch", desc: "Updates on component shortages and surpluses.", color: "text-accent" },
];

const ELECTRONICS_QUERY =
  "semiconductor OR \"electronics industry\" OR \"chip industry\" OR \"IC design\" OR \"foundry\" OR \"fab\"";

const formatDate = (dateString?: string) => {
  if (!dateString) return "";
  try {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
};

export const ChipChatSection = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCategory = (article: NewsArticle): string => {
    const text = `${article.title} ${article.description ?? ""}`.toLowerCase();

    if (text.includes("gpu") || text.includes("rtx") || text.includes("graphics")) {
      return "PC hardware";
    }
    if (text.includes("cpu") || text.includes("processor") || text.includes("chip")) {
      return "Chip design";
    }
    if (text.includes("foundry") || text.includes("fab") || text.includes("manufactur")) {
      return "Manufacturing";
    }
    if (text.includes("market") || text.includes("shares") || text.includes("revenue") || text.includes("forecast")) {
      return "Market & business";
    }
    if (text.includes("ai") || text.includes("neural") || text.includes("accelerator")) {
      return "AI & accelerators";
    }
    if (text.includes("wifi") || text.includes("network") || text.includes("5g") || text.includes("6g")) {
      return "Networking";
    }

    return "Live chip news";
  };

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        q: ELECTRONICS_QUERY,
        language: "en",
        sortBy: "publishedAt",
        pageSize: "4",
      });

      const res = await fetch(`/api/news?${params.toString()}`);

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = (await res.json()) as { articles?: NewsArticle[]; status?: string; message?: string };

      if (data.status !== "ok" || !data.articles) {
        throw new Error(data.message || "Unexpected response from news service.");
      }

      const cleaned = data.articles
        .filter((a) => a.title && (a.description || a.source?.name))
        .slice(0, 4);

      setArticles(cleaned);
    } catch (err) {
      console.error(err);
      setError("Unable to load live industry news right now.");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchNews();
  }, []);

  const hasLiveNews = articles.length > 0 && !error;

  return (
    <AnimatedSection id="chip-chat" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="badge-tag mb-4">💬 Chip Chat</span>
            <h2 className="section-title mt-4">
              Industry <span className="gradient-text">Pulse</span>
            </h2>
            <p className="section-subtitle mt-3">
              Stay ahead with the latest in semiconductor and tech industry news.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {loading && (
              <span className="text-xs text-muted-foreground">Fetching fresh headlines…</span>
            )}
            {error && (
              <span className="text-xs text-destructive">
                {error} Showing curated topics instead.
              </span>
            )}
            <button
              type="button"
              onClick={() => void fetchNews()}
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <RefreshCw className="h-3 w-3" />
              Refresh news
            </button>
          </div>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hasLiveNews
            ? articles.map((article, idx) => (
                <StaggerItem key={article.title + idx}>
                  <article className="glass-card-hover p-6 md:p-8 group cursor-pointer h-full flex flex-col">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                        <Cpu className="h-3 w-3" />
                        <span>{getCategory(article)}</span>
                      </div>
                      {article.source?.name && (
                        <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
                          {article.source.name}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    {article.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {article.description}
                      </p>
                    )}
                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{formatDate(article.publishedAt)}</span>
                      {article.url && (
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-primary hover:underline"
                        >
                          Read more
                        </a>
                      )}
                    </div>
                  </article>
                </StaggerItem>
              ))
            : fallbackItems.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="glass-card-hover p-6 md:p-8 group cursor-pointer">
                    <item.icon
                      className={`w-8 h-8 ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
