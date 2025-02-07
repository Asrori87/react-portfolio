const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-2 sm:px-4 max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Featured Project
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 border border-white/5 rounded-xl hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-2xs shadow-blue-500 transition-all">
          <h3 className="text-white font-medium mb-2">React Dashboard</h3>
          <p className="text-gray-400 text-sm">
            A responsive dashboard built with React, Next.js, and Tailwind CSS.
            It features a searchable table, sortable columns, and a customizable
            chart using Chart.js.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["JavaScript", "React", "Tailwind CSS", "Auth.js", "MongoDB"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors mt-4"
            >
              View Project ➞
            </a>
          </div>
        </div>

        <div className="p-6 sm:p-8 border border-white/5 rounded-xl hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-2xs shadow-blue-500 transition-all">
          <h3 className="text-white font-medium mb-2">University Library</h3>
          <p className="text-gray-400 text-sm">
            A responsive university library management system built with React,
            Next.js, and Tailwind CSS. It features a searchable book list, a
            book details page, and a borrowing system using the Firebase
            Realtime Database.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "Typescript",
              "Next.js",
              "Tailwind CSS",
              "Auth0",
              "PostgreSQL",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors mt-4"
            >
              View Project ➞
            </a>
          </div>
        </div>
        <div className="p-6 sm:p-8 border border-white/5 rounded-xl hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-2xs shadow-blue-500 transition-all">
          <h3 className="text-white font-medium mb-2">Movie App</h3>
          <p className="text-gray-400 text-sm">
            A single-page application built with React, Next.js, and Tailwind
            CSS. It features a searchable movie list, a detailed movie page, and
            a rating system using the IMDb API.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["React", "Tailwind CSS", "IMDb API", "APPWrite"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <div className="flex items-center justify-between">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors mt-4"
            >
              View Project ➞
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
