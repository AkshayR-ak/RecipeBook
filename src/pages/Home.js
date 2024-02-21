import React from "react";
import HeroSection from "../components/HeroSection";
import PopularFoods from "../components/PopularFoods";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <PopularFoods />
      <Footer />
    </>
  );
};

export default Home;
