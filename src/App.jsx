// src/App.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, ArrowUp } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Toaster, toast } from "react-hot-toast";
import "./App.css";
import Project from "./components/Projects";


export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [filter, setFilter] = useState("All");
  const [showScroll, setShowScroll] = useState(false);

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

  // ✅ FIXED EmailJS Function
const sendEmail = (e) => {
  e.preventDefault();
  const currentTime = new Date().toLocaleString();

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
        time: currentTime,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        toast.success("✅ Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        toast.error("❌ Something went wrong — please try again later.");
      }
    );
};
  // Scroll to top function

  const scrollToTop = () => scroll.scrollToTop();

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        darkMode ? "animated-bg-dark text-white" : "animated-bg-light text-black"
      }`}
    >
      <Toaster position="top-right" reverseOrder={false} />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/40 z-50 flex justify-between items-center px-6 md:px-10 py-4">
        <h1
          className="text-2xl font-bold text-orange-500 cursor-pointer"
          onClick={scrollToTop}
        >
          zatsfolio
        </h1>

        <ul className="hidden md:flex gap-8 items-center">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <ScrollLink
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                spy={true}
                offset={-80}
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
      <main className="flex-1 pt-20">
        {/* HERO SECTION */}
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

        {/* ABOUT SECTION */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-4xl font-semibold mb-6">About Me</h2>
        <p className="max-w-2xl text-lg mb-8 text-gray-300">
        I’m an IT student passionate about building responsive, visually appealing, and user-friendly
        digital experiences. I specialize in front-end development using React, Tailwind, and modern tools.
      </p>

      {/* ✅ Download Resume Button */}
      <motion.a
        href="/resume.pdf"
        download="ZachiTolentino-Resume.pdf"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg"
      >
        📄 Download Resume
      </motion.a>
      </motion.section>


        {/* SKILLS */}
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
  <h2 className="text-4xl font-semibold mb-8">My Tech Stack</h2>
  <div className="w-full max-w-2xl space-y-6">
    {[
      { name: "React", icon: "/icons/react.svg", level: 85 },
      { name: "Firebase", icon: "/icons/firebase.svg", level: 50 },
      { name: "Node.js", icon: "/icons/nodejs.svg", level: 60 },
      { name: "JavaScript", icon: "/icons/js.svg", level: 90 },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg", level: 80 },
    ].map((tech, index) => (
      <motion.div
        key={index}
        className="text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="flex items-center gap-3 mb-1">
          <img src={tech.icon} alt={tech.name} className="h-10 w-10" />
          <span className="font-semibold">{tech.name}</span>
          <span className="ml-auto text-orange-400 font-medium">{tech.level}%</span>
        </div>

        <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-orange-500"
            initial={{ width: 0 }}
            whileInView={{ width: `${tech.level}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    ))}
  </div>
</section>


        {/* PROJECTS */}
        <Project />

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
