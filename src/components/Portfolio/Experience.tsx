
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description: "Lead developer for the company's flagship product. Responsible for architecture decisions and team mentoring."
    },
    {
      role: "Software Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2020",
      description: "Worked on multiple client projects using React, Node.js, and AWS."
    },
    {
      role: "Junior Developer",
      company: "StartUp Ventures",
      period: "2016 - 2018",
      description: "Assisted in developing mobile applications using Flutter and React Native."
    }
  ];

  return (
    <div className="p-6 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-gradient">Experience</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <Card key={index} className="devto-card hover:border-[#403E43] transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white">{experience.role}</CardTitle>
                  <p className="text-green-400">{experience.company}</p>
                </div>
                <span className="text-gray-400 text-sm">{experience.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{experience.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experience;
