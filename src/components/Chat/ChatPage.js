import React, { useContext, useState, useEffect } from 'react';
import Chatbox from './ChatBox/ChatBox';
import MyChats from './ChatSideBar/MyChats';
import { UserLoginContext } from '../../Utils/Context/UserLoginContext';
import {toast, ToastContainer} from "react-toastify";
import "./ChatPage.css";

const Chatpage = () => {

  const {loggedInUserValues} = useContext(UserLoginContext);
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      <div className="chat-container">
        {loggedInUserValues._id !== "" && <MyChats fetchAgain={fetchAgain} />}
        {loggedInUserValues._id !== "" && <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Chatpage;