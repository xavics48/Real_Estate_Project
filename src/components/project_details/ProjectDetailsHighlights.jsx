'use client';
import Image from 'next/image';

const ProjectDetailsHighlights = () => {
    return (
        <section className="relative grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-12 py-12 bg-white" dir="ltr">

            {/* Right Column: Brochure Image */}
            <div className="flex justify-center items-center">
                <Image
                    src="/project_detail_images/building.jpg"
                    alt="Project Brochure"
                    width={600}
                    height={450}
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Left Column: Text Content */}
            <div className="space-y-6 text-gray-800 text-sm leading-relaxed">
                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Location</h2>
                    <p>
                        Eden at Sobha Central is a landmark residential tower located directly on Sheikh Zayed Road, one of Dubai’s most prestigious and well-connected corridors. Positioned just steps from Jebel Ali Metro Station, the development offers fast access to key destinations such as Dubai Marina, Bluewaters Island, and Downtown Dubai. Residents benefit from a private exit lane to SZR and convenient connectivity to both DXB and DWC airports in under 30 minutes.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Property Types</h2>
                    <p>1 & 2-bedroom apartments</p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Features</h2>
                    <p>
                        Smart layouts, contemporary finishes, private balconies, panoramic views of the sea, Dubai Marina, and Bluewaters; a lifestyle podium with retail, wellness, and business zones; co-working spaces, rooftop lounges, sports zones, and wellness amenities.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-900">Investment Potential:</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Prime location along Sheikh Zayed Road, readily available for freehold residential purchase</li>
                        <li>High-end integrated development with retail, commercial, and residential synergy</li>
                        <li>Strong capital appreciation potential driven by flagship status and location</li>
                        <li>Attractive rental returns due to proximity to metro and business hubs</li>
                        <li>Flexible post-handover payment plan (60/40)</li>
                    </ul>
                </div>

                <div>
                    <p><span className="font-semibold">Average size:</span> 1BR from 631.41 sq.ft; 2BR from 966.59 sq.ft</p>
                    <p><span className="font-semibold">Starting price:</span> AED 1,745,848 (USD 475,000) for 1-bedroom units <br />
                        From AED 2,673,648 (USD 728,000) for 2-bedroom units</p>
                    <p><span className="font-semibold">Completion Due Date:</span> Estimated 2028</p>
                </div>

                {/* Brochure Button */}
                <div>
                    <a
                        href="#"
                        className="inline-block mt-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-md transition-all"
                    >
                        Download Free PDF Brochure
                    </a>
                </div>
            </div>

        </section>
    );
};

export default ProjectDetailsHighlights;
