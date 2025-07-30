"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function FiltersPanel({ filters, setFilters }) {
    const [isOpen, setIsOpen] = useState(false);

    const resetFilters = () => setFilters({});

    return (
        <>
            {/* Mobile Trigger */}
            <div className="md:hidden flex justify-end mb-4">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline">Filters</Button>
                    </SheetTrigger>
                    <SheetContent className="p-6 space-y-4">
                        {renderFilters()}
                        <Button onClick={() => setIsOpen(false)} className="w-full mt-4">Apply</Button>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:block w-64 bg-white rounded-xl shadow p-4 sticky top-20">
                {renderFilters()}
                <Button variant="ghost" onClick={resetFilters} className="mt-4 w-full">Reset Filters</Button>
            </div>
        </>
    );

    function renderFilters() {
        return (
            <div className="space-y-5">
                <div>
                    <label className="text-sm font-medium">Property Type</label>
                    <Select
                        value={filters.category || ""}
                        onValueChange={(v) => setFilters({ ...filters, category: v })}
                    >
                        <SelectTrigger><SelectValue placeholder="Select Type" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="apartments">Apartments</SelectItem>
                            <SelectItem value="villas">Villas</SelectItem>
                            <SelectItem value="townhouses">Townhouses</SelectItem>
                            <SelectItem value="penthouse">Penthouses</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <label className="text-sm font-medium">Price Range</label>
                    <Slider
                        min={100000}
                        max={5000000}
                        step={50000}
                        value={[filters.price_min || 100000, filters.price_max || 5000000]}
                        onValueChange={([min, max]) => setFilters({ ...filters, price_min: min, price_max: max })}
                    />
                    <div className="flex justify-between text-sm mt-2">
                        <span>{filters.price_min?.toLocaleString() || 100000} AED</span>
                        <span>{filters.price_max?.toLocaleString() || 5000000} AED</span>
                    </div>
                </div>

                <div>
                    <label className="text-sm font-medium">Bedrooms</label>
                    <Select
                        value={filters.rooms || ""}
                        onValueChange={(v) => setFilters({ ...filters, rooms: v })}
                    >
                        <SelectTrigger><SelectValue placeholder="Any" /></SelectTrigger>
                        <SelectContent>
                            {[1, 2, 3, 4, 5].map((n) => <SelectItem key={n} value={n}>{n}+</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Completed</label>
                    <Switch
                        checked={filters.is_completed || false}
                        onCheckedChange={(v) => setFilters({ ...filters, is_completed: v })}
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">Sort by</label>
                    <Select
                        value={filters.index || "popular"}
                        onValueChange={(v) => setFilters({ ...filters, index: v })}
                    >
                        <SelectTrigger><SelectValue placeholder="Sort" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="popular">Popular</SelectItem>
                            <SelectItem value="verified">Verified</SelectItem>
                            <SelectItem value="latest">Latest</SelectItem>
                            <SelectItem value="lowest_price">Price: Low to High</SelectItem>
                            <SelectItem value="highest_price">Price: High to Low</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        );
    }
}
