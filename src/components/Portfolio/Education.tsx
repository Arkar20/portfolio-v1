
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const Education = () => {
  const isMobile = useIsMobile();
  
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      period: "2018 - 2020",
      description: "Specialized in Artificial Intelligence and Machine Learning."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "MIT",
      period: "2014 - 2018",
      description: "Focus on software engineering and distributed systems."
    },
    {
      degree: "High School Diploma",
      institution: "Tech High School",
      period: "2010 - 2014",
      description: "Advanced courses in mathematics and computer science."
    }
  ];

  return (
    <div className="p-4 sm:p-6 animate-fade-in">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gradient">Education</h2>
      <div className="space-y-4 sm:space-y-6">
        {education.map((item, index) => (
          <Card key={index} className="devto-card hover:border-[#403E43] transition-all duration-300">
            <CardHeader className={isMobile ? "p-4" : undefined}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <CardTitle className="text-white text-base sm:text-lg">{item.degree}</CardTitle>
                  <p className="text-green-400 text-sm sm:text-base">{item.institution}</p>
                </div>
                <span className="text-gray-400 text-xs sm:text-sm">{item.period}</span>
              </div>
            </CardHeader>
            <CardContent className={isMobile ? "p-4 pt-0" : undefined}>
              <p className="text-gray-300 text-sm sm:text-base">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Education;
