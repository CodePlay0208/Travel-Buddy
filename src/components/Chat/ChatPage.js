import React, { useContext, useState, useEffect } from 'react';
import Chatbox from './ChatBox/ChatBox';
import ChatSideBar from './ChatSideBar/ChatSideBar';
import { UserLoginContext } from '../../Utils/Context/UserLoginContext';
import {toast, ToastContainer} from "react-toastify";
import "./ChatPage.css";

const Chatpage = () => {

  const {loggedInUserValues} = useContext(UserLoginContext);
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      <div className="chat-container">
         <ChatSideBar fetchAgain={fetchAgain} />
         <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Chatpage;