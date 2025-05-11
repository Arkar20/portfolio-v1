
import React from 'react';
import Projects from './Projects';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';

type TabContentProps = {
  activeTab: string;
};

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  switch (activeTab) {
    case 'projects':
      return <Projects />;
    case 'education':
      return <Education />;
    case 'experience':
      return <Experience />;
    case 'contact':
      return <Contact />;
    default:
      return <Projects />;
  }
};

export default TabContent;
