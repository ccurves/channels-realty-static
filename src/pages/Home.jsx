import React from "react";
import FAQSection from "../components/FAQSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeNavbar from "../components/HomeNavbar";
import ListingSection from "../components/ListingSection";

const Home = () => {
  return (
    <div>
      <HomeNavbar />
      <main id="content" role="main">
        <Hero />
        <ListingSection />
        <FeaturesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
