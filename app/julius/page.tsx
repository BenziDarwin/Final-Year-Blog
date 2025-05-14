import React from "react";

import { ProfileCard } from "@/components/profile-card";
import { ProjectShowcase } from "@/components/project-showcase";

function Julius() {
  return (
    <div className="min-h-screen bg-white">

      <main className="container mx-auto px-4 py-12 mt-12">
        <ProfileCard
          name="Julius Kazibwe"
          role="Front-End Developer – Responsive Web Design"
          image="/images/portfolio/julius.jpeg"
          registrationNumber="21/U/14318/PS"
          studentNumber="2100714318"
          about="Front-end developer who built a responsive web application using Next.js. Crafted a draft design for the user interface, ensuring a seamless and adaptive experience across devices."
          skills={[
            "Next.js",
            "Responsive Design",
            "JavaScript",
            "HTML/CSS",
            "UI/UX",
            "Draft Design"
          ]}
        />

        <ProjectShowcase
          projectName="Responsive Frontend Development with Next.js"
          description="Developed a dynamic and responsive frontend application using Next.js, implementing modern design principles to enhance user experience and accessibility."
          contributions={[
            "Developed a fully responsive user interface using Next.js",
            "Built draft designs for the frontend layout and user interactions",
            "Optimized performance for various devices and screen sizes",
            "Integrated UI components with backend APIs for seamless data flow",
            "Ensured cross-browser compatibility and accessibility compliance"
          ]}
          technologies={[
            "Next.js",
            "React",
            "Tailwind CSS",
            "JavaScript",
            "HTML5",
            "CSS3"
          ]}
          images={[
            "/images/platform/landing_page.jpeg",
            "/images/platform/land_listings.jpeg",
          ]}
        />
      </main>
    </div>
  );
}

export default Julius;
