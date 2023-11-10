import { Link } from "react-router-dom";
import AboutUs from "../Components/AboutUs";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import AboutBanner from "../Components/AboutBanner";

const About = () => {
  return (
    <div>
      {/* banner  */}
      <AboutBanner pagetitle="About Us"></AboutBanner>
      {/* about us  */}
      <AboutUs></AboutUs>
      {/* mision & vision  */}
      <div className="bg-[#eff4ff] py-10 md:py-20">
        <div className="container mx-auto px-5 lg:px-0 flex flex-col lg:flex-row gap-10">
          <div className="bg-white rounded border border-[#ccc] p-8 text-center">
            <img src={mission} className="mx-auto mb-4 mt-7" alt="" />
            <h3 className="text-[#203872] font-bold text-3xl mb-2">
              Our Mission
            </h3>
            <p className="text-lg font-semibold">
              Our mission is to transform dreams into unforgettable moments. We
              are dedicated to crafting exceptional events that celebrate love,
              joy, and togetherness. With creativity, precision, and unwavering
              commitment, we aim to exceed our clients&apos; expectations by
              delivering seamless, personalized, and extraordinary experiences.
              Our mission is to make every event a cherished memory.
            </p>
          </div>
          <div className="bg-white rounded border border-[#ccc] p-8 text-center">
            <img src={vision} className="mx-auto mb-4 mt-7" alt="" />
            <h3 className="text-[#203872] font-bold text-3xl mb-2">
              Our Vision
            </h3>
            <p className="text-lg font-semibold">
              Our vision is to be the premier event planning company, known for
              innovation, excellence, and a deep understanding of our
              clients&apos; aspirations. We strive to be at the forefront of
              event design, always pushing boundaries and creating one-of-a-kind
              celebrations. We envision a future where every event we touch is a
              masterpiece of creativity and love, where our clients&apos;
              visions are brought to life with elegance and perfection.
            </p>
          </div>
        </div>
      </div>
      <div className=" md:py-20 py-16 ">
        <div className="w-full lg:max-w-5xl mx-auto px-5 lg:px-0">
          <div className="text-center hero-overlay bg-[#203872] bg-opacity-70 py-20 px-5 lg:px-0 rounded-2xl">
            <h2 className="pb-6 text-white text-3xl text-center  lg:text-5xl font-bold">
              Our specialists team is waiting
            </h2>
            <p className="lg:text-2xl text-lg font-semibold text-white lg:w-3/4 mx-auto w-full">
              Put your trust in the hands of the experts – We are the Team Event
              teams and we are here to help you.
            </p>
            <div className="mt-6">
              <Link to="/contact">
                <button className="btn text-base md:text-xl bg-[#203872]">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
