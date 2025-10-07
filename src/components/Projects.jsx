const projects = [
  {
    title: "Clinic Management System",
    description: "A web app for managing appointments and patient records.",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS.",
  },
  {
    title: "Inventory Tracker",
    description: "A simple inventory system using Firebase backend.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8 text-indigo-600">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
