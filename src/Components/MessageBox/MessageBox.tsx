import React, { useContext, useState } from 'react';
import uniqid from 'uniqid';

import { ConversationsContext } from '../../Context/ConversationsContext';

import './MessageBox.css';

export const MessageBox: React.FC = () => {
  const { addMessage, selectedConversation } = useContext(ConversationsContext);
  const [message, setMessage] = useState({
    id: '',
    text: '',
    last_updated: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;

    setMessage({
      id: uniqid(),
      text: value,
      last_updated: new Date(Date.now()).toISOString()
    });
  }
  const handleClick = () => {
    if (message.text) {
      addMessage({
        id: selectedConversation?.id || '',
        message: {
          ...message,
        }
      });

      setMessage({
        id: '',
        text: '',
        last_updated: ''
      });
    }
  }

  return (
    <div className="message-box">
      <textarea
        className="message-box__text"
        value={message.text}
        onChange={handleChange}
        placeholder="Enter message"
        rows={6}
        cols={70}
      />
      <button
        className="message-box__send-button"
        type="button"
        onClick={handleClick}
      >
        Send
      </button>
    </div>
  );
};

