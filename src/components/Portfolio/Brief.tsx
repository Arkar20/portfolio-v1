
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Brief = () => {
  return (
    <div className="h-full flex flex-col justify-center p-8 lg:p-12 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-900/5 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-900/5 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="max-w-md z-10 space-y-8 animate-fade-in">
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-900/40 to-black rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse-slow"></div>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-500/10 via-black to-green-900/20 animate-spin-slow"></div>
              <Avatar className="w-32 h-32 border-[3px] border-green-900/50 relative">
                <div className="absolute inset-0 bg-green-900/5 rounded-full animate-pulse-slow"></div>
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="bg-black text-white">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="space-y-3 text-center sm:text-left">
            <h4 className="text-green-800 text-xl font-light tracking-wide">Hello, I'm</h4>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient-green">John Doe</span>
            </h1>
            <div className="h-px w-3/4 mx-auto sm:mx-0 bg-gradient-to-r from-transparent via-green-900/50 to-transparent my-2"></div>
            <h2 className="text-2xl md:text-3xl text-white font-light tracking-wider">
              Software Developer
            </h2>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <p className="text-white/90 leading-relaxed border-l-2 border-green-900/50 pl-4 py-1 italic">
            I specialize in building modern web applications using cutting-edge technologies.
            With a passion for clean code and exceptional user experiences, I bring ideas to life
            through elegant solutions.
          </p>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {['React', 'TypeScript', 'Node.js', 'Flutter', 'Tailwind'].map((skill, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-900/30 to-transparent rounded-full opacity-75 group-hover:opacity-100 blur-[1px] transition duration-300"></div>
              <span className="relative px-3 py-1 bg-black border border-green-900/40 rounded-full text-sm text-white group-hover:border-green-900/60 transition-all duration-300 cursor-default flex items-center">
                {skill}
              </span>
            </div>
          ))}
        </div>
        
        <div className="pt-6">
          <Button className="neo-border bg-black hover:bg-black/80 text-white relative overflow-hidden group transition-all duration-300">
            <span className="relative flex items-center gap-2">
              Download CV <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Brief;
