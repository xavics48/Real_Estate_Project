'use client';
import Image from 'next/image';
import {
    FaMoneyBillWave,
    FaPercent,
    FaCalendarAlt,
    FaPhoneAlt,
    FaWhatsapp,
} from 'react-icons/fa';

const ProjectHeaderSection = () => {
    return (
        <section className="relative bg-gradient-to-r from-white to-[#fdfdfd] rounded-xl shadow-sm px-4 py-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">

            {/* Right Side - Image */}
            <div className="relative">
                <Image
                    src="/project_detail_images/building.jpg"
                    alt="Project"
                    width={600}
                    height={400}
                    className="rounded-[30px] object-cover w-full h-full"
                />

                {/* Floating Buttons */}
                <div className="absolute bottom-4 right-4 flex flex-col items-center gap-2">
                    <a
                        href="tel:+97100000000"
                        className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-md text-white"
                    >
                        <FaPhoneAlt />
                    </a>
                    <a
                        href="https://wa.me/97100000000"
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
                    Baystar by Vida RYM
                </div>


                {/* Project Title */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-left">
                        Baystar by VIDA
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-700 mt-2 text-left">
                        in Rashid Yachts & Marina – Waterfront Living
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
                            <p className="font-semibold text-gray-700">AED 2.1M</p>
                            <span className="text-gray-500 text-xs">Starting Price</span>
                        </div>
                    </div>

                    {/* Payment Plan */}
                    <div className="flex items-center gap-2 text-sm">
                        <FaPercent className="text-sky-500 text-xl" />
                        <div>
                            <p className="font-semibold text-gray-700">Easy 80/20</p>
                            <span className="text-gray-500 text-xs">Payment Plan</span>
                        </div>
                    </div>

                    {/* Handover */}
                    <div className="flex items-center justify-start gap-2 text-sm">
                        <FaCalendarAlt className="text-sky-500 text-xl" />
                        <div>
                            <p className="font-semibold text-gray-700">Q4 2029</p>
                            <span className="text-gray-500 text-xs">Handover</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProjectHeaderSection;
