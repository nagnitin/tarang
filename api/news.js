export default async function handler(request, response) {
    const { searchParams } = new URL(request.url, `http://${request.headers.host}`);
    const apiKey = process.env.VITE_NEWS_API_KEY;

    if (!apiKey) {
        return response.status(500).json({ status: "error", message: "Server configuration error: API Key missing" });
    }

    // Rewrite the query to the external API
    const externalUrl = new URL("https://newsapi.org/v2/everything");
    searchParams.forEach((value, key) => {
        externalUrl.searchParams.append(key, value);
    });

    try {
        const res = await fetch(externalUrl.toString(), {
            headers: {
                "X-Api-Key": apiKey,
                "User-Agent": "ECE-Horizon-Hub/1.0" // NewsAPI requires a User-Agent
            },
        });

        const data = await res.json();

        if (!res.ok) {
            // Forward the error from NewsAPI
            return response.status(res.status).json({ status: "error", message: data.message || "Upstream Error", upstream: data });
        }

        return response.status(res.status).json(data);
    } catch (error) {
        return response.status(500).json({ status: "error", message: error.message });
    }
}
