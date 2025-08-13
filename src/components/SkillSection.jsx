import React, { useState } from 'react';

const skills = [
    { name: "Java", level: 85, category: "Language" },
    { name: "JavaScript", level: 75, category: "Language" },
    { name: "Python", level: 65, category: "Language" },
    { name: "HTML", level: 85, category: "Language" },
    { name: "CSS", level: 80, category: "Language" },
    { name: "SQL", level: 75, category: "Language" },
    { name: "Spring Boot", level: 85, category: "Framework" },
    { name: "Spring Data JPA", level: 85, category: "Framework" },
    { name: "Hibernate", level: 80, category: "Framework" },
    { name: "Spring Security", level: 78, category: "Framework" },
    { name: "Next.js", level: 75, category: "Framework" },
    { name: "React.js", level: 75, category: "Framework" },
    { name: "Tailwind CSS", level: 85, category: "Framework" },
    { name: "Git", level: 85, category: "Tool" },
    { name: "GitHub", level: 85, category: "Tool" },
    { name: "Maven", level: 78, category: "Tool" },
    { name: "Postman", level: 85, category: "Tool" },
    { name: "Visual Studio Code", level: 85, category: "Tool" },
    { name: "Eclipse", level: 75, category: "Tool" },
    { name: "IntelliJ IDEA", level: 75, category: "Tool" },
    { name: "Swagger", level: 78, category: "Tool" },
    { name: "Data Structures", level: 78, category: "Fundamental" },
    { name: "Algorithms", level: 75, category: "Fundamental" },
    { name: "Object-Oriented Programming", level: 85, category: "Fundamental" },
    { name: "Operating Systems", level: 65, category: "Fundamental" },
    { name: "Problem-Solving", level: 85, category: "Soft Skill" },
    { name: "Critical Thinking", level: 78, category: "Soft Skill" },
    { name: "Team Collaboration", level: 85, category: "Soft Skill" },
    { name: "Quick Learning", level: 85, category: "Soft Skill" },
    { name: "Attention to Detail", level: 85, category: "Soft Skill" },
    { name: "Code Quality Focus", level: 85, category: "Soft Skill" }
];

function SkillSection() {
    const [activeCategory, setActiveCategory] = useState("all");
    const categories = ["all","Language","Framework","Tool","Soft Skill","Fundamental"];

    const filteredSkills =
        activeCategory === "all"
            ? skills
            : skills.filter((skill) => skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My<span className="text-primary"> Skills</span>
                </h2>

                {/* Category Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full capitalize transition-colors duration-300 ${
                                activeCategory === category
                                    ? "bg-primary text-white"
                                    : "bg-secondary/50 hover:bg-primary hover:text-white"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card rounded-lg shadow-sm p-4 card-hover"
                        >
                            <div className="flex justify-between mb-2">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                <span className="text-sm font-medium">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillSection;
