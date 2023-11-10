import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="bg-[#203872]">
      <footer className="footer container mx-auto px-5 lg:px-0 py-10 text-base-content">
        <div className="w-full">
          <img src={logo} className="w-40" alt="" />
        </div>
        <div className="w-full">
          <h2 className="font-bold text-2xl text-white"> Important Links</h2>
          <ul className="text-white font-semibold text-lg ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="text-white w-full">
          <h2 className="font-bold text-2xl"> Come visit us</h2>
          <h3 className="font-bold text-xl">Address:</h3>
          <p className="font-medium text-lg">
            Mobile Attic of St Louis 8645A So Broadway St Louis, MO 63111
          </p>
          <h3 className="font-bold text-xl">
            Email:{" "}
            <span className="font-medium text-lg">tarunno281@gmail.com</span>
          </h3>
          <h3 className="font-bold text-xl">
            Mobile: <span className="font-medium text-lg">01743821440</span>
          </h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
