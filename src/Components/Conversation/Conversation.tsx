import React, { useContext } from 'react';

import { ConversationsContext } from '../../Context/ConversationsContext';
import { Conversation as ConversationType } from '../../Types/types';

import './Conversation.css';

interface ConversationProps {
  conversation: ConversationType;
}

export const Conversation: React.FC<ConversationProps> = ({
  conversation,
}) => {
  const { setSelectedConversation } = useContext(ConversationsContext);
  const handleClick = () => {
    setSelectedConversation(conversation);
  };

  return (
    <button
      className="conversation__button"
      type="button"
      onClick={handleClick}
    >
      {conversation.name}
    </button>
  );
};
