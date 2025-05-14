import React from "react";

import { ProfileCard } from "@/components/profile-card";
import { ProjectShowcase } from "@/components/project-showcase";

function Ssemwo() {
  return (
    <div className="min-h-screen bg-white">

      <main className="container mx-auto px-4 py-12 mt-12">
        <ProfileCard
          name="Ssemwogerere Trevor Simon"
          role="Backend Developer – AI-Powered Land Data API"
          image="/images/portfolio/trevor.jpeg"
          about="Backend developer with a focus on creating robust APIs and integrating AI models for real estate applications. Experienced in using Flask to build RESTful services that connect frontend applications with machine learning models, enabling dynamic data retrieval and processing."
          studentNumber="2100713703"
          registrationNumber="21/U/13093/PS"
          skills={[
            "Flask",
            "REST API",
            "Google APIs Integration",
            "Python",
            "AI Model Integration",
            "Backend Development",
          ]}
        />

        <ProjectShowcase
          projectName="AI-Powered Land Information API"
          description="Developed a RESTful Flask API backend that integrates Google Maps and location services with AI models for land valuation. The API provides endpoints for retrieving model predictions based on location, enabling dynamic access to intelligent land pricing data from the frontend."
          contributions={[
            "Designed and implemented Flask-based API architecture",
            "Integrated Google APIs to retrieve location-based data",
            "Connected AI models to serve real-time predictions via endpoints",
            "Handled data routing and error handling for frontend requests",
            "Documented and tested all endpoints using Postman and Swagger",
          ]}
          technologies={["Flask", "Python", "Google Maps API", "Postman", "Swagger", "Docker"]}
          images={["/images/backend/routes.png", "/images/backend/models.png"]}
        />
      </main>
    </div>
  );
}

export default Ssemwo;
