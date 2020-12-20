import React, { useContext } from 'react';

import { ConversationsContext } from '../../Context/ConversationsContext';

import './Messages.css';

export const Messages: React.FC = () => {
  const { selectedConversation } = useContext(ConversationsContext);

  return selectedConversation ? (
    <ul className="messages__list">
      {selectedConversation?.messages.map((message) => (
        <li className="messages__item" key={message.id}>
          <span className="messages__date">{new Date(message.last_updated).toLocaleString()}</span>
          <p className="messages__text">{message.text}</p>
        </li>
      ))}
    </ul>
  ) : null;
};
