import React from 'react';

import { ConversationsList } from '../../Components/ConversationsList/ConversationsList';
import { MessageBox } from '../../Components/MessageBox/MessageBox';
import { Messages } from '../../Components/Messages/Messages';

import './Chat.css';

export const Chat: React.FC = () => (
  <div className="chat">
    <ConversationsList />
    <div className="chat__messages">
      <Messages />
      <MessageBox />
    </div>
  </div>
);
