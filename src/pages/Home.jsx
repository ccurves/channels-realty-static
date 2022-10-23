import React from "react";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HomeNavbar from "../components/HomeNavbar";
import ListingSection from "../components/ListingSection";
import SocialLinks from "../components/SocialLinks";
import SubHero from "../components/SubHero";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <HomeNavbar />
      <main id="content" role="main">
        <Hero />
        <SubHero />
        <ListingSection />
        <Testimonials />
        <SocialLinks />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
