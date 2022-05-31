import { Fragment, useState } from "react";
import "./Chat.css";
import myImage from "../../Assets/myPhoto.png";
import { AiFillWechat, AiFillCloseCircle } from "react-icons/ai";

const Chat = (props) => {
    const [ isOpen, setIsOpen]=useState(false)

    const closeChat =() =>{
        setIsOpen(false)
    
    }
    const openChat =() =>{
    
        setIsOpen(true)
    }
  return (
    <Fragment>

        <div className="chatIcon" onClick={openChat}>
            <AiFillWechat size={"100%"} color="#fff"/>
        </div>
      <section  class={` ${isOpen ? "": "d-none"}  avenue-messenger `} >
        <div class="menu ">
          <div class="button" onClick={closeChat}>
            <AiFillCloseCircle />
          </div>
        </div>
        <div class="agent-face">
          <div class="half">
            <img class="agent circle" src={myImage} alt="Jesse Tino" />
          </div>
        </div>
        <div class="chat">
          <div class="chat-title">
            <h1> Ahmed Abdelrahman</h1>
            <h2 style={{ color: "#c95bf5" }}> Full Stack Developer</h2>
          </div>
          <div class="messages">
            <div class="messages-content"> coming soon</div>
          </div>
          <div class="message-box">
            <textarea
              type="text"
              class="message-input"
              placeholder="Type message..."
            > </textarea>
            <button type="submit" class="message-submit">
              Send
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Chat;
