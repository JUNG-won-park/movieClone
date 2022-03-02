import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "../components/Dashboard";



const Home = () => {
  return (
    <div>
      <Navbar />
      <Dashboard />

      {/* <Footer/> */}
    </div>
  );
};

export default Home;
