import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

const Education = () => {
    const isMobile = useIsMobile();

    const education = [
        {
            degree: "Master of Science in Information Systems",
            institution: "University of San Francisco, California",
            period: "2014 - 2025",
            description:
                "Focused on designing intelligent systems and data-driven solutions through advanced coursework in Artificial Intelligence, Cloud Computing, and System Architecture.",
            specializations: [
                "AWS",
                "Big Data",
                "Data Governance",
                "System Architecture",
                "AI/LLM",
                "SQL/SNOWFLAKE",
                "Project Management",
                "Data Analytics",
            ],
        },
        {
            degree: "Bachelor of Science in Information Systems",
            institution: "MIT",
            period: "2014 - 2018",
            description:
                "Focus on software engineering and distributed systems.",
            specializations: [
                "Enterprise App Development",
                "Data Structures/Algorithms",
                "DBMS",
                "Human Interface Design",
                "Requirements Management",
            ],
        },
    ];

    const certifications = [
        {
            degree: "AWS Certified Solutions Architect - Associate",
            institution: "Amazon Web Services",
            period: "Apr 2025 - Apr 2028",
            description:
                "Demonstrated expertise in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
        },
        {
            degree: "Certified Kubernetes Application Developer (CKAD)",
            institution: "Cloud Native Computing Foundation",
            period: "Feb 2025 - Feb 2027",
            description:
                "Proven proficiency in designing, building, and deploying applications on Kubernetes.",
        },
    ];

    return (
        <div className="p-4 sm:p-6 animate-fade-in">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gradient">
                Education
            </h2>
            <div className="space-y-4 sm:space-y-6">
                {education.map((item, index) => (
                    <Card
                        key={index}
                        className="devto-card hover:border-[#403E43] transition-all duration-300"
                    >
                        <CardHeader className={isMobile ? "p-4" : undefined}>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                <div>
                                    <CardTitle className="text-white text-base sm:text-lg">
                                        {item.degree}
                                    </CardTitle>
                                    <p className="text-green-400 text-sm sm:text-base">
                                        {item.institution}
                                    </p>
                                </div>
                                <span className="text-gray-400 text-xs sm:text-sm">
                                    {item.period}
                                </span>
                            </div>
                        </CardHeader>
                        <CardContent
                            className={isMobile ? "p-4 pt-0" : undefined}
                        >
                            <p className="text-gray-300 text-sm sm:text-base">
                                {item.description}
                            </p>
                            {item.specializations && item.specializations && (
                                <div className="mt-2">
                                    {item.specializations.map((spec, index) => (
                                        <Badge
                                            key={index}
                                            variant={"outline"}
                                            className="bg-green-800 border-none mr-2 mb-2"
                                        >
                                            {spec}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gradient mt-8">
                Professional Certifications
            </h2>
            <div className="space-y-4 sm:space-y-6">
                {certifications.map((item, index) => (
                    <Card
                        key={index}
                        className="devto-card hover:border-[#403E43] transition-all duration-300"
                    >
                        <CardHeader className={isMobile ? "p-4" : undefined}>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                <div>
                                    <CardTitle className="text-white text-base sm:text-lg">
                                        {item.degree}
                                    </CardTitle>
                                    <p className="text-green-400 text-sm sm:text-base">
                                        {item.institution}
                                    </p>
                                </div>
                                <span className="text-gray-400 text-xs sm:text-sm">
                                    {item.period}
                                </span>
                            </div>
                        </CardHeader>
                        <CardContent
                            className={isMobile ? "p-4 pt-0" : undefined}
                        >
                            <p className="text-gray-300 text-sm sm:text-base">
                                {item.description}
                            </p>
                            {item.specializations && item.specializations && (
                                <div className="mt-2">
                                    {item.specializations.map((spec, index) => (
                                        <Badge
                                            key={index}
                                            variant={"outline"}
                                            className="bg-green-800 border-none mr-2 mb-2"
                                        >
                                            {spec}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Education;
