import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    // "TypeScript",
    // "Redux",
    // "GraphQL",
    // "Node.js",
    // "Express.js",
    // "MongoDB",
    // "Firebase",
    // "Apollo Client",
    // "Semantic UI",
    // "React Testing Library",
    // "Jest",
    // "Cypress",
    // "Material-UI",
  ];

  const backendSkills = [
    // "Python",
    // "Django",
    // "Flask",
    "MongoDB",
    "GraphQL",
    "Node.js",
    "Express.js",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-2 sm:px-4 max-w-3xl mx-auto"
    >
      <RevealOnScroll>
        <div className="">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="p-4 sm:p-8 rounded-lg border border-white/5 hover:-translate-y-1 transition-all">
            <p className="max-w-(--breakpoint-md) text-lg/7 font-medium text-gray-400">
              Frontend developer exploring backend and AI to become an
              AI-Frontend Engineer. Passionate about innovation, intuitive
              design, and scalable SaaS.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl text-white font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <span className="w-full h-[2px] bg-white/5 sm:hidden" />
              <div className="p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl text-white font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border border-white/5 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4 text-white">Education</h3>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-gray-400 text-sm">
                <strong>Information Technology Enginering</strong> - Universitas
                Muria Kudus (2022 - Present)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-white/5 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4 text-white">
              Work Experience
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-gray-400 text-sm">
                <strong>Software Developer</strong> - MySpace (2020 - 2022)
              </li>
              <li className="text-gray-400 text-sm">
                <strong>Frontend Developer</strong> - MySpace (2022 - Present)
              </li>
              <li className="text-gray-400 text-sm">
                <strong>Frontend Developer</strong> - MySpace (2023 - Present)
              </li>
            </ul>
          </div>
        </div>

        {/* education */}
        {/* <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="p-4 rounded-lg border border-white/5">
          <div className="flex items-start justify-between gap-8">
            <div>
              <h3 className="text-lg/7 font-medium text-white">
                Universitas Muria Kudus
              </h3>
              <p className="text-gray-400 text-sm">
                Information Technology Enginering
              </p>
            </div>
            <p className="text-white text-xs mt-2 font-semibold">
              2022 - Present
            </p>
          </div>
        </div>
      </div> */}
      </RevealOnScroll>
    </section>
  );
};

export default About;
