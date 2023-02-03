import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import BikeListing from "../pages/BikeListing"
import CycleListing from "../pages/CycleListing"
import Login from "../pages/Login"
import Register from "../pages/Register"
import VehicleSharing from "../pages/VehicleSharing"
import Driver from "../pages/Driver"


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/vehiclesharing" element={<VehicleSharing />} />
      <Route path="/driver" element={<Driver />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/bikes" element={<BikeListing />} />
      <Route path="/cycles" element={<CycleListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
