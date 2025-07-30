
import { getPropertyById } from "@/lib/bayutApi";
import React from 'react';
import ProjectHeaderSection from '@/components/project_details/ProjectHeaderSection';
import ProjectDetailsHighlights from "@/components/project_details/ProjectDetailsHighlights";
import ProjectAboutSection from "@/components/project_details/ProjectAboutSection";
import LocationEconomicAppeal from "@/components/project_details/LocationEconomicAppeal";
import PhotoGallerySection from "@/components/project_details/PhotoGallerySection";
import FloorPlanSection from "@/components/project_details/FloorPlanSection";

const ProjectDetailsPage = async ({ params }) => {
    const { id } = await params;
    const property = await getPropertyById(id);

    if (!property) {
        return <div className="p-6 text-gray-500">Property not found.</div>;
    }
    return (
        <main className="min-h-screen bg-white">
            <ProjectHeaderSection property={property} />
            <ProjectDetailsHighlights property={property}/>
            <ProjectAboutSection property={property}/>
            <LocationEconomicAppeal property={property}/>
            <PhotoGallerySection property={property}/>
            <FloorPlanSection property={property} />
        </main>
    );
};

export default ProjectDetailsPage;
