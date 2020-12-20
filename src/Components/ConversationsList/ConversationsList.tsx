import React, { useContext } from 'react';

import { ConversationsContext } from '../../Context/ConversationsContext';
import { Conversation } from '../Conversation/Conversation';

import './ConversationsList.css';

export const ConversationsList: React.FC = () => {
  const { conversations } = useContext(ConversationsContext);
  console.log(conversations);

  return (
    <ul className="conversations-list__list">
      {conversations.sort((a, b) => {
        const dateA = new Date(a.last_updated);
        const utcA = Date.UTC(dateA.getUTCFullYear(), dateA.getUTCMonth(), dateA.getUTCDate(),
        dateA.getUTCHours(), dateA.getUTCMinutes(), dateA.getUTCSeconds());
        const dateB = new Date(b.last_updated);
        const utcB = Date.UTC(dateB.getUTCFullYear(), dateB.getUTCMonth(), dateB.getUTCDate(),
        dateB.getUTCHours(), dateB.getUTCMinutes(), dateB.getUTCSeconds());

        return utcB - utcA;
      }).map((conversation) => (
        <li className="conversations-list__list__item" key={conversation.id}>
          <Conversation conversation={conversation} />
        </li>
      ))}
    </ul>
  );
};
