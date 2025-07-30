'use client';
import Image from 'next/image';
import {
    FaMoneyBillWave,
    FaPercent,
    FaCalendarAlt,
    FaPhoneAlt,
    FaWhatsapp,
} from 'react-icons/fa';

const ProjectHeaderSection = ({ property }) => {  // <-- Accept property data as prop
    // Extract dynamic data with safe fallbacks
    const coverPhoto = property?.media?.cover_photo || "/project_detail_images/building.jpg";
    const title = property?.title || "Project Title";
    const community = `${property?.location?.sub_community?.name || ""} ${property?.location?.community?.name || "Dubai"}`;
    const price = property?.price ? `AED ${property.price.toLocaleString()}` : "Price on request";
    const handoverDate = property?.details?.completion_details?.completion_date
        ? new Date(property.details.completion_details.completion_date).toLocaleDateString("en-US", { month: "short", year: "numeric" })
        : "TBA";
    const paymentPlan = property?.payment_plans?.[0]
        ? `${property.payment_plans[0].down_payment?.percent || 0}/${property.payment_plans[0].handover?.percent || 0} Plan`
        : "Flexible Plan";
    return (
        <section className="relative bg-gradient-to-r from-white to-[#fdfdfd] rounded-xl shadow-sm px-4 py-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">

            {/* Right Side - Image */}
            <div className="relative">
                <Image
                    src={coverPhoto} // <-- API image
                    alt={title}
                    width={600}
                    height={400}
                    className="rounded-[30px] object-cover w-full h-full"
                />

                {/* Floating Buttons */}
                <div className="absolute bottom-4 right-4 flex flex-col items-center gap-2">
                    <a
                        href={`tel:${property?.agent?.contact?.phone || "+97100000000"}`} // <-- API agent phone
                        className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-md text-white"
                    >
                        <FaPhoneAlt />
                    </a>
                    <a
                        href={`https://wa.me/${property?.agent?.contact?.whatsapp || "97100000000"}`} // <-- API WhatsApp
                        target="_blank"
                        className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-md text-white"
                    >
                        <FaWhatsapp />
                    </a>
                </div>
            </div>

            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center gap-4">
                {/* Breadcrumb */}
                <div className="text-sm text-blue-600 text-left">
                    <span className="text-gray-400">Main Page &gt; Projects &gt;</span>{' '}
                    {community} {/* <-- Community from API */}
                </div>

                {/* Project Title */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-left">
                        {title} {/* <-- Project title from API */}
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-700 mt-2 text-left">
                        in {community} – Waterfront Living {/* <-- Community */}
                    </p>
                </div>

                {/* CTA + QR */}
                <div className="flex items-center gap-4 mt-4 justify-start">
                    <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2 rounded-md transition-all text-left">
                        Discover More
                    </button>
                    <Image
                        src="/project_detail_images/qr_code.jpg"
                        alt="QR Code"
                        width={60}
                        height={60}
                        className="rounded"
                    />
                </div>

                {/* Feature Info */}
                <div className="flex flex-wrap gap-6 mt-6 justify-start">
                    {/* Starting Price */}
                    <div className="flex items-center gap-2 text-sm justify-start">
                        <FaMoneyBillWave className="text-sky-500 text-xl" />
                        <div>
                            <p className="font-semibold text-gray-700">{price}</p> {/* <-- API price */}
                            <span className="text-gray-500 text-xs">Starting Price</span>
                        </div>
                    </div>

                    {/* Payment Plan */}
                    <div className="flex items-center gap-2 text-sm">
                        <FaPercent className="text-sky-500 text-xl" />
                        <div>
                            <p className="font-semibold text-gray-700">{paymentPlan}</p> {/* <-- API plan */}
                            <span className="text-gray-500 text-xs">Payment Plan</span>
                        </div>
                    </div>

                    {/* Handover */}
                    <div className="flex items-center justify-start gap-2 text-sm">
                        <FaCalendarAlt className="text-sky-500 text-xl" />
                        <div>
                            <p className="font-semibold text-gray-700">{handoverDate}</p> {/* <-- API handover */}
                            <span className="text-gray-500 text-xs">Handover</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProjectHeaderSection;
