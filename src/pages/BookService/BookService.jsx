import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProviders";

const BookService = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;

  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const date = form.date.value;
    const message = form.message.value;

    const booking = {
      customerName: user?.displayName,
      email: user?.email,
      phone,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
      message,
    };

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          console.log("Booking successfully!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-base-200">
      <div className="text-center font-bold pt-12">
        <p>Booking Service: {title}</p>
        <p>Price: ${price}</p>
      </div>
      <form onSubmit={handleBookService} className="bg-base-200 p-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              defaultValue={user && user.displayName}
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              defaultValue={user && user.email}
              readOnly
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              name="date"
              type="date"
              required
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="mt-2 md:mt-4">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            name="message"
            required
            placeholder="Your Message"
            className="textarea textarea-bordered textarea-md w-full h-36"
          ></textarea>
        </div>
        <div className="form-control mt-2 md:mt4">
          <button
            type="submit"
            className="bg-[#FF3811] btn btn-error text-white"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookService;