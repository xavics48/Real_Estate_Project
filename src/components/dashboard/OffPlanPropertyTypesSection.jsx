'use client';
import Image from 'next/image';
import { FaArrowRight, FaBuilding, FaHandsHelping, FaStar } from 'react-icons/fa';

const propertyTypes = [
    {
        title: 'Apartments for Sale',
        label: 'FROM AED 240,000',
        image: '/dashboard/apartments.jpg',
    },
    {
        title: 'Townhouses for Sale',
        label: 'FROM AED 558,000',
        image: '/dashboard/townhouses.jpg',
    },
    {

        title: 'Villas for Sale',
        label: 'FROM AED 1,000,000',
        image: '/dashboard/villas.jpg',
    },
    {
        title: 'Buildings for Sale',
        label: 'FROM AED 47,000,000',
        image: '/dashboard/building.jpg',
    },
    {
        title: 'Land Plots for Sale',
        label: 'ONLINE PRE-APPROVAL',
        image: '/dashboard/property1.jpg',
    },
    {
        title: 'All Properties for Sale',
        label: 'FROM AED 240,000',
        image: '/dashboard/building.jpg',
    },
];

const OffPlanPropertyTypesSection = () => {
    return (
        <section className="px-4 py-16 md:px-16 bg-white" dir="ltr">
            {/* Heading Section */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-10">
                {/* Left Text */}
                <div className="max-w-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        New Off-Plan Properties in Dubai
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Off-plan properties are those developments which are still in the planning or
                        the construction stages. Purchasing an off-plan property in Dubai (the UAE)
                        comes with certain advantages as many real estate developers in the United Arab
                        Emirates offer special promotions in the early phases, such as generous post-handover
                        payment plans.
                    </p>
                </div>

                {/* Icons */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    {/* Each Icon */}
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                        <FaBuilding className="text-sky-600 text-xl" />
                        <span>Brand New Projects</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                        <FaHandsHelping className="text-sky-600 text-xl" />
                        <span>Full Support</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                        <FaStar className="text-sky-600 text-xl" />
                        <span>Priority Booking</span>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-4 lg:mt-0">
                    <button className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-6 py-2 rounded-md transition">
                        Find Your Off-Plan Property in Dubai
                    </button>
                </div>
            </div>

            {/* Property Types Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {propertyTypes.map((item, index) => (
                    <div
                        key={index}
                        className="relative rounded-lg overflow-hidden group shadow hover:shadow-lg transition"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={300}
                            className="object-cover w-full h-[200px]"
                        />
                        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              {item.label}
            </span>

                        {/* Title */}
                        <div className="flex items-center justify-between px-4 py-3 bg-white">
                            <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
                            <FaArrowRight className="text-sky-500 text-sm" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OffPlanPropertyTypesSection;
