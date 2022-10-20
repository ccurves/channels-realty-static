import React from "react";
import { listingItems } from "../data";
import ListingCard from "./ListingCard";

const ListingSection = () => {
  return (
    <div class="container content-space-2 content-space-b-lg-3">
      <div class="w-md-75 w-lg-50 text-center mx-md-auto mb-7">
        <h2>New properties listing</h2>
      </div>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mb-5">
        {listingItems.map((listing) => (
          <ListingCard listing={listing} key={listing.id} />
        ))}
      </div>

      <div class="text-center">
        <a class="btn btn-outline-primary" href="/properties">
          View all properties for sale{" "}
          <i class="bi-chevron-right small ms-1"></i>
        </a>
      </div>
    </div>
  );
};

export default ListingSection;
