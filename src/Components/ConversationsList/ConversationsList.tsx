import React, { useContext } from 'react';

import { ConversationsContext } from '../../Context/ConversationsContext';
import { Conversation } from '../Conversation/Conversation';

import './ConversationsList.css';

export const ConversationsList: React.FC = () => {
  const { conversations } = useContext(ConversationsContext);
  console.log(conversations);

  return (
    <ul className="conversations-list__list">
      {conversations.map((conversation) => (
        <li className="conversations-list__list__item" key={conversation.id}>
          <Conversation conversation={conversation} />
        </li>
      ))}
    </ul>
  );
};
