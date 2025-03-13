import { useState } from "react";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Phone,
} from "lucide-react";
import ecommerce from "../src/assets/images/ecommerce.png";
import construction from "../src/assets/images/construction.png";
import dessert from "../src/assets/images/dessert.png";
import tattoo from "../src/assets/images/tattoo.png";
import restaurant from "../src/assets/images/restaurant.png";
import building from "../src/assets/images/building.png";
import Logo from "../src/assets/images/MyLogo.jpg";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    { name: "HTML", color: "bg-rose-400" },
    { name: "CSS", color: "bg-rose-400" },
    { name: "React", color: "bg-rose-400" },
    { name: "TypeScript", color: "bg-rose-400" },
    { name: "Node.js", color: "bg-rose-400" },
    { name: "Git", color: "bg-rose-400" },
    { name: "NPM", color: "bg-rose-400" },
    { name: "APIs", color: "bg-rose-400" },
    { name: "Firebase", color: "bg-rose-400" },
    { name: "Tailwind CSS", color: "bg-rose-400" },
  ];

  interface Project {
    title: string;
    image: any;
    description: string;
  }

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      image: ecommerce,
      description:
        "A modern e-commerce solution built with Typscript and Node.js",
    },
    {
      title: "Construction Platform",
      image: construction,
      description:
        "a construction company showcasing services, projects, and contact information.",
    },
    {
      title: "Dessert Shop",
      image: dessert,
      description:
        "A website for a dessert shop with a menu, gallery, and contact form.",
    },
    {
      title: "Tattoo Studio",
      image: tattoo,
      description:
        "A bold and stylish tattoo studio website with a stunning gallery, featured artists, and a hassle-free contact form",
    },
    {
      title: "Restaurant",
      image: restaurant,
      description:
        "A stylish restaurant website featuring a menu, chef highlights, reviews, and easy reservations.",
    },
    {
      title: "Building Company",
      image: building,
      description:
        "A building company website with a portfolio, services, and contact form.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-white"
      }`}
    >
      {/* Navigation */}
      <nav className="fixed w-full z-20 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl text-blue-400 font-bold animate-slide-in">
            Belle Creatives
          </div>

          {/* Hamburger Menu Button - Only Visible on Small Screens */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-blue-500 dark:hover:bg-blue-500 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Nav Links - Desktop & Mobile */}
          <div
            className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-white/95 text-blue-500 dark:bg-gray-900/95 lg:bg-transparent dark:lg:bg-transparent 
          flex flex-col lg:flex-row items-center lg:gap-6 p-6 lg:p-0 shadow-lg lg:shadow-none transition-transform duration-300 
          ${isOpen ? "translate-y-0" : "-translate-y-[200%] lg:translate-y-0"}`}
          >
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition transform hover:rotate-12"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-white to-blue-100 dark:from-rose-900 dark:via-gray-900 dark:to-blue-900"></div>

        {/* Floating Icons */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 animate-float-slow">
            <div className="w-12 h-12 bg-blue-500 rounded-xl shadow-lg transform rotate-12"></div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float-medium">
            <div className="w-10 h-10 bg-rose-500 rounded-xl shadow-lg transform -rotate-12"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float-fast">
            <div className="w-8 h-8 bg-purple-500 rounded-xl shadow-lg transform rotate-45"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 h-screen flex items-center">
          {/* Text Content */}
          <div className="animate-fade-in max-w-xl">
            <div className="mb-6">
              <p className="text-rose-500 font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Christabelle
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400">
                A <span className="text-rose-500">Web Developer</span>
              </h2>
            </div>
            <p className="text-white dark:text-white mb-8 max-w-lg">
              Building beautiful and functional web experiences with a focus on
              user interaction and modern technologies.
            </p>
            <button
              className="bg-rose-500 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-600 transition-all duration-300 hover:scale-105 transform flex items-center gap-2"
              onClick={() =>
                window.open("https://forms.gle/C38d4sNM7hs543Yn9", "_blank")
              }
            >
              Get In Touch
            </button>
          </div>
        </div>
        {/* Profile Image */}
        <div className="flex justify-center md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2">
          <div className="w-40 h-40 md:w-[600px] md:h-[600px] relative z-10 animate-float-slow">
            <img
              src={Logo}
              alt="Profile"
              className="w-full h-full object-cover rounded-full shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 to-transparent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-whitee dark:text-black">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-white dark:text-black text-center leading-relaxed">

            I'm a passionate web developer crafting sleek, functional,{" "}
            <br className="hidden sm:inline" />
            and user-friendly websites that bring ideas to life. With 3 years of
            experience in web development, <br className="hidden md:inline" />
            I specialize in React, TypeScript, Node.js, and modern web
            technologies. <br />
            Beyond coding, I love exploring open-source projects and sharing my
            knowledge.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 bg-gray-50 bg-gradient-to-br from-rose-100 via-white to-blue-100 dark:from-rose-900 dark:via-gray-900 dark:to-blue-900"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            My Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4 stagger-children">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`${skill.color} text-white px-6 py-3 rounded-full font-medium hover:scale-110 transform transition-transform duration-300 cursor-default`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl text-black font-bold text-center mb-12 animate-fade-in">
            Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            Contact Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <div className="flex items-center gap-4 justify-center">
              <Mail className="text-rose-500 animate-bounce" size={24} />
              <a
                href="mailto:adansibonnahc@gmail.com"
                className="hover:text-rose-500 transition-colors hover:scale-105 transform"
              >
                adansibonnahc@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Phone className="text-rose-500 animate-bounce" size={24} />
              <a
                href="tel:+233530121155"
                className="hover:text-rose-500 transition-colors hover:scale-105 transform"
              >
                +233 530 121 1155
              </a>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="flex gap-4">
                <a
                  href="https://github.com/Absolutelybelle7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-500 transition-colors hover:scale-110 transform"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/christabelle-adansi-bonnah-77b095296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rose-500 transition-colors hover:scale-110 transform"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 dark:text-gray-400 animate-fade-in">
        <p>© 2025 Adansi-Bonnah Christabelle. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
