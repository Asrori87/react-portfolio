import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex justify-center items-center"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ">{`Hi, I'm Asrori`}</h1>

          <p className="max-w-(--breakpoint-md) px-2 text-lg/7 font-medium  max-sm:px-4 text-gray-400">
            {`I'm a full-stack developer with a passion for creating engaging and
          user-friendly applications. I have experience with various programming
          languages and frameworks, including JavaScript, React, Node.js, and
          Python.`}
          </p>

          <div className="flex flex-col xs:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="z-1 w-full xs:w-auto inline-block rounded-4xl px-4 py-2 text-sm/6 font-semibold text-white bg-gray-700 hover:bg-gray-600"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="z-1 w-full xs:w-auto inline-block rounded-4xl px-4 py-2 text-sm/6 font-semibold text-white bg-white/5 hover:bg-white/6"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
