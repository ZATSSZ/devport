// src/components/Skills.jsx
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
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
              <span className="ml-auto text-orange-400 font-medium">
                {tech.level}%
              </span>
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
  );
}
