import React from "react"; 

import { ProfileCard } from "@/components/profile-card";
import { ProjectShowcase } from "@/components/project-showcase";

function Sylvia() {
  return (
    <div className="min-h-screen bg-white">

      <main className="container mx-auto px-4 py-12 mt-12">
        <ProfileCard
          name="Namuli Sylvia"
          role="System Tester & Documentation Lead"
          image="/images/portfolio/sylvia.jpeg"
          registrationNumber="21/U/12848/PS"
          studentNumber="2100712848"
          about="Responsible for system documentation and testing. Ensured that core functionalities were fully implemented and validated against project requirements, contributing to overall system stability and usability."
          skills={[
            "System Testing",
            "Quality Assurance",
            "Technical Documentation",
            "Bug Tracking",
            "Functional Verification",
            "Report Writing"
          ]}
        />

        <ProjectShowcase
          projectName="System Testing and Documentation"
          description="Led the system testing process and handled all documentation to ensure the solution was functional, understandable, and met project requirements."
          contributions={[
            "Tested system features to confirm functionality and correctness",
            "Documented all system components, processes, and user flows",
            "Reported and tracked bugs to improve quality",
            "Verified that AI models and APIs integrated properly",
            "Collaborated with developers to ensure feature completeness"
          ]}
          technologies={[
            "Markdown",
            "Microsoft Word",
            "Excel",
            "Manual Testing",
            "Test Case Writing"
          ]}
          images={[
            "/images/documentation/sdd.png",
            "/images/documentation/report.png",
          ]}
        />
      </main>
    </div>
  );
}

export default Sylvia;
