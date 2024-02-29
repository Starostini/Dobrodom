import { Outlet } from "react-router-dom";
import HeaderTitle from "./components/HeaderTitle";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet key="outlet" />
      <Footer />
    </>
  );
};

export default Layout;
