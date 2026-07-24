import { useState } from "react";
import api from "../services/api";

function UrlForm({ setReport, setLoading, setError, loading }) {
    const [websiteUrl, setWebsiteUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!websiteUrl.trim()) {
            setError("Please enter a website URL.");
            return;
        }

        setLoading(true);
        setError("");
        setReport(null);

        try {
            const response = await api.post("/audit", {
                url: websiteUrl,
            });

            setReport(response.data);
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError("Unable to connect to the server.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <input
                type="text"
                placeholder="Enter website URL (https://example.com)"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           focus:border-transparent"
            />

            <button
    type="submit"
    disabled={loading}
    className={`w-full rounded-lg py-3 text-white font-semibold transition
        ${
            loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 active:scale-95"
        }`}
>
    {loading ? "Analyzing..." : "Analyze Website"}
</button>

        </form>
    );
}

export default UrlForm;