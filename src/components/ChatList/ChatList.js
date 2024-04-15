import React from "react";
import styles from "./ChatList.module.css";

const ChatList = ({ chats }) => {
  return (
    <div className={styles.chatListContainer}>
      {chats.map((chat, index) => (
        <div key={index} className={styles.chatItem}>
          <div className={styles.chatAvatar}>
            <img src={chat.avatar} alt={chat.name} />
          </div>
          <div className={styles.chatDetail}>
            <div className={styles.chatInfo}>
              <div className={styles.chatName}>{chat.name}</div>
              <div className={styles.chatTime}>{chat.time}</div>
            </div>
            <div className={styles.chatMessage}>{chat.message}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
