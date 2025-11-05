import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-40 text-center text-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6 text-black-400">About Me</h2>

      <p className="max-w-2xl mx-auto text-black-400 leading-relaxed">
        I’m currently an IT student specializing in front-end development.
        I’m passionate about building responsive and user-friendly web
        applications using modern technologies like React, Tailwind CSS, and
        Firebase. I enjoy transforming creative ideas into interactive digital
        experiences.
      </p>

      <motion.a
        href="/resume.pdf"
        download="ZachiTolentino-Resume.pdf"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg mt-10"
      >
        📄 Download Resume
      </motion.a>
    </motion.section>
  );
}
