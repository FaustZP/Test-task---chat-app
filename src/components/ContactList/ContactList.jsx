import React from "react";
import "./style.css";
import { ContactItem } from "../ContactItem/ContactItem";
import { CHATS } from "../../mock";

export const ContactList = () => {
  return (
    <div className="contacts-list">
      <p className="contacts-title">Chats</p>
      <div className="contacts">
        {CHATS.map((each) => (
          <ContactItem key={each.lastMessageDate} item={each} />
        ))}
      </div>
    </div>
  );
};
