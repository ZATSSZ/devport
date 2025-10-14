// src/components/Project.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function Project() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Portfolio Website",
      category: "Web",
      image: "/projects/zats.jpg",
      description: "My personal portfolio and built in html,css and javascript.",
      link: "https://zats.netlify.app/", // change this to your live site link
    },
    {
      title: "Clinic Management App",
      category: "Web",
      image: "/projects/clinic.jpg",
      description: "A web app for patient records and scheduling.",
      link: "https://clinicapp.netlify.app/",
    },
    {
      title: "Task Tracker",
      category: "Mobile",
      image: "/projects/task.jpg",
      description: "Android app for managing daily productivity and goals.",
      link: "https://tasktracker.netlify.app/",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center text-center py-12 px-6"
    >
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

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl"
      >
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            layout
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/50 transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
