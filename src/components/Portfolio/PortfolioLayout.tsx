import React, { useEffect, useState } from "react";

import Brief from "./Brief";
import TabContent from "./TabContent";
import { useIsMobile } from "@/hooks/use-mobile";

const PortfolioLayout = () => {
    const [activeTab, setActiveTab] = useState("projects");
    const [loaded, setLoaded] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden ">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-green-900/10 blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-1/3 right-1/3 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-green-900/10 blur-[120px] animate-pulse-slower"></div>
                <div className="absolute top-2/3 left-1/3 w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-green-800/5 blur-[80px] animate-pulse-slowest"></div>

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PHBhdGggZD0iTTMwIDBIMHYzMGgzMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Ik0zMCAwaDMwdjMwSDMweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
            </div>

            {/* Left Section - Brief */}
            <div
                className={`w-full lg:w-5/12 border-r border-green-900/20 relative z-10 transform transition-all duration-1000 ${
                    loaded
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-full opacity-0"
                }`}
            >
                <div
                    className={`${isMobile ? "" : "sticky top-0"} h-auto ${
                        isMobile ? "" : "h-screen"
                    } overflow-y-auto scrollbar-none`}
                >
                    <Brief />
                </div>
            </div>

            {/* Right Section - Tabs */}
            <div
                className={`w-full lg:w-7/12 bg-black/80 backdrop-blur-lg flex flex-col relative z-10 transform transition-all duration-1000 delay-300 ${
                    loaded
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full opacity-0"
                }`}
            >
                {/* Tab Navigation */}
                <div className="border-b border-green-900/30 px-4 sm:px-6 sticky top-0 bg-black/90 backdrop-blur-md z-20">
                    <nav className="flex space-x-4 sm:space-x-8 overflow-x-auto scrollbar-none">
                        {[
                            { id: "projects", label: "Projects" },
                            { id: "experience", label: "Experience" },
                            { id: "education", label: "Education" },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-3 sm:py-4 px-1 text-xs sm:text-sm font-medium relative transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? "text-white active"
                                        : "text-white/70 hover:text-white"
                                }`}
                            >
                                <span className="relative z-10 whitespace-nowrap">
                                    {tab.label}
                                </span>
                                {activeTab === tab.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/80 via-white to-white/80 animate-pulse-slow"></span>
                                )}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tab Content */}
                <div className="flex-1 overflow-y-auto scrollbar-none">
                    <TabContent activeTab={activeTab} />
                </div>
            </div>
        </div>
    );
};

export default PortfolioLayout;
