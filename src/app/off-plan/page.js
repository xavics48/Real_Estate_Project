"use client";

import { useState, useEffect } from "react";
import FiltersPanel from "@/components/FiltersPanel";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function OffPlanPage() {
    const [filters, setFilters] = useState({});
    const [projects, setProjects] = useState([]);
    const [currency, setCurrency] = useState("AED");
    const [filtersOpen, setFiltersOpen] = useState(false);

    const fetchProjects = async () => {
        const params = new URLSearchParams({ ...filters, currency });
        const res = await fetch(`/api/off-plan?${params.toString()}`);
        const data = await res.json();
        setProjects(data.results || []);
    };

    useEffect(() => { fetchProjects(); }, [filters, currency]);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    New Off-Plan Properties for Sale in Dubai
                </h1>
                <div className="flex gap-2 mt-4 md:mt-0">
                    {["AED", "EUR"].map((cur) => (
                        <Button
                            key={cur}
                            variant={currency === cur ? "default" : "outline"}
                            onClick={() => setCurrency(cur)}
                            className="px-4"
                        >
                            {cur}
                        </Button>
                    ))}
                    <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="px-4">Filters</Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                            <SheetHeader>
                                <SheetTitle>Filters</SheetTitle>
                            </SheetHeader>
                            <div className="mt-4">
                                <FiltersPanel filters={filters} setFilters={setFilters} />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            {/* Properties grid */}
            <div>
                {projects.length === 0 ? (
                    <p className="text-gray-500">No properties found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                        {projects.map((p) => (
                            <PropertyCard key={p.id} property={p} currency={currency} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
