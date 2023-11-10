import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, img, price, short_description } = service;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="card  bg-base-100 "
    >
      <figure className="px-5 lg:px-8 pt-5 lg:pt-8">
        <img src={img} alt={name} className="rounded-xl" />
      </figure>
      <div className="card-body  items-center text-center">
        <h2 className="card-title text-[#203872] text-2xl font-bold">{name}</h2>
        <p className="text-base lg:text-lg ">{short_description}</p>
        <div className="flex justify-between items-center mt-4 w-full">
          <div className="flex-1">
            <p className="text-start font-bold text-xl text-[#203872]">
              <span>
                <i className="fa-solid fa-dollar-sign"></i>
              </span>{" "}
              Price : {price}
            </p>
          </div>
          <div className="flex-1 text-end">
            <Link to={`/service/${id}`}>
              <button className="btn text-base md:text-xl bg-[#203872]">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
Service.propTypes = {
  service: PropTypes.object.isRequired,
};
