import React, { useContext, useState } from 'react';

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
      id: '123gha12',
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

