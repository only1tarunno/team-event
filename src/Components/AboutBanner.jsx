import { Link } from "react-router-dom";
import aboutbg from "../assets/bg.jpg";
import PropTypes from "prop-types";

const AboutBanner = ({ pagetitle }) => {
  return (
    <div>
      <div
        className="hero min-h-[400px]"
        style={{
          backgroundImage: `url(${aboutbg})`,
        }}
      >
        <div className="hero-overlay bg-[#203872] bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-[800px]">
            <h1 className="mb-5 text-white capitalize text-3xl lg:text-5xl font-bold">
              {pagetitle}
            </h1>
            <p className="mb-5 text-base lg:text-xl text-white ">
              <Link to="/">Home</Link> | {pagetitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
AboutBanner.propTypes = {
  pagetitle: PropTypes.node.isRequired,
};
