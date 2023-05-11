import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card card-compact shadow-md rounded-md border">
      <figure className="p-2">
        <img className="h-64 rounded-md" src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="text-[#FF3811] text-lg font-semibold flex justify-between">
          <p>Price: ${price}</p>
          <Link to={`/book/${_id}`}>
            <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
