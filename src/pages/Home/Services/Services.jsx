import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="min-h-screen px-2 space-y-12">
      <div className="md:w-1/2 md:mx-auto text-center">
        <h4 className="text-[#FF3811] text-xl font-bold">Service</h4>
        <h2 className="text-[#151515] text-3xl md:text-5xl font-bold mb-4">
          Our Service Area
        </h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services &&
          services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline btn-error">More Services</button>
      </div>
    </div>
  );
};

export default Services;
