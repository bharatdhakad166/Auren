import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-black text-white h-14">
        <div>
          <Link to="/" className="text-[2vw] pl-4">
            AUREN
          </Link>
        </div>

        <div className="hidden md:flex w-max gap-4">
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
        </div>

        <div className="flex justify-center items-center">

          <button className="cursor-pointer p-2 transition-transform duration-100 ease-in hover:scale-125 active:scale-85">
            <Heart size={24} color="white"/>
          </button>

          <Link to="/login" className="nav-button">
            Sign In
          </Link>

          <Link to="/login" className="nav-button">
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default navbar;
