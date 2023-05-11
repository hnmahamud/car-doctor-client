import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProviders";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import HeroSection from "../Shared/HeroSection/HeroSection";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookingData, setBookingData] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookingData(data);
      });
  }, []);

  if (!bookingData) {
    return <LoadingSpinner fullScreen={false}></LoadingSpinner>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              console.log("Successfully deleted one document.");
              Swal.fire(
                "Deleted!",
                "Your booking has been deleted.",
                "success"
              );
              const remaining = bookingData.filter(
                (singleData) => singleData._id !== id
              );
              setBookingData(remaining);
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount === 1) {
          console.log("Successfully updated one document.");
          const remaining = bookingData.filter(
            (singleData) => singleData._id !== id
          );

          let index;
          const updated = bookingData.find((singleData, idx) => {
            if (singleData._id === id) {
              index = idx;
              return singleData;
            }
          });
          updated.status = "confirm";

          const newBookings = [...remaining];
          newBookings.splice(index, 0, updated);
          setBookingData(newBookings);

          toast("Booking Confirmed!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <HeroSection pageName="All Bookings"></HeroSection>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((singleData) => (
              <BookingRow
                key={singleData._id}
                singleData={singleData}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Bookings;
