import React, { useContext, useEffect, useState } from "react";
import "./MyChats.css";
import { ChatContext } from "../../../Utils/Context/ChatContext";
import axios from "axios";
import { UserLoginContext } from "../../../Utils/Context/UserLoginContext";

function getSender(currentUserId, users){
  console.log(users);
  // return users[0]?._id === currentUserId ? users[1]?.name : users[0]?.name;
  return "tushar";
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  console.log("the value is", value);
  const parts = value.split(`; ${name}=`);
  console.log("the parts is", parts);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const MyChats = ({fetchAgain}) => {
  
  const {loggedInUserValues} = useContext(UserLoginContext);
  const { userChatValues, setUserChatValues} = useContext(ChatContext);


  const fetchChats = async () => {
    try {
    
      const sessionCookie = getCookie("connect.sid");
        console.log("the cookie is", sessionCookie);
        // Configure fetch options based on session cookie presence
        const fetchOptions = {
          method: "GET",
        };

        // Add credentials: 'include' only if session cookie is present
        if (sessionCookie) {
          fetchOptions.credentials = "include"; // Ensure cookies are sent with the request
        }

        fetch("http://localhost:4000/chat/getChats", fetchOptions)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
              console.log("User is logged in:", data.user);
              setUserChatValues((currentValues)=>({
                ...currentValues, chats: data
              }))
          })
          .catch((error) => {
            console.error("Error checking session:", error);
          });
      } catch (error) {
        console.error("Error checking session:", error);
      }
    };


  useEffect(()=>{
    fetchChats();
  }, [fetchAgain]);


  return (
    <div className={`myChats ${userChatValues.selectedChat ? "hide-on-base" : ""}`}>
      <div className="myChats-header">
        <span>My Chats</span>
      </div>
      <div className="myChats-body">
        {userChatValues.chats && (
          <div className="chats-list">
            {userChatValues.chats.map((chat) => (
              <div
                onClick={() => setUserChatValues((currentValues)=>({
                  ...currentValues, 
                  selectedChat:chat
                })
              )}
                className={`chat-item ${userChatValues.selectedChat === chat ? "selected" : ""}`}
                key={chat._id}
              >
                <p>
                  {getSender(loggedInUserValues._id, chat.users)}
                </p>
                {chat.latestMessage && (
                  <p className="latest-message">
                    <strong>{chat.latestMessage.sender.name}:</strong>
                    {chat.latestMessage.content.length > 50
                      ? chat.latestMessage.content.substring(0, 51) + "..."
                      : chat.latestMessage.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyChats;
