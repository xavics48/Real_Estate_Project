'use client';
import React from 'react';
import ProjectHeaderSection from '@/components/project_details/ProjectHeaderSection';
import ProjectDetailsHighlights from "@/components/project_details/ProjectDetailsHighlights";
import ProjectAboutSection from "@/components/project_details/ProjectAboutSection";
import LocationEconomicAppeal from "@/components/project_details/LocationEconomicAppeal";
import PhotoGallerySection from "@/components/project_details/PhotoGallerySection";
import FloorPlanSection from "@/components/project_details/FloorPlanSection";

const ProjectDetailsPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <ProjectHeaderSection />
            <ProjectDetailsHighlights/>
            <ProjectAboutSection/>
            <LocationEconomicAppeal/>
            <PhotoGallerySection/>
            <FloorPlanSection />
        </main>
    );
};

export default ProjectDetailsPage;
