'use client';
import Image from 'next/image';

const LocationEconomicAppeal = () => {
    return (
        <section className="px-4 py-12 md:px-16 bg-white" dir="ltr">
            {/* Title + Images Row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 md:w-1/2">
                    Location and{' '}
                    <span className="text-sky-600">Economic Appeal</span>
                </h2>

                {/* Images beside title */}
                <div className="grid grid-cols-3 gap-2 md:w-1/2">
                    <Image
                        src="/project_detail_images/building.jpg"
                        alt="Appeal 1"
                        width={100}
                        height={100}
                        className="rounded-lg object-cover w-full h-24 md:h-28"
                    />
                    <Image
                        src="/project_detail_images/building.jpg"
                        alt="Appeal 2"
                        width={100}
                        height={100}
                        className="rounded-lg object-cover w-full h-24 md:h-28"
                    />
                    <Image
                        src="/project_detail_images/building.jpg"
                        alt="Appeal 3"
                        width={100}
                        height={100}
                        className="rounded-lg object-cover w-full h-24 md:h-28"
                    />
                </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
                {[
                    {
                        title: 'Excellent Connectivity',
                        desc: 'Eden at Sobha Central is located directly on Sheikh Zayed Road... under 25 minutes.',
                    },
                    {
                        title: 'Resort-Style Amenities',
                        desc: 'Eden’s podium and rooftop levels are designed to provide a fully integrated wellness and leisure experience...',
                    },
                    {
                        title: 'Family-Friendly Features',
                        desc: 'While Eden sits within a high-rise urban setting, the development caters to family life through secure landscaped podiums...',
                    },
                    {
                        title: 'Healthcare Access',
                        desc: 'Residents at Eden benefit from convenient access to a wide network of healthcare providers...',
                    },
                    {
                        title: 'Investment Potential',
                        desc: 'Eden at Sobha Central offers investors a rare opportunity to acquire freehold property directly on Sheikh Zayed Road...',
                    },
                    {
                        title: 'Residency Eligibility',
                        desc: 'Eden at Sobha Central enables foreign buyers to obtain UAE residency. A 2-year investor visa is available...',
                    },
                    {
                        title: 'Sheikh Zayed Road Outlook',
                        desc: 'As one of the most desirable addresses in Dubai... transforming with new residential, retail, and lifestyle developments...',
                    },
                ].map((item, idx) => (
                    <div key={idx}>
                        <h4 className="font-semibold text-base text-gray-800 mb-1">
                            {item.title}
                        </h4>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LocationEconomicAppeal;
