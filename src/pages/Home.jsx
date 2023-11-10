import AboutUs from "../Components/AboutUs";
import Services from "../Components/Services";
import Banner from "../Components/banner";
import choose from "../assets/choose.jpg";
import star from "../assets/star.png";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <div className=" md:py-20 py-16 ">
        <div className="container mx-auto px-5 lg:px-0">
          <h2
            data-aos="fade-up"
            data-aos-duration="500"
            className="pb-3 text-[#0a0b09] text-3xl text-center my-3 lg:text-5xl font-bold"
          >
            Why Choose Us?
          </h2>
          <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-10 items-center justify-between mt-8 lg:mt-14">
            <div className="flex-1 space-y-5 text-center lg:text-start">
              <div>
                <h3
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className=" text-2xl text-[#203872] font-bold"
                >
                  Experience and Expertise
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="text-base lg:text-lg mt-1"
                >
                  With years of experience in the industry, our team brings a
                  wealth of knowledge and expertise to every wedding we plan. We
                  have seen it all and know how to handle every detail with
                  precision.
                </p>
              </div>
              <div>
                <h3
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className=" text-2xl text-[#203872] font-bold"
                >
                  Personalized Approach
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2500"
                  className="text-base lg:text-lg mt-1"
                >
                  We understand that no two love stories are the same. That is
                  why we take the time to get to know you, your vision, and your
                  preferences, ensuring that every aspect of your wedding is
                  tailored to your unique story.
                </p>
              </div>
              <div>
                <h3
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className=" text-2xl text-[#203872] font-bold"
                >
                  Stress-Free Planning
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-duration="3500"
                  className="text-base lg:text-lg mt-1"
                >
                  Planning a wedding can be overwhelming, but with us by your
                  side, you can relax and enjoy the journey. We handle all the
                  logistics, so you can focus on savoring every moment.
                </p>
              </div>
              <div>
                <h3
                  data-aos="fade-up"
                  data-aos-duration="4000"
                  className=" text-2xl text-[#203872] font-bold"
                >
                  Exceptional Service
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-duration="4500"
                  className="text-base lg:text-lg mt-1"
                >
                  Your happiness is our priority. We pride ourselves on
                  providing exceptional service, and we are here to answer your
                  questions, address your concerns, and make your wedding day as
                  smooth and joyful as possible.
                </p>
              </div>
              <div>
                <h3
                  data-aos="fade-up"
                  data-aos-duration="5000"
                  className=" text-2xl text-[#203872] font-bold"
                >
                  Affordability
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-duration="5500"
                  className="text-base lg:text-lg mt-1"
                >
                  We believe that a dream wedding should not come with a
                  nightmare price tag. Our services are competitively priced to
                  ensure that you get the most value for your investment.
                </p>
              </div>
              <div>
                <h3
                  data-aos="fade-up"
                  data-aos-duration="6000"
                  className=" text-2xl text-[#203872] font-bold"
                >
                  Passion for Love
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-duration="6500"
                  className="text-base lg:text-lg mt-1"
                >
                  Above all, we&apos;re driven by a deep passion for love and
                  celebration. Your wedding day is a celebration of your love
                  story, and we consider it an honor to be a part of it. With
                  us, your special day will be a reflection of the love that
                  brought you together—a day filled with magic, joy, and
                  cherished memories.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <img
                data-aos="fade-up"
                data-aos-duration="4000"
                src={choose}
                className="w-full"
                alt="Why-choose-pic"
              />
            </div>
          </div>
        </div>
      </div>
      {/* testimonial start   */}
      <div className="bg-[#eff4ff] py-10 md:py-20">
        <div className="container mx-auto px-5 lg:px-0">
          <h2
            data-aos="fade-up"
            data-aos-duration="500"
            className="pb-3 text-[#0a0b09] text-3xl text-center my-3 lg:text-5xl font-bold"
          >
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 md:mt-10">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-white rounded border border-[#ccc] p-8 text-center"
            >
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
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-white rounded border border-[#ccc] p-8 text-center"
            >
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
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-white rounded border border-[#ccc] p-8 text-center"
            >
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
    </div>
  );
};

export default Home;
