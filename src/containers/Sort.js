import React from "react";
import { useSelector } from "react-redux";

const Sort = () => {
  const products = useSelector((state) => state.allProducts.products);

  const ascOrder = () => {
    console.log(
      products.sort((a, b) => {
        return a.title > b.title;
      })
    );
  };
  const desOrder = () => {
    console.log(
      products.sort((a, b) => {
        return b.title > a.title;
      })
    );
  };
  const ascPrice = () => {
    console.log(
      products.sort((a, b) => {
        return a.price > b.price;
      })
    );
  };
  const desPrice = () => {
    console.log(
      products.sort((a, b) => {
        return b.price > a.price;
      })
    );
  };

  return (
    <div>
      <select>
        <option default value="">
          Sort by:
        </option>
        <option value="ASC" onClick={ascOrder}>
          ASC
        </option>
        <option value="DES" onClick={desOrder}>
          DES
        </option>
        <option value="mostexpensive" onClick={ascPrice}>
          Price -
        </option>
        <option value="leastexpensive" onClick={desPrice}>
          Price +
        </option>
      </select>
    </div>
  );
};

export default Sort;
