import React from "react";
import { Header } from "./components/ContactHeader/ContactHeader";
import { ContactList } from "./components/ContactList/ContactList";
import "./App.css";
import "./reset.css";
import { Chat } from "./components/Chat/Chat";

export const App = () => {
  return (
    <div className="container">
      <div className="left-block">
        <Header />
        <ContactList />
      </div>
      <Chat />
    </div>
  );
};
