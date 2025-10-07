// src/App.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, ArrowUp } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import emailjs from "emailjs-com";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [filter, setFilter] = useState("All");
  const [showScroll, setShowScroll] = useState(false);

  // Scroll-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      category: "Web",
      image: "/projects/portfolio.jpg",
      description: "My personal React + Tailwind portfolio with dark mode.",
      link: "#",
    },
    {
      title: "Clinic Management App",
      category: "Web",
      image: "/projects/clinic.jpg",
      description: "A web app for patient records and scheduling.",
      link: "#",
    },
    {
      title: "Task Tracker",
      category: "Mobile",
      image: "/projects/task.jpg",
      description: "Android app for managing daily productivity and goals.",
      link: "#",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const sendEmail = (e) => {
    e.preventDefault();
    // Replace the strings below with your EmailJS values
    emailjs
      .sendForm("your_service_id", "your_template_id", e.target, "your_public_key")
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("Something went wrong — please try again.");
        }
      );
  };

  const scrollToTop = () => scroll.scrollToTop();

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        darkMode ? "animated-bg-dark text-white" : "animated-bg-light text-black"
      }`}
    >
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 z-50 flex justify-between items-center px-6 md:px-10 py-4">
        <h1
          className="text-2xl font-bold text-orange-500 cursor-pointer"
          onClick={scrollToTop}
        >
          MyPortfolio
        </h1>

        <ul className="hidden md:flex gap-8 items-center">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <ScrollLink
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                spy={true}
                offset={-80} /* account for navbar height */
                activeClass="text-orange-400 border-b-2 border-orange-400"
                className="cursor-pointer hover:text-orange-400 transition"
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode((s) => !s)}
            className="p-2 rounded-full hover:scale-110 transition-transform"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-20"> {/* pt-20 to offset fixed navbar height */}
        {/* HERO / HOME */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Hi, I’m Zachi Tolentino</h1>

          <TypeAnimation
            sequence={[
              "Web Developer 💻",
              2000,
              "IT Student 🎓",
              2000,
              "Creative Designer 🎨",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl text-orange-400 font-semibold"
          />

          <p className="max-w-2xl mt-6 text-lg">
            Passionate about building digital experiences that are fast, visually appealing, and user-friendly.
          </p>
        </section>

        {/* ABOUT */}
        <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl font-semibold mb-6">About Me</h2>
          <p className="max-w-3xl text-lg leading-relaxed">
            I’m an aspiring IT professional with interest in full-stack web development, UI/UX,
            and problem solving. I enjoy learning new technologies and building useful products.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl font-semibold mb-8">My Tech Stack</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-10">
            <img src="/icons/react.svg" alt="React" className="h-16 w-16 hover:scale-110 transition-transform" />
            <img src="/icons/firebase.svg" alt="Firebase" className="h-16 w-16 hover:scale-110 transition-transform" />
            <img src="/icons/nodejs.svg" alt="Node.js" className="h-16 w-16 hover:scale-110 transition-transform" />
            <img src="/icons/js.svg" alt="JavaScript" className="h-16 w-16 hover:scale-110 transition-transform" />
            <img src="/icons/tailwind.svg" alt="Tailwind" className="h-16 w-16 hover:scale-110 transition-transform" />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="min-h-screen flex flex-col items-center justify-center text-center py-12 px-6">
          <h2 className="text-4xl font-semibold mb-8">My Projects</h2>

          <div className="flex gap-4 mb-8 flex-wrap justify-center">
            {["All", "Web", "Mobile"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-orange-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/50 transition-shadow"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-5 text-left">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-3">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
          <h2 className="text-4xl font-semibold mb-6">Contact Me</h2>
          <p className="max-w-2xl mb-6 text-lg">Interested in collaborating or have a project idea? Send me a message!</p>

          <form onSubmit={sendEmail} className="flex flex-col gap-4 w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
            <input name="name" type="text" placeholder="Your Name" required className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-orange-400" />
            <input name="email" type="email" placeholder="Your Email" required className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-orange-400" />
            <textarea name="message" rows="4" placeholder="Your Message" required className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-orange-400"></textarea>
            <button type="submit" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-full text-white font-medium transition">Send Message</button>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black/40 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Zachi Tolentino. All Rights Reserved.</p>
      </footer>

      {/* SCROLL TO TOP */}
      {showScroll && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-orange-500 p-3 rounded-full shadow-lg hover:bg-orange-600 transition">
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
