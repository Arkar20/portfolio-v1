
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightIcon, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      link: "#",
      repo: "#",
      image: "bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center"
    },
    {
      title: "E-Commerce Platform",
      description: "A fully functional e-commerce platform with payment integration.",
      tags: ["Next.js", "Stripe", "MongoDB"],
      link: "#",
      repo: "#",
      image: "bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application for teams.",
      tags: ["React", "Redux", "Firebase"],
      link: "#",
      repo: "#",
      image: "bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center"
    },
    {
      title: "Mobile Fitness App",
      description: "A cross-platform fitness tracking application.",
      tags: ["Flutter", "Dart", "Firebase"],
      link: "#",
      repo: "#",
      image: "bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center"
    }
  ];

  return (
    <div className="p-6 animate-fade-in">
      <h2 className="text-2xl font-bold mb-8 text-gradient relative inline-block">
        Projects
        <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gradient-to-r from-green-900/40 via-white/10 to-transparent"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="devto-card overflow-hidden transition-all duration-500 hover:-translate-y-1 group"
          >
            <div className="h-40 w-full relative overflow-hidden">
              <div className={`absolute inset-0 ${project.image} transform group-hover:scale-110 transition-transform duration-1000 opacity-70`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] via-[#1A1F2C]/80 to-transparent"></div>
            </div>
            <CardHeader className="relative z-10 -mt-14 pt-0">
              <CardTitle className="text-white text-2xl mt-10">{project.title}</CardTitle>
              <CardDescription className="text-gray-300/90">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-2 py-1 bg-[#403E43] border border-[#555555]/20 rounded-full text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <a 
                href={project.link} 
                className="text-gray-300 hover:text-white transition-colors flex items-center group/link"
              >
                <ExternalLink className="mr-1 h-3 w-3" />
                <span className="group-hover/link:underline">Demo</span>
              </a>
              <a 
                href={project.repo}
                className="text-gray-300 hover:text-white transition-colors flex items-center group/link"
              >
                <Github className="mr-1 h-3 w-3" />
                <span className="group-hover/link:underline">Code</span>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
