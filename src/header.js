import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { FaRegBookmark } from "react-icons/fa";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [button, setButton] = useState("");

  const searchBut = (e) => {
    setButton(e.target.value);
  };
  return (
    <div className="header">
      {button}
      <input type="text" placeholder="search recipe.." />
      <select>
        <option> All CATEGORIES </option>
        <option> Sweet </option>
        <option> Vegeterian </option>
        <option> Non-vegeterian </option>
        <option> Continental food </option>
        <option> Oriental food </option>
      </select>
      <button type="submit" onChange={searchBut}>
        <a href="/search" className="search">
          <FontAwesomeIcon icon={faSearchengin} size="1x" />
        </a>
      </button>
      <FaRegBookmark />
    </div>
  );
}

export default Header;
