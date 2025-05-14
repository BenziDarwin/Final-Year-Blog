import React from "react"; 

import { ProfileCard } from "@/components/profile-card";
import { ProjectShowcase } from "@/components/project-showcase";

export default function Benjamin() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12 mt-12">
        <ProfileCard 
          name="Ssali Benjamin Tamale" 
          role="AI/ML Developer – Land Price Prediction" 
          image="/images/portfolio/benjamin.jpeg" 
          about="AI/ML developer who designed and trained machine learning models for land price prediction using factors like population, electricity coverage, and road networks. Applied advanced regression techniques, especially Polynomial Regression, to capture trends in real estate data. Passionate about turning raw data into actionable insights for smart land investment decisions."
          registrationNumber="21/U/13703/EVE"
          studentNumber="2100713703"
        />

        <ProjectShowcase
          projectName="AI Models for Land Price Prediction"
          description="Developed machine learning models to predict future land prices based on key indicators such as population growth, electricity access, and road infrastructure. The project aimed to assist stakeholders in making data-driven investment decisions in real estate."
          contributions={[
            "Performed extensive data cleaning and preprocessing across multiple datasets",
            "Built and evaluated several regression models, with a focus on Polynomial Regression for capturing nonlinear trends",
            "Integrated historical and spatial data to enhance prediction accuracy",
            "Validated model performance using cross-validation techniques",
            "Collaborated with the data visualization team to present insights through a web interface",
          ]}
          technologies={["Python", "Pandas", "Scikit-learn", "Jupyter Notebook", "Git"]}
          images={["/images/ai/valuation_graph.png", "/images/ai/feature_evaluation.png"]}
        />
      </main>
    </div>
  );
}
