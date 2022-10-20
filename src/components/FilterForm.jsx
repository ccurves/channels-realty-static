import React from "react";

const FilterForm = () => {
  return (
    <div class="container content-space-t-3 content-space-t-lg-3">
      <form>
        <div class="row gx-2">
          <div class="col-lg mb-2 mb-lg-0">
            <label
              for="searchPropertyFilterForm"
              class="visually-hidden form-label"
            >
              Search property
            </label>
            <div class="input-group input-group-merge">
              <span class="input-group-prepend input-group-text">
                <i class="bi-search"></i>
              </span>
              <input
                type="text"
                class="form-control form-control-sm"
                id="searchPropertyFilterForm"
                placeholder="Search property"
                aria-label="Search property"
                value="Lagos, Epe"
              />
            </div>
          </div>

          <div class="col-auto mb-2 mb-lg-0">
            <div class="dropdown">
              <a
                class="btn btn-white btn-sm dropdown-toggle"
                href="#"
                id="priceFilterFormDropdown"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Price
              </a>

              <div
                class="dropdown-menu dropdown-menu-end dropdown-card"
                aria-labelledby="priceFilterFormDropdown"
                style={{ minWidth: "21rem" }}
              >
                <div class="card card-sm">
                  <div class="card-body">
                    <div class="row justify-content-center mt-5">
                      <div class="col">
                        <span class="d-block small mb-1">Min price:</span>
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          id="rangeSliderExampleDouble4MinResult"
                        />
                      </div>

                      <div class="col">
                        <span class="d-block small mb-1">Max price:</span>
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          id="rangeSliderExampleDouble4MaxResult"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="card-footer border-top">
                    <div class="d-flex justify-content-end gap-2">
                      <a class="btn btn-white btn-sm" href="#">
                        Clear
                      </a>
                      <a class="btn btn-primary btn-sm" href="#">
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-auto mb-2 mb-lg-0">
            <div class="dropdown">
              <a
                class="btn btn-white btn-sm dropdown-toggle"
                href="#"
                id="propertyTypeFilterFormDropdown"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Property type
              </a>

              <div
                class="dropdown-menu dropdown-menu-end dropdown-card"
                aria-labelledby="propertyTypeFilterFormDropdown"
                style={{ minWidth: "20rem" }}
              >
                <div class="card card-sm">
                  <div class="card-body">
                    <div class="d-grid gap-2">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="propertyTypeHouseCheckbox"
                          checked
                        />
                        <label
                          class="form-check-label"
                          for="propertyTypeHouseCheckbox"
                        >
                          House
                          <span class="d-block small text-muted">
                            Find a cozy place
                          </span>
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="propertyTypeFlatsCheckbox"
                        />
                        <label
                          class="form-check-label"
                          for="propertyTypeFlatsCheckbox"
                        >
                          Flats
                          <span class="d-block small text-muted">
                            Flats for sale or to rent
                          </span>
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="propertyTypeMultiFamilyCheckbox"
                          checked
                        />
                        <label
                          class="form-check-label"
                          for="propertyTypeMultiFamilyCheckbox"
                        >
                          Multi-family
                          <span class="d-block small text-muted">
                            Multi-family houses or flats
                          </span>
                        </label>
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="propertyTypeFarmsLandCheckbox"
                        />
                        <label
                          class="form-check-label"
                          for="propertyTypeFarmsLandCheckbox"
                        >
                          Farms/land
                          <span class="d-block small text-muted">
                            Own a property for farming
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="card-footer border-top">
                    <div class="d-flex justify-content-end gap-2">
                      <a class="btn btn-white btn-sm" href="#">
                        Clear
                      </a>
                      <a class="btn btn-primary btn-sm" href="#">
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-auto mb-2 mb-lg-0">
            <a
              class="btn btn-white btn-sm"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#realEstateMoreFiltersModal"
            >
              <i class="bi-sliders me-2"></i> More
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
