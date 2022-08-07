import "./card.scss";

const ListingCard = ({ address, living, price, bedrooms }) => {
  return (
    <div className="card card-container">
      <p>
        Address : {address.street}, {address.number}, {address.city}{" "}
      </p>
      <p> Price : {price} </p>
      <p> Living : {living}m2 </p>
      <p> Bedrooms : {bedrooms}</p>
    </div>
  );
};
export { ListingCard };
