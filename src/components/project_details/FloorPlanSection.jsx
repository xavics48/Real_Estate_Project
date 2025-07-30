'use client';
import { useState } from 'react';
import Image from 'next/image';

const FloorPlanSection = ({ property }) => {
    // Map floor plan images from API (2D + 3D if available)
    const floorPlans = property?.floor_plan?.["2d_images"]?.map((img, idx) => ({
        name: `Plan ${idx + 1}`,
        image: img,
        size: property?.area?.built_up ? `${property.area.built_up} ${property.area.unit}` : "Size TBA"
    })) || [];

    const tabs = floorPlans.length > 0 ? floorPlans.map(fp => fp.name) : ['Default Plan'];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const current = floorPlans.find(fp => fp.name === activeTab) || {
        image: "/project_detail_images/design.jpg",
        size: property?.area?.built_up ? `${property.area.built_up} ${property.area.unit}` : "Size TBA"
    };

    return (
        <section className="px-4 py-12 md:px-16 bg-white" dir="ltr">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">
                Floor Plans of {property?.title || "Project"}
            </h2>

            {/* Tab Buttons */}
            <div className="flex space-x-4 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2 rounded-md text-sm font-medium border ${activeTab === tab
                                ? 'bg-sky-500 text-white'
                                : 'border-sky-300 text-gray-700'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Card */}
            <div className="bg-white border rounded-xl shadow-md p-6 md:flex gap-6">
                <div className="flex-shrink-0">
                    <Image
                        src={current.image}
                        alt={`${activeTab} floor plan`}
                        width={300}
                        height={300}
                        className="rounded-md object-contain w-full h-auto"
                    />
                </div>

                <div className="mt-4 md:mt-0 flex flex-col justify-between flex-grow">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">{activeTab} Apartment</h3>
                        <p className="text-sm text-gray-500 mt-1">{current.size}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <button className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-md text-sm font-medium transition-all">
                            Open All Floor Plans
                        </button>
                        <button className="border border-sky-500 hover:bg-sky-100 text-sky-600 px-5 py-2 rounded-md text-sm font-medium transition-all">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FloorPlanSection;
