import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <>
      <main className="page-wrapper">
        <Navbar />
        <Hero />
        <Features />
        <Steps />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
