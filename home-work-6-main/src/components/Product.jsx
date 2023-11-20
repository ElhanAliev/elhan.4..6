import React from "react";

const Product = ({ title, description, price, image, rating }) => {
  return (
    <div className="product">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="price-rating">
          <b>{price}</b>
          <div>{rating.rate}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;

