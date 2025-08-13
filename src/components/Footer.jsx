import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-secondary/30 py-6 mt-12">
            <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Left - Name */}
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Mahesh Mishra. All rights reserved.
                </p>

                {/* Right - Social Links */}
                <div className="flex gap-4">
                    <a
                        href="mailto:maheshmishra1069@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                    <a
                        href="https://github.com/Mahesh04022004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mahesh-mishra-a8b888276/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
