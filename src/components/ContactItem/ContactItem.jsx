import React from "react";
import check from "../../asset/icon/check.svg";
import "./style.css";

export const ContactItem = ({ item }) => {
  return (
    <div className="contact-item">
      <div className="avatar-box">
        <img
          src={`./database/${item.contactAvatar}`}
          alt="avatar"
          className="avatar "
        />
        <img src={check} alt="check" className="check-icon" />
      </div>
      <div className="contact-item-content">
        <h2>{item.contactName}</h2>
        <p className="last-message">{item.lastMessage}</p>
        <p className="last-message-date">Date: {item.lastMessageDate}</p>
      </div>
    </div>
  );
};
