export default async function handler(request, response) {
    const apiKey = process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
        return response.status(500).json({ status: "error", message: "Server configuration error: API Key missing" });
    }

    if (request.method !== "POST") {
        return response.status(405).json({ status: "error", message: "Method not allowed" });
    }

    try {
        const body = request.body;

        const fetchWithRetry = async (retries = 3, delay = 1000) => {
            try {
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

                if (res.status === 429 && retries > 0) {
                    await new Promise(resolve => setTimeout(resolve, delay));
                    return fetchWithRetry(retries - 1, delay * 2);
                }

                return res;
            } catch (error) {
                if (retries > 0) {
                    await new Promise(resolve => setTimeout(resolve, delay));
                    return fetchWithRetry(retries - 1, delay * 2);
                }
                throw error;
            }
        };

        const res = await fetchWithRetry();

        const data = await res.json();

        if (!res.ok) {
            return response.status(res.status).json({ status: "error", message: data.error?.message || "Upstream Error", upstream: data });
        }

        return response.status(200).json(data);
    } catch (error) {
        return response.status(500).json({ status: "error", message: error.message });
    }
}
