import { Link } from "react-router-dom";
import banner from "../assets/cele.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-[90vh]"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-[#203872] bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-[800px]">
          <h1
            data-aos="fade-up"
            data-aos-duration="500"
            className="mb-5 text-white capitalize text-3xl lg:text-5xl font-bold"
          >
            Get an unforgettable Event Experience with us
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-5 text-base lg:text-xl text-white "
          >
            Experience the extraordinary with us as we redefine the art of event
            planning. From meticulously curated details to seamless execution,
            our team is dedicated to crafting unforgettable moments that linger
            in your memory long after the event ends.
          </p>
          <div data-aos="fade-up" data-aos-duration="1500">
            <Link to="/contact">
              <button className="btn text-base md:text-xl bg-[#203872]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
