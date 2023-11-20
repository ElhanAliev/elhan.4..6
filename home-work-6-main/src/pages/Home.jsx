import React, { useState, useEffect, useCallback } from "react";
import Product from "../components/Product";
import { ProductsContext } from "../context/ProductsContext";
import "../style/home.css";

const Home = () => {
  const { products } = React.useContext(ProductsContext);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("популярные");

  const sortProducts = useCallback(() => {
    let sorted = [...products];

    switch (sortOption) {
      case "популярные":
        sorted.sort((a, b) => b.popularity - a.popularity);
        break;
      case "алфавит":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "цена":
        sorted.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setSortedProducts(sorted);
  }, [products, sortOption]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  useEffect(() => {
    sortProducts();
  }, [sortProducts]); 

  useEffect(() => {
    sortProducts();
  }, [products, sortOption, sortProducts]);

  return (
    <div className="home">
      <div>
        <label htmlFor="sort">Сортировать по:</label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="популярные">Популярные</option>
          <option value="алфавит">Алфавиту</option>
          <option value="цена">Цене</option>
        </select>
      </div>
      <div className="products">
        {sortedProducts?.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
