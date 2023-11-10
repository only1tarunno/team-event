import AboutBanner from "../Components/AboutBanner";
import Services from "../Components/Services";
import Marquee from "react-fast-marquee";
import l1 from "../assets/l1.jpg";
import l2 from "../assets/l2.jpg";
import l3 from "../assets/l3.jpg";
import l4 from "../assets/l4.jpg";
import l5 from "../assets/l5.jpg";
import star from "../assets/star.png";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <div>
      <AboutBanner pagetitle="Service"></AboutBanner>
      <Services></Services>
      <div className=" md:py-20 py-16 ">
        <div className="container mx-auto px-5 lg:px-0">
          <h2 className="pb-3 text-[#0a0b09] text-3xl text-center my-3 lg:text-5xl font-bold">
            Who we work with
          </h2>
          <div className="mt-10">
            <Marquee>
              <img src={l1} alt="" className="mx-10 h-32  object-cover" />
              <img src={l2} alt="" className="mx-10 h-32  object-cover" />
              <img src={l3} alt="" className="mx-10 h-32 object-cover" />
              <img src={l4} alt="" className="mx-10 h-32 object-cover" />
              <img src={l5} alt="" className="mx-10 h-32 object-cover" />
              <img src={l1} alt="" className="mx-10 h-32  object-cover" />
              <img src={l2} alt="" className="mx-10 h-32  object-cover" />
            </Marquee>
          </div>
        </div>
      </div>
      <div className="bg-[#eff4ff] py-10 md:py-20">
        <div className="container mx-auto px-5 lg:px-0">
          <h2 className="pb-3 text-[#0a0b09] text-3xl text-center my-3 lg:text-5xl font-bold">
            What Our Customers Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-10">
            <div className="bg-white rounded border border-[#ccc] p-8 text-center">
              <p className="text-lg font-semibold">
                &quot;We couldn&apos;t have asked for a better team to plan our
                wedding! They turned our vision into a reality with
                professionalism and creativity. Every detail was perfect, and
                the day flowed seamlessly. It was truly the best day of our
                lives.&quot;
              </p>
              <img src={star} className="mx-auto mb-4 mt-7" alt="" />
              <h3 className="text-[#0a0b09] font-bold text-xl">
                Sarah and John
              </h3>
            </div>
            <div className="bg-white rounded border border-[#ccc] p-8 text-center">
              <p className="text-lg font-semibold">
                &quot;Choosing them was the best decision we made for our
                wedding. They took the stress out of planning and made our day
                feel like a fairytale. From the stunning decor to the delicious
                food, everything was beyond our expectations.&quot;
              </p>
              <img src={star} className="mx-auto mb-4 mt-7" alt="" />
              <h3 className="text-[#0a0b09] font-bold text-xl">
                Michael and Emily
              </h3>
            </div>
            <div className="bg-white rounded border border-[#ccc] p-8 text-center">
              <p className="text-lg font-semibold">
                &quot;Our wedding was a dream come true. They listened to our
                ideas and brought them to life in ways we couldn&apos;t have
                imagined. The entire process was enjoyable, and the result was
                magical&quot;
              </p>
              <img src={star} className="mx-auto mb-4 mt-7" alt="" />
              <h3 className="text-[#0a0b09] font-bold text-xl">Anne V</h3>
            </div>
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

export default Event;
