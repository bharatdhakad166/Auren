import { Link } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-black text-white h-14 px-4">
      {/* Logo */}
      <Link to="/" className="text-[36px] font-cin">
        AUREN
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-2">
        <Link to="/properties" className="nav-button">
          PROPERTIES
        </Link>

        <Link to="/destinations" className="nav-button">
          DESTINATIONS
        </Link>

        <Link to="/experiences" className="nav-button">
          EXPERIENCES
        </Link>

        <Link to="/services" className="nav-button">
          SERVICES
        </Link>

        <Link to="/about" className="nav-button">
          ABOUT
        </Link>

        <Link to="/booking" className="nav-button">
          BOOK NOW
        </Link>

        <Link to="/liked"><button className="cursor-pointer p-2 transition-transform duration-100 ease-in hover:scale-125 active:scale-85">
          <Heart size={20} color="white" />
        </button></Link>
      </div>
      <div className="hidden lg:flex">
        <Link to="/login" className="nav-button">
          Sign In
        </Link>
      </div>

      {/* Mobile Right Side */}
      <div className="flex items-center gap-2 lg:hidden">
        <Link to="/login" className="nav-button">
          Sign In
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer p-2"
        >
          {isMenuOpen ? (
            <X size={24} color="white" />
          ) : (
            <Menu size={24} color="white" />
          )}
        </button>

        {/* Mobile Menu */}

        <div
          className={`
    fixed top-14 right-0 h-[calc(100vh-56px)]
    w-[80%] max-w-sm bg-black text-white z-50
    flex flex-col items-center gap-6 py-8
    transition-transform duration-300 ease-in-out
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
  `}
        >
          <Link
            to="/properties"
            className="text-lg hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            PROPERTIES
          </Link>

          <Link
            to="/destinations"
            className="text-lg hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            DESTINATIONS
          </Link>

          <Link
            to="/experiences"
            className="text-lg hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            EXPERIENCES
          </Link>

          <Link
            to="/services"
            className="text-lg hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            SERVICES
          </Link>

          <Link
            to="/about"
            className="text-lg hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </Link>

          <Link
            to="/booking"
            className="text-lg hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            BOOK NOW
          </Link>

          <Link
            to="/liked"
            className="text-lg hover:text-gray-400"
            onClick={() => setIsMenuOpen(false)}
          >
            LIKED
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
