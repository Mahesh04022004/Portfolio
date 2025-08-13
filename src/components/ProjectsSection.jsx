import React from 'react'

const projects = [
    {
        id: 1,
        title: "Smart Spend",
        description: "An AI-powered expense tracker that helps users manage budgets, analyze spending patterns, and receive personalized savings suggestions.",
        image: "/projects/github_image.png",
        tags: ["Spring Boot", "Next.js", "Tailwind CSS", "MySQL"],
        githubUrl: "https://github.com/Mahesh04022004/SmartSpend"
    },
    {
        id: 2,
        title: "Servlet Enotes",
        description: "A Java Servlet-based note-taking application allowing users to securely create, edit, and manage personal notes with database integration.",
        image: "/projects/github_image1.png",
        tags: ["Java", "Servlets", "JSP", "MySQL"],
        githubUrl: "https://github.com/Mahesh04022004/Servlet-Enotes"
    },
    {
        id: 3,
        title: "EduSync",
        description: "A college management platform with QR-based attendance, automated exam seating, assignment tracking, and real-time notifications.",
        image: "/projects/github_image4.jpg",
        tags: ["React", "Spring Boot", "MySQL", "REST API"],
        githubUrl: "https://github.com/Mahesh04022004/EduSync"
    },
    {
        id: 4,
        title: "Social Media REST API",
        description: "A basic social media backend with user authentication, post creation, likes, and comments, built with RESTful principles.",
        image: "/projects/github_image3.jpg",
        tags: ["Spring Boot", "REST API", "MySQL"],
        githubUrl: "https://github.com/Mahesh04022004/social-media-rest-api-basic"
    },
    {
        id: 5,
        title: "React Project 2",
        description: "A frontend React.js application showcasing interactive UI design, state management, and responsive layouts.",
        image: "/projects/github_image.png",
        tags: ["React", "JavaScript", "CSS"],
        githubUrl: "https://github.com/Mahesh04022004/React_project_2",
        demoUrl: "https://maheshreact1069.netlify.app/"
    },
    {
        id: 6,
        title: "Hashtag UI Page",
        description: "A visually appealing UI design for a hashtag-based interface, focusing on clean layouts, responsiveness, and modern styling.",
        image: "/projects/github_image1.png",
        tags: ["HTML", "CSS", "JavaScript", "UI Design"],
        githubUrl: "https://github.com/Mahesh04022004/Hashtag",
        demoUrl: "https://mahesh-hashtag.netlify.app/"
    }
];

function ProjectsSection() {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className="container mx-auto max-w-5xl">
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured <span className='text-primary'>Projects</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my projects. Each one is crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                            </div>

                            {/* Content */}
                            <div className='p-6 flex-1 flex flex-col'>
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className='px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title & Description */}
                                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                                <p className='text-sm text-muted-foreground flex-1'>{project.description}</p>

                                {/* Links */}
                                <div className="mt-4 flex gap-4">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline text-sm font-medium"
                                    >
                                        GitHub
                                    </a>
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline text-sm font-medium"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;
