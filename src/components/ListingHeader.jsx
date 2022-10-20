import React from "react";

const ListingHeader = () => {
  return (
    <div class="mb-5">
      <div class="row align-items-center">
        <div class="col-sm mb-3 mb-sm-0">
          <span class="d-block">128 lands</span>
          <h1 class="h2 mb-0">Property for sale in Lagos</h1>
        </div>

        <div class="col-sm-auto">
          <select class="form-select form-select-sm">
            <option value="mostRecent" selected>
              Most recent
            </option>
            <option value="HighestPrice">Highest price</option>
            <option value="LowestPrice">Lowest price</option>
            <option value="mostReduced">Most reduced</option>
            <option value="mostPopular">Most popular</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ListingHeader;
