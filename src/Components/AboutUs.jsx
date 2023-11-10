import aboutimg from "../assets/about.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-center container mx-auto px-5 lg:px-0 my-14">
      <div className="flex-1">
        <img
          data-aos="fade-up"
          data-aos-duration="2000"
          src={aboutimg}
          className="w-full lg:w-3/4 lg:mx-auto"
          alt=""
        />
      </div>
      <div className=" text-center lg:text-start space-y-3 flex-1">
        <h3
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-[#203872] font-bold text-xl lg:text-3xl"
        >
          About US
        </h3>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="pb-3  text-[#0a0b09] text-3xl lg:text-5xl font-bold"
        >
          Making Dreams Into Reality
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-base  lg:text-lg"
        >
          We are passionate about transforming your wedding dreams into
          beautiful realities. With years of experience and a deep understanding
          of the intricacies involved in planning and executing social events,
          especially weddings, we take immense pride in our role as your trusted
          event partner.
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-base  lg:text-lg"
        >
          Our dedicated team of event professionals is committed to delivering
          the highest level of excellence in every aspect of your special day.
          From the initial consultation to the final farewell, we work closely
          with you to bring your vision to life, ensuring that every detail is
          thoughtfully considered and flawlessly executed.
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="2500"
          className="text-base  lg:text-lg"
        >
          We understand that your wedding is a once-in-a-lifetime event, and
          that&apos;s why we approach each project with a genuine commitment to
          making it as extraordinary as your love story. Let us be a part of
          your journey, and together, we will craft the wedding of your dreams.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
