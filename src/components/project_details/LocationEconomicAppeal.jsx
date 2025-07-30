'use client';
import Image from 'next/image';

const LocationEconomicAppeal = ({ property }) => {
    // Use a few photos from the API for the appeal section
    const appealImages = property?.media?.photos?.slice(2, 5) || [
        "/project_detail_images/building.jpg",
        "/project_detail_images/building.jpg",
        "/project_detail_images/building.jpg"
    ];

    // Construct "location/economic appeal" highlights dynamically from available API data
    const locationAppeal = [
        {
            title: "Prime Location",
            description: `${property?.location?.sub_community?.name || ""}, ${property?.location?.community?.name || "Dubai"}`
        },
        {
            title: "Developer",
            description: property?.project?.developer?.name || "Not specified"
        },
        {
            title: "Completion Date",
            description: property?.details?.completion_details?.completion_date
                ? new Date(property.details.completion_details.completion_date).toLocaleDateString("en-US", { month: "long", year: "numeric" })
                : "TBA"
        },
        {
            title: "Price",
            description: property?.price ? `AED ${property.price.toLocaleString()}` : "Price on request"
        },
        {
            title: "Property Type",
            description: property?.type?.sub || "Apartments"
        }
    ];

    const title = property?.title || "Project";
    return (
        <section className="px-4 py-12 md:px-16 bg-white" dir="ltr">
            {/* Title + Images Row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 md:w-1/2">
                    Location and{' '}
                    <span className="text-sky-600">Economic Appeal</span> of {title} {/* <-- Dynamic title */}
                </h2>

                {/* Images beside title */}
                <div className="grid grid-cols-3 gap-2 md:w-1/2">
                    {appealImages.map((img, idx) => (
                        <Image
                            key={idx}
                            src={img}
                            alt={`Appeal ${idx + 1}`}
                            width={100}
                            height={100}
                            className="rounded-lg object-cover w-full h-24 md:h-28"
                        />
                    ))}
                </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
                {locationAppeal.length > 0 ? locationAppeal.map((item, idx) => (
                    <div key={idx}>
                        <h4 className="font-semibold text-base text-gray-800 mb-1">
                            {item.title}
                        </h4>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                )) : <p className="text-gray-500">No location/economic highlights available.</p>}
            </div>
        </section>
    );
};

export default LocationEconomicAppeal;
