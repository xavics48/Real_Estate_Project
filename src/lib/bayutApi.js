// lib/bayutApi.js
const BASE_URL = "https://bayut-api1.p.rapidapi.com";
const API_KEY =
    process.env.BAYUT_API_KEY ||
    "74b19b4b48mshc934b9da138049dp1b2bcejsn7d8612de03d3";

export async function searchProperties({ page = 0, langs = "en", ...filters } = {}) {
    const url = `${BASE_URL}/properties_search?page=${page}&langs=${langs}`;

    // Always enforce these filters
    const defaultFilters = {
        purpose: "for-sale",
        sale_type: "by_developer",
    };

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-RapidAPI-Key": API_KEY,
                "X-RapidAPI-Host": "bayut-api1.p.rapidapi.com",
            },
            body: JSON.stringify({
                ...defaultFilters,
                ...filters, // Allow overrides if needed
            }),
            cache: "no-store",
        });

        if (!res.ok) {
            const errText = await res.text();
            console.error("Bayut API error:", errText);
            return null;
        }

        const json = await res.json();
        return json;
    } catch (err) {
        console.error("Bayut API fetch failed:", err);
        return null;
    }
}

export async function getPropertyById(id, langs = "en") {
    const url = `${BASE_URL}/property/${id}?langs=${langs}`;

    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": API_KEY,
                "X-RapidAPI-Host": "bayut-api1.p.rapidapi.com",
            },
            cache: "no-store",
        });

        if (!res.ok) {
            console.error(`❌ Bayut Property API error: ${res.status} - ${res.statusText}`);
            return null;
        }

        return await res.json();
    } catch (err) {
        console.error("❌ Bayut API fetch error:", err);
        return null;
    }
}