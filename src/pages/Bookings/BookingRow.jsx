import React from "react";

const BookingRow = ({ singleData, handleDelete, handleConfirm }) => {
  console.log(singleData);
  const { _id, img, service, date, price, status } = singleData;
  return (
    <tr>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-20 h-20">
            <img src={img} />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>{price}</td>
      <td>
        {status === "confirm" ? (
          <button className="text-white btn btn-success btn-xs">
            Confirmed
          </button>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="bg-[#FF3811] text-white btn btn-error btn-xs"
          >
            Confirm
          </button>
        )}
      </td>
    </tr>
  );
};

export default BookingRow;
