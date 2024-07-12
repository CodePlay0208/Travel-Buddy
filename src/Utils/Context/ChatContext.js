import { React, createContext } from "react";

export const ChatContext = createContext({
  userChatValues: {
    selectedChat: "",
    notification: "",
    chats: [""],
  },
  setUserChatValues: () => {},
});
