import axios from "axios";
import { BASE_URL } from "../../config";
import { useEffect, useMemo, useState } from "react";
import { ListingCard, RangeComponent } from "../../components";

const ListingsPage = () => {
  const [listings, setListings] = useState([]);
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [minFloor, setMinFloor] = useState("");
  const [maxFloor, setMaxFloor] = useState("");
  const [searchArea, setSearchArea] = useState("");

  const getListings = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/listings`);
      console.log(response.data);
      setListings(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useMemo(() => {
    const min = listings.reduce(
      (previousValue, currentValue) =>
        previousValue.priceEuro < currentValue.priceEuro
          ? previousValue
          : currentValue,
      0
    );
    setMinBudget(min.priceEuro);
    const max = listings.reduce(
      (previousValue, currentValue) =>
        previousValue.priceEuro > currentValue.priceEuro
          ? previousValue
          : currentValue,
      0
    );
    setMaxBudget(max.priceEuro);
    setSearchPrice(max.priceEuro);
  }, [listings]);

  useMemo(() => {
    const min = listings.reduce(
      (previousValue, currentValue) =>
        previousValue.m2 < currentValue.m2 ? previousValue : currentValue,
      0
    );
    setMinFloor(min.m2);

    const max = listings.reduce(
      (previousValue, currentValue) =>
        previousValue.m2 > currentValue.m2 ? previousValue : currentValue,
      0
    );
    setMaxFloor(max.m2);
    setSearchArea(max.m2);
  }, [listings]);

  const filteredListing = useMemo(() => {
    return listings.filter((listing) => {
      return (
        listing.priceEuro <= parseInt(searchPrice) &&
        listing.m2 <= parseInt(searchArea)
      );
    });
  }, [searchPrice, searchArea, listings]);

  useEffect(() => {
    getListings();
  }, []);

  return (
    <div className="container page-container">
      <h1>Listings</h1>
      <div className="row">
        <RangeComponent
          title="max.budget"
          minValue={minBudget}
          maxValue={maxBudget}
          value={searchPrice}
          handleOnChange={(event) => setSearchPrice(event.target.value)}
        />

        <RangeComponent
          title="min.floor"
          minValue={minFloor}
          maxValue={maxFloor}
          value={searchArea}
          handleOnChange={(event) => setSearchArea(event.target.value)}
        />
      </div>
      {listings && filteredListing && (
        <p>
          Showing {filteredListing.length} of {listings.length} listings
        </p>
      )}
      {filteredListing
        ? filteredListing.map((listing, index) => (
            <ListingCard
              key={listing.id}
              address={listing.address}
              bedrooms={listing.bedRooms}
              living={listing.m2}
              price={listing.priceEuro}
            />
          ))
        : "Loading.."}
    </div>
  );
};
export { ListingsPage };
