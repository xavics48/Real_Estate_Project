'use client';
import Image from 'next/image';

const ProjectAboutSection = () => {
    return (
        <section className="bg-white px-4 md:px-12 py-12" dir="ltr">
            {/* Feature Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-10">
                {[
                    { icon: '/project_detail_images/building.jpg', label: 'Open-air plaza' },
                    { icon: '/project_detail_images/golf.png', label: 'Putt-putt mini golf' },
                    { icon: '/project_detail_images/pool.png', label: 'Swimming pools' },
                    { icon: '/project_detail_images/business.png', label: 'Business centre' },
                ].map((feature, idx) => (
                    <div
                        key={idx}
                        className="bg-sky-100 hover:bg-sky-200 transition-all rounded-lg py-6 px-4 flex flex-col items-center"
                    >
                        <Image
                            src={feature.icon}
                            alt={feature.label}
                            width={50}
                            height={50}
                            className="mb-3"
                        />
                        <p className="font-semibold text-sky-700 text-sm">{feature.label}</p>
                    </div>
                ))}
            </div>

            {/* Title + CTA */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    About Eden Sobha Central
                </h2>
                <div className="flex items-center gap-2 text-sky-600 font-medium cursor-pointer hover:underline">
                    <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center">
                        &gt;
                    </div>
                    <span>Request Available Units & Prices</span>
                </div>
            </div>

            {/* Description */}
            <div className="text-gray-700 space-y-4 text-sm leading-relaxed mb-10">
                <p>
                    Rising 70 storeys above Sheikh Zayed Road, Eden at Sobha Central is the flagship tower in a premium freehold development by Sobha Realty. The project offers a curated collection of 1- and 2-bedroom apartments with sweeping views of the sea, Dubai Marina, and Bluewaters Island. Apartments feature modern layouts, large balconies, and expansive windows that flood interiors with natural light. Designed with wellness, business, and leisure in mind, the development seamlessly integrates retail, coworking, sports, and relaxation spaces across its podium and rooftop levels.
                </p>
                <p>
                    Eden is directly connected to a vibrant retail mall, boutique shops, and a business hub featuring 175,000 sq. ft. of leasable office space. Its smart infrastructure, lush podium gardens, and rooftop lounges are designed to support an elevated urban lifestyle. Located just steps from Jebel Ali Metro Station and offering a private exit to Sheikh Zayed Road, the tower provides unmatched connectivity to both airports, major business districts, and lifestyle destinations.
                </p>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                    src="/project_detail_images/building.jpg"
                    alt="Gallery 1"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-3/4"
                />
                <Image
                    src="/project_detail_images/building.jpg"
                    alt="Gallery 2"
                    width={400}
                    height={200}
                    className="rounded-lg object-cover w-2/3 h-1/2"
                />
            </div>
        </section>
    );
};

export default ProjectAboutSection;
