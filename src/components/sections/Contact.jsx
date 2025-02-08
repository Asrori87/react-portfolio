import RevealOnScroll from "../RevealOnScroll";

const Contact = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-2 sm:px-4 max-w-3xl mx-auto"
    >
      <RevealOnScroll>
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Contact
        </h2>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
