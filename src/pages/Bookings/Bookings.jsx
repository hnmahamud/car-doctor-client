import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProviders";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return <div>My booking {data?.length}</div>;
};

export default Bookings;
