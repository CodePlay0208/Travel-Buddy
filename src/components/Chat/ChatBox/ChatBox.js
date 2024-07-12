import React, {useContext} from 'react';
import './ChatBox.css';
import SingleChat from '../SingleChat/SingleChat';
import { ChatContext } from '../../../Utils/Context/ChatContext';

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
    const { userChatValues} = useContext(ChatContext);
  return (
    <div className="chatbox-container">
        <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </div>
  );
};

export default Chatbox;
