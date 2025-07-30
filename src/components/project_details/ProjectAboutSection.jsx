'use client';
import Image from 'next/image';

const ProjectAboutSection = ({ property }) => { // <-- Accept property as prop
    const features = property?.amenities?.flatMap(a =>
        a.items?.map(item => ({
            icon: '/project_detail_images/building.jpg', // API doesn't provide icons, use placeholder
            label: item
        }))
    ) || [];

    // Project description
    const description = property?.description || "No detailed description available.";

    // Use first 2 images from photos for gallery
    const gallery = property?.media?.photos?.slice(0, 2) || [
        "/project_detail_images/building.jpg",
        "/project_detail_images/building.jpg"
    ];

    // Project title
    const title = property?.title || "About the Project";

    return (
        <section className="bg-white px-4 md:px-12 py-12" dir="ltr">
            {/* Feature Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-10">
                {features.length > 0 ? features.map((feature, idx) => (
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
                )) : (
                    <p className="text-gray-500 col-span-4">No amenities available</p>
                )}
            </div>

            {/* Title + CTA */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    About {title} {/* <-- Dynamic title */}
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
                <p>{description}</p> {/* <-- Dynamic description */}
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gallery.map((img, idx) => (
                    <Image
                        key={idx}
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full"
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectAboutSection;
