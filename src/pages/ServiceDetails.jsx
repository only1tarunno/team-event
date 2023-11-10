import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const services = useLoaderData();
  const service = services.find((service) => service.id === parseInt(id));

  const { img, name, price, description } = service;

  return (
    <div className="container mx-auto px-5 lg:px-0 py-14 flex flex-col lg:flex-row justify-between items-center gap-10">
      <div className="flex-1">
        <img src={img} className="w-full" alt={name} />
      </div>
      <div className="flex-1 space-y-5">
        <h2 className="card-title text-[#203872] text-3xl lg:text-4xl font-bold">
          {name}
        </h2>
        <p className="text-start font-bold text-2xl text-[#203872]">
          <span>
            <i className="fa-solid fa-dollar-sign"></i>
          </span>{" "}
          Price : {price}
        </p>
        <p className="text-base lg:text-lg ">{description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
