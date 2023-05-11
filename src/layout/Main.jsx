import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProviders";
import LoadingSpinner from "../pages/Shared/LoadingSpinner/LoadingSpinner";

const Main = () => {
  const { fullLoading } = useContext(AuthContext);

  if (fullLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
