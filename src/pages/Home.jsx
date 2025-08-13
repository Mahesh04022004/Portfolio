import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import SkillSection from '../components/SkillSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Theme Toggle */}
      <ThemeToggle/>
      {/* Background Effect */}
      <StarBackground/>
      {/* NavBar */}
      <Navbar></Navbar>

      {/* Main Content */}
      <main>
        <HeroSection/>
        <AboutMe/>
        <SkillSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Home