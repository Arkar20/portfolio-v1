import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Download, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

const Brief = () => {
    return (
        <div className="h-full flex flex-col p-8 lg:p-12 relative">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-900/5 blur-[80px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-900/5 blur-[100px] rounded-full"></div>
            </div>

            {/* Empty space at the top to push content to middle */}
            <div className="flex-1"></div>

            <div className="max-w-md z-10 space-y-8 animate-fade-in">
                <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-900/40 to-black rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse-slow"></div>
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-500/10 via-black to-green-900/20 animate-spin-slow"></div>
                            <Avatar className="w-32 h-32 border-[3px] border-green-900/50 relative">
                                <div className="absolute inset-0 bg-green-900/5 rounded-full animate-pulse-slow"></div>
                                <AvatarImage
                                    src="/placeholder.svg"
                                    alt="Profile"
                                />
                                <AvatarFallback className="bg-black text-white">
                                    JD
                                </AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                    <div className="space-y-3 text-center sm:text-left">
                        <h4 className="text-green-800 text-xl font-light tracking-wide">
                            Hello, I'm
                        </h4>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            <span className="text-gradient-green">Arkar</span>
                        </h1>
                        <div className="h-px w-3/4 mx-auto sm:mx-0 bg-gradient-to-r from-transparent via-green-900/50 to-transparent my-2"></div>
                        <h2 className="text-2xl md:text-3xl text-white font-light tracking-wider">
                            Software Engineer
                        </h2>
                    </div>
                </div>

                <div className="space-y-1">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <p className="text-white/90 leading-relaxed border-l-2 border-green-900/50 pl-4 py-1 italic">
                        Experienced software engineer with 4+ years of
                        experience working across diverse tech stacks. Skilled
                        in both front-end and back-end development, with a focus
                        on delivering efficient, scalable solutions. Currently
                        focused on scaling DevOps, integrating Large Language
                        Models (LLMs), and leveraging AWS for cloud solutions.
                        Committed to writing high-quality code and building
                        robust systems
                    </p>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>

                <div className="flex flex-wrap gap-3">
                    {[
                        "React",
                        "TypeScript",
                        "Node.js",
                        "Python",
                        "GO",
                        "AWS",
                        "Docker",
                        "Kubernetes",
                        "Terraform",
                    ].map((skill, index) => (
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
                            Download CV{" "}
                            <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                        </span>
                    </Button>
                </div>
            </div>

            {/* Empty space in the middle to push content to bottom */}
            <div className="flex-1"></div>

            {/* Contact Information - Always visible at bottom */}
            <div className="mt-8 z-10 border-t border-green-900/30 pt-6 space-y-4">
                <h3 className="text-gradient-green text-lg font-medium">
                    Contact Info
                </h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <Mail className="text-green-500 h-5 w-5" />
                        <a
                            href="mailto:john.doe@example.com"
                            className="text-white/90 hover:text-white transition-colors"
                        >
                            arkar20011@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="text-green-500 h-5 w-5" />
                        <a
                            href="tel:+15551234567"
                            className="text-white/90 hover:text-white transition-colors"
                        >
                            +1 (628) 224-8991
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="text-green-500 h-5 w-5" />
                        <span className="text-white/90">San Francisco, CA</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brief;
