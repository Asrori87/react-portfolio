/* eslint-disable react/prop-types */
const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`min-h-screen fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center ${
        menuOpen ? "left-[100%]" : ""
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl cursor-pointer focus:outline-none"
        aria-label="Close Menu"
      >
        &times; diopen
      </button>
    </div>
  );
};

export default MobileMenu;
