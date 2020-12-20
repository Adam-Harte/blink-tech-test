import React, { useContext } from 'react';

import { ConversationsContext } from '../../Context/ConversationsContext';

import './Messages.css';

export const Messages: React.FC = () => {
  const { selectedConversation } = useContext(ConversationsContext);

  return selectedConversation ? (
    <ul className="messages__list">
      {selectedConversation?.messages.sort((a, b) => {
        const dateA = new Date(a.last_updated);
        const utcA = Date.UTC(dateA.getUTCFullYear(), dateA.getUTCMonth(), dateA.getUTCDate(),
        dateA.getUTCHours(), dateA.getUTCMinutes(), dateA.getUTCSeconds());
        const dateB = new Date(b.last_updated);
        const utcB = Date.UTC(dateB.getUTCFullYear(), dateB.getUTCMonth(), dateB.getUTCDate(),
        dateB.getUTCHours(), dateB.getUTCMinutes(), dateB.getUTCSeconds());

        return utcA - utcB;
      }).map((message) => (
        <li className="messages__item" key={message.id}>
          <span className="messages__date">{new Date(message.last_updated).toLocaleString()}</span>
          <p className="messages__text">{message.text}</p>
        </li>
      ))}
    </ul>
  ) : null;
};
