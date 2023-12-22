import React from "react";
import Header from "../components/reuseable/Header";
import HeroSection from "../components/home/HeroSection";
import TrandingSection from "../components/home/TrandingSection";
import TopCreator from "../components/home/TopCreator";
import BrowseCategory from "../components/home/BrowseCategory";
import Dashboard from "../components/Dashboard";
import Footer from "../components/reuseable/Footer";

const Home = () => {
  return (
    <>
      <Dashboard>
        <Header />
        <HeroSection />
        <TrandingSection />
        <TopCreator />
        <BrowseCategory />
      </Dashboard>
      <Footer />
    </>
  );
};

export default Home;
