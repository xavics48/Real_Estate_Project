'use client';
import Image from 'next/image';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const DashboardHeader = () => {
    return (
        <section
            className="relative h-[600px] bg-cover bg-center text-white"
            style={{ backgroundImage: `url('/dashboard/hero_banner.jpg')` }}
            dir="ltr"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#005D94]/40 z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full px-4 md:px-16">
                <div className="max-w-3xl mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight uppercase">
                        Palm <br /> <span className="text-white">Jebel Ali</span>
                    </h1>
                    <p className="text-lg md:text-xl mt-4">
                        Beachfront Villa Plots for Sale on Palm Jebel Ali
                    </p>
                    <button className="mt-6 bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-md transition-all">
                        Discover More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DashboardHeader;
