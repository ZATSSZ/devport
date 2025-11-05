// src/components/Contact.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";


export default function Contact() {
  const form = useRef();

  // ✅ FIXED EmailJS Function (now inside the component)
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

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-12 px-6"
    >
      <h2 className="text-4xl font-semibold mb-6 text-orange-500">
        Contact Me
      </h2>
      <p className="max-w-2xl mb-6 text-lg text-gray-300 text-center">
        Interested in collaborating or have a project idea? Send me a message!
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-orange-400"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-orange-400"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-orange-400"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-full text-white font-medium transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
