export default async function handler(request, response) {
    const apiKey = process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
        return response.status(500).json({ status: "error", message: "Server configuration error: API Key missing" });
    }

    if (request.method !== "POST") {
        return response.status(405).json({ status: "error", message: "Method not allowed" });
    }

    try {
        const body = await request.json();

        const res = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
            encodeURIComponent(apiKey),
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        const data = await res.json();

        if (!res.ok) {
            return response.status(res.status).json({ status: "error", message: data.error?.message || "Upstream Error", upstream: data });
        }

        return response.status(200).json(data);
    } catch (error) {
        return response.status(500).json({ status: "error", message: error.message });
    }
}
