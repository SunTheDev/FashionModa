import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const [search, setSearch] = useState("");

  const searchItem = (event) => {
    setSearch(event.target.value);
  };

  const products = useSelector((state) => state.allProducts.products);

  const renderList = products
    .filter((product) => {
      if (search == "") {
        return product;
      } else if (product.title.toLowerCase().includes(search.toLowerCase())) {
        return product;
      }
    })
    .map((product) => {
      const { id, title, image, price, category } = product;

      return (
        <div className="four wide column" key={id}>
          <Link to={`/product/${id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">$ {price}</div>
                  <div className="meta">{category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          className="searchbarinput"
          placeholder="Search..."
          onChange={searchItem}
        />
      </div>
      {renderList}
    </>
  );
};

export default ProductComponent;
