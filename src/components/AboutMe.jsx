import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

function AboutMe() {
  return (
    <section id='about' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>About <span className='text-primary'>Me</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold'>Passianate Full Stack Developer & Tech Enthuastic</h3>
                    <p className='text-mutedforeground'>
                        Mahesh Mishra – A dedicated Java Full Stack Developer skilled in Java, JavaScript, Python, Spring Boot, React/Next.js, Tailwind CSS, and MySQL. Experienced in building scalable, high-performance web applications with optimized databases and secure REST APIs. Developed multiple full-stack projects, including AI-powered finance trackers and management systems, improving efficiency and user experience. Certified in Java, DBMS, TypeScript, and Responsive Web Design.
                    </p>
                    <p className='text-muted-foreground'>
                        Strong problem-solving, quick learning, and collaboration skills, with hands-on expertise in modern development tools and best practices. Currently pursuing B.Tech in Computer Science and Engineering at LNCT, Bhopal, with a passion for creating impactful, real-world solutions.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <a href="#contact" className='cosmic-button'>Get In Touch</a>
                        <a href="/projects/resumev1.0.pdf" className='px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>Download CV</a>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-6'>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className='h-6 w-6 text-primary'/>
                            </div>
                            <div className="text-left">
                                <h4 className='font-semibold text-lg'>Full Stack Developer</h4>
                                <p className='text-muted-foreground'>Creating responsive website and web application with mordern framework.</p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className='h-6 w-6 text-primary'/>
                            </div>
                            <div className="text-left">
                                <h4 className='font-semibold text-lg'>Good Practice</h4>
                                <p className='text-muted-foreground'>Enjoy crafting scalable, efficient, and user-friendly applications with clean code and modern design</p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className='h-6 w-6 text-primary'/>
                            </div>
                            <div className="text-left">
                                <h4 className='font-semibold text-lg'>Project Management</h4>
                                <p className='text-muted-foreground'>As a beginner, I’m building my skills in project management by planning, organizing, and tracking my own development projects. I focus on setting clear goals, breaking tasks into manageable steps, and meeting deadlines. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe