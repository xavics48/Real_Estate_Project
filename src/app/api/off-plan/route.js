// app/api/off-plan/route.js
import { searchProperties } from "@/lib/bayutApi";

// In-memory cache (optional, for fewer RapidAPI calls)
const cache = new Map();
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const filters = {};

    // Extract query params
    searchParams.forEach((value, key) => {
        if (key === "page") {
            filters.page = parseInt(value);
        } else if (value === "true" || value === "false") {
            filters[key] = value === "true";
        } else {
            filters[key] = value;
        }
    });

    // Simple caching
    const cacheKey = JSON.stringify(filters);
    const now = Date.now();
    if (cache.has(cacheKey) && now - cache.get(cacheKey).timestamp < CACHE_DURATION) {
        console.log("⚡ Serving from cache");
        return Response.json(cache.get(cacheKey).data);
    }

    console.log("🔍 Filters sent to Bayut:", filters);

    // **Step 1: Only fetch purpose=for-sale** (No other restrictive filters)
    const data = await searchProperties({
        purpose: "for-sale",
        ...filters,
    });

    console.log("✅ Bayut API returned:", data?.results?.length || 0, "results");

    if (data) {
        cache.set(cacheKey, { timestamp: now, data });
    }

    return Response.json(data || { results: [] });
}
