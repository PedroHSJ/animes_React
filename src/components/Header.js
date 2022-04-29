import React, { useState } from "react";
import "./Header.css";
import useDebounce from "../useDebounce.js";
import Img from "../img/blue_square_1.png";

export default ({ onChange }) => {
  const [displayValue, setDisplayValue] = useState("");
  const debouncedChange = useDebounce(onChange, 500);

  const searchBar = (e) => {
    setDisplayValue(e.target.value);
    debouncedChange(e.target.value);
  };

  return (
    <div className="Header mb-5">
      <nav className="nav navbar-dark bg-dark">
        <div className="container d-flex align-items-center justify-content-around p-2">
          <img src={Img} />
          <form>
            <input
              className="form-control"
              type="search"
              value={displayValue}
              onChange={searchBar}
              placeholder="Busque aqui"
            />
          </form>
        </div>
      </nav>
    </div>
  );
};
