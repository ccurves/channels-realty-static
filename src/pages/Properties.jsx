import React from "react";
import FilterForm from "../components/FilterForm";
import Footer from "../components/Footer";
import ListingGrid from "../components/ListingGrid";
import Navbar from "../components/Navbar";

const Properties = () => {
  return (
    <>
      <Navbar />
      <main id="content" role="main">
        <FilterForm />
        <ListingGrid />
      </main>
      <Footer />
    </>
  );
};

export default Properties;
