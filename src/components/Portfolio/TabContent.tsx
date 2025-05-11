import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import React from "react";

type TabContentProps = {
    activeTab: string;
};

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
    switch (activeTab) {
        case "projects":
            return <Projects />;
        case "education":
            return <Education />;
        case "experience":
            return <Experience />;
        default:
            return <Projects />;
    }
};

export default TabContent;
