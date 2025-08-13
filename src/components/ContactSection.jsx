import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

function ContactSection() {
    return (
        <section id="contact" className="py-24 px-4 bg-secondary/30">
            <div className="container mx-auto max-w-3xl text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Get In <span className="text-primary">Touch</span>
                </h2>
                <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
                    I’m always open to discussing new projects, creative ideas, or opportunities to collaborate.  
                    Here’s how you can reach me:
                </p>

                {/* Contact Info */}
                <div className="space-y-6 text-left">
                    <div className="flex items-center gap-4">
                        <Phone className="text-primary" />
                        <span className="text-lg font-medium">+91-7224897588</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="text-primary" />
                        <a
                            href="mailto:maheshmishra1069@gmail.com"
                            className="text-lg font-medium hover:underline"
                        >
                            maheshmishra1069@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin className="text-primary" />
                        <span className="text-lg font-medium">Bhopal, Madhya Pradesh, India</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Linkedin className="text-primary" />
                        <a
                            href="https://www.linkedin.com/in/mahesh-mishra-a8b888276/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium hover:underline"
                        >
                            LinkedIn Profile
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Github className="text-primary" />
                        <a
                            href="https://github.com/Mahesh04022004"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium hover:underline"
                        >
                            GitHub Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
