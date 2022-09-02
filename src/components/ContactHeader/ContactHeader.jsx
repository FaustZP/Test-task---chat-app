import React from "react";
import "./style.css";
import blank from "../../asset/img/blank.jpg";
import check from "../../asset/icon/check.svg";
import magnifier from "../../asset/icon/search.svg";

export const Header = () => {
  return (
    <div className="header">
      <div className="user-box">
        <div className="avatar-box user">
          <img src={blank} alt="avatar" className="avatar " />
          <img src={check} alt="check" className="check-icon" />
        </div>
        <div className="user-name">
          <h2>John Dow</h2>
          <p>(You)</p>
        </div>
      </div>
      <div className="search-box">
        <img src={magnifier} alt="search" className="search-icon" />
        <input
          type="text"
          className="search-field"
          placeholder="Search or start new chat"
        />
      </div>
    </div>
  );
};
