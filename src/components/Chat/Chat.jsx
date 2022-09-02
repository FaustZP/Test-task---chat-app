import React from "react";
import "./style.css";
import paperplane from "../../asset/icon/send.svg";
import check from "../../asset/icon/check.svg";
import avatar1 from "../../asset/img/avatar1.jpg";

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-header">
        <div className="avatar-box">
          <img src={avatar1} alt="avatar" className="avatar " />
          <img src={check} alt="check" className="check-icon" />
        </div>
        <p className="contact-name">Josefina</p>
      </div>
      <div className="chat-body">
        <div className="incoming-message">
          <img src={avatar1} alt="avatar" className="avatar" />
          <div className="text-block">
            <p className="text incoming">
              Quickly come to the meeting room 1B, we have a big server issue
              dlvdsnfrnfvlj vdslvnwrov vov vkljnrwkojnrvlw v odijowrfnv
            </p>
            <p className="date">4/22/17, 4:00 AM</p>
          </div>
        </div>
        <div className="outcoming-message">
          <div className="text-block">
            <p className="text outcoming">
              I'm having a breakfast right now, fuck off
            </p>
            <p className="date">4/22/17, 4:05 AM</p>
          </div>
        </div>
        <div className="incoming-message">
          <img src={avatar1} alt="avatar" className="avatar" />
          <div className="text-block">
            <p className="text incoming">You're an asshole!</p>
            <p className="date">4/22/17, 4:07 AM</p>
          </div>
        </div>
      </div>
      <div className="input-container">
        <form className="input-box">
          <input
            className="input-message"
            type="text"
            placeholder="Type your message"
          />
          <button className="input-send-message-button">
            <input type="submit" value="" />
            <img src={paperplane} alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};
