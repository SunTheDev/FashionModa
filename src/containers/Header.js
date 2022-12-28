import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
// import Sort from "./Sort";

const Header = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2
          style={{
            fontSize: "40px",
            fontFamily: "Cormorant SC",
            marginLeft: "60px",
          }}
          onClick={goHome}
        >
          ꟻashionModa
        </h2>
        <h4
          style={{
            paddingTop: "15px",
            marginLeft: "-250px",
            fontFamily: "Cormorant SC",
            fontSize: "16px",
          }}
          onClick={goHome}
        >
          TOP Quality styles at the best price and in a sustainable way.
        </h4>
      </div>
      {/* <Sort /> */}
      <Search />
    </div>
  );
};

export default Header;
