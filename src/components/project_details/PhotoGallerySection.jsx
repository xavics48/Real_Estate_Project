'use client';
import { useState } from 'react';
import Image from 'next/image';

const PhotoGallerySection = ({ property }) => {
    // All photos from API (no type differentiation in your response)
    const allImages = property?.media?.photos || ["/project_detail_images/building.jpg"];

    // We'll just split them manually (first half as exterior, second half as interior)
    const midIndex = Math.ceil(allImages.length / 2);
    const exteriorImages = allImages.slice(0, midIndex);
    const interiorImages = allImages.slice(midIndex);

    // If no split is needed (e.g., only a few images), default to one group
    const hasInterior = interiorImages.length > 0;

    const [activeTab, setActiveTab] = useState('exterior');
    const [selectedImage, setSelectedImage] = useState(exteriorImages[0] || "/project_detail_images/building.jpg");

    const images = activeTab === 'exterior' ? exteriorImages : interiorImages;

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        const defaultImg = tab === 'exterior'
            ? (exteriorImages[0] || "/project_detail_images/building.jpg")
            : (interiorImages[0] || "/project_detail_images/building.jpg");
        setSelectedImage(defaultImg);
    };

    return (
        <section className="px-4 py-12 md:px-16 bg-white" dir="ltr">
            {/* Top Title + Tabs */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    Photo Gallery
                </h2>

                {/* Buttons */}
                <div className="flex space-x-2">
                    <button
                        onClick={() => handleTabChange('exterior')}
                        className={`px-4 py-1 border rounded-md text-sm font-medium ${activeTab === 'exterior'
                                ? 'bg-sky-500 text-white'
                                : 'border-sky-300 text-gray-700'
                            }`}
                    >
                        Exteriors
                    </button>
                    <button
                        onClick={() => handleTabChange('interior')}
                        className={`px-4 py-1 border rounded-md text-sm font-medium ${activeTab === 'interior'
                                ? 'bg-sky-500 text-white'
                                : 'border-sky-300 text-gray-700'
                            }`}
                    >
                        Interiors
                    </button>
                </div>
            </div>

            {/* Main Large Image */}
            <div className="mb-4">
                <Image
                    src={selectedImage}
                    alt="Selected Gallery"
                    width={1000}
                    height={500}
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-md transition-all duration-300"
                />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        className={`border-2 rounded-md overflow-hidden min-w-[100px] transition-all duration-300 ${selectedImage === img ? 'border-sky-500' : 'border-transparent'
                            }`}
                    >
                        <Image
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            width={120}
                            height={80}
                            className="object-cover w-[100px] h-[70px]"
                        />
                    </button>
                ))}
            </div>
        </section>
    );
};

export default PhotoGallerySection;
