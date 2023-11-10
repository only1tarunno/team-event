import star from "../assets/star.png";
import AboutBanner from "../Components/AboutBanner";
const Contact = () => {
  return (
    <div>
      <AboutBanner pagetitle="Contact Us"></AboutBanner>
      {/* form start  */}
      <div>
        <div className="container mx-auto px-5 lg:px-0">
          <div className="flex lg:flex-row items-center justify-between gap-10 flex-col py-20">
            <div className="w-full lg:flex-1">
              <h2 className="text-[#0a0b09] text-3xl  my-3 lg:text-5xl font-bold">
                Get in touch
              </h2>
              <div className="flex justify-between items-center gap-3 py-3">
                <div className="bg-[#203872] w-14 h-14 rounded-sm flex items-center justify-center">
                  <span className="text-2xl text-white  ">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Phone Number</h3>
                  <p>
                    <a href="tel:01743821440">01743821440</a>
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center gap-3">
                <div className="bg-[#203872] w-14 h-14 rounded-sm flex items-center justify-center">
                  <span className="text-2xl text-white  ">
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Email Address</h3>
                  <p>
                    <a href="mailto:tarunno281@gmail.com">
                      tarunno281@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:flex-1 shadow-xl border rounded-md p-10">
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full my-4 p-3 focus:outline-none border"
                />
                <div className="flex flex-col lg:flex-row justify-between gap-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 my-4 p-3 focus:outline-none border"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="flex-1 my-4 p-3 focus:outline-none border"
                  />
                </div>

                <textarea
                  className="w-full my-4 p-3 focus:outline-none border"
                  placeholder="Message"
                  rows="4"
                ></textarea>
                <input
                  type="submit"
                  value="LogIn"
                  className="w-full my-4 py-3 cursor-pointer text-xl text-white bg-[#203872] hover:bg-[#de2440]"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial start   */}
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
    </div>
  );
};

export default Contact;
