import React from "react";
import Chat from "../components/main-components/Chat";
import { useState } from "react";
import "../css/ChatRoomPage.css";
import { useEffect } from "react";
import io from "socket.io-client";

const ChatMessage = ({ messageText }) => {
  return (
    <div
      className={`chat-message ${
        messageText.isSelf ? "chat-message-self" : "chat-message-peer"
      }`}
    >
      <p>{messageText.text}</p>
    </div>
  );
};

const socket = io.connect("http://localhost:8080");
const room = "as_a4a8b8cc6a812";

const ChatRoomPage = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isConnected, setIsConnected] = useState(socket.connected);

  const handleSendMessage = () => {
    setMessages((oldMessages) => {
      return [...oldMessages, { text: message, isSelf: true }];
    });
    socket.emit("send-message", { message, room });
    setMessage("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.emit("join-room", room);

    socket.on("receive-message", (message) => {
      setMessages((oldMessages) => {
        return [...oldMessages, { text: message, isSelf: false }];
      });
      console.log("Hello");
    });
  }, []);

  const handleChange = (e) => setMessage(e.target.value);

  return (
    <section className="chat-room-container">
      <h1>Appointment session {room}</h1>
      <section className="chat-container">
        <section className="chat-screen">
          {messages.map((messageText, idx) => {
            return <ChatMessage messageText={messageText} key={idx} />;
          })}
        </section>
        <section className="chat-input">
          <input type="text" value={message} onChange={handleChange} />
          <button onClick={handleSendMessage}>Send</button>
        </section>
      </section>
    </section>
  );
};

export default ChatRoomPage;
