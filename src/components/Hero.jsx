import React from "react";
import { TypeAnimation } from "react-type-animation";


export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center text-black"
    >
      <h1 className="text-5xl font-bold mb-4 text-black-400">
        Hi, I’m Zachi Tolentino 👋
      </h1>

      {/* 🔸 Text animation here */}
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
        className="text-2xl text-black-400 font-semibold mb-4"
      />

      <p className="text-lg mb-6 text-black-400">
        An IT student passionate about web development and technology.
      </p>

      <a
        href="#projects"
        className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
      >
        View My Work
      </a>
    </section>
  );
}
