import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    return (
        <div className="p-6 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-gradient">Contact</h2>
            <div className="">
                <div>
                    <Card className="bg-black/30 border border-dart-background/80 h-full">
                        <CardContent className="p-6 space-y-6">
                            <h3 className="text-xl font-medium text-white">
                                Get In Touch
                            </h3>
                            <p className="text-gray-400">
                                Feel free to reach out if you want to
                                collaborate or just say hi!
                            </p>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Mail
                                        size={18}
                                        className="text-dart-primary"
                                    />
                                    <span>john.doe@example.com</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Phone
                                        size={18}
                                        className="text-dart-primary"
                                    />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <MapPin
                                        size={18}
                                        className="text-dart-primary"
                                    />
                                    <span>San Francisco, CA</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;
