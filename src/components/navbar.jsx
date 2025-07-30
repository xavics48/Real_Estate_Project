'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full border-b bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/logo.jpg" alt="Dubai Off Plan" className="h-8 w-auto" />
                        <div className="text-sm leading-tight">
                            <span className="font-bold">DUBAI</span><br />
                            <span className="text-xs text-blue-500">OFF PLAN</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-6 items-center">
                        {["Properties", "Events", "Coming Soon Projects", "Developers", "Areas", "Map", "Videos", "FAQ", "Blog"].map((item) => (
                            <a key={item} href="#" className="text-sm hover:text-blue-600 transition">{item}</a>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <img src="https://flagcdn.com/gb.svg" alt="EN" className="h-4 w-6" />
                            <span className="text-sm">EN</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div className="bg-sky-500 text-white rounded-full p-2 cursor-pointer hover:bg-sky-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <span className="text-sm font-medium">Find</span>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-2 space-y-2">
                        {["Properties", "Events", "Coming Soon Projects", "Developers", "Areas", "Map", "Videos", "FAQ", "Blog"].map((item) => (
                            <a key={item} href="#" className="block text-sm py-2 border-b">{item}</a>
                        ))}
                        <div className="flex items-center gap-2 mt-2">
                            <img src="https://flagcdn.com/gb.svg" alt="EN" className="h-4 w-6" />
                            <span className="text-sm">EN</span>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
