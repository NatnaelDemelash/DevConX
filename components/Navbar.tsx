// --- Navbar ---
const NavBar = () => {
  const handleNavClick = (name: string) => console.log(`Navigating to ${name}`);

  return (
    <header className="sticky top-5 z-20 w-full flex justify-center">
      <nav className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow rounded-full flex items-center space-x-6 px-6 py-2">
        {/* Logo */}
        <a
          href="#"
          className="font-bold text-lg sm:text-xl text-gray-900 tracking-wide"
        >
          DevConX
        </a>

        {/* Links */}
        <a
          href="#"
          onClick={() => handleNavClick("Browse Events")}
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-base"
        >
          Browse Events
        </a>
        <a
          href="#"
          onClick={() => handleNavClick("For Organizers")}
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-base"
        >
          For Organizers
        </a>

        {/* Sign In Button */}
        <button
          onClick={() => handleNavClick("Sign In")}
          className="ml-4 bg-gray-900 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
