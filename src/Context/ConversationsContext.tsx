import React, { useReducer } from 'react';

import { ADD_MESSAGE, SET_SELECTED_CONVERSATION } from '../Actions/conversationActions';
import { conversationsReducer } from '../Reducers/conversationsReducer';
import { Conversation, Message } from '../Types/types';

import data from '../Data/conversations.json';

export interface ConversationsContextProps {
  setSelectedConversation: (payload: Conversation | null) => void;
  addMessage: (payload: {
    id: string,
    message: Message
  }) => void;
  conversations: Conversation[];
  selectedConversation: Conversation | null;
}

export const ConversationsContext = React.createContext<ConversationsContextProps>({
  setSelectedConversation: (payload: Conversation | null) => {},
  addMessage: (payload: {
    id: string,
    message: Message
  }) => {},
  conversations: [],
  selectedConversation: null,
});

const initialState = {
  conversations: JSON.parse(JSON.stringify(data)),
  selectedConversation: null,
};

export const ConversationsContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(conversationsReducer, initialState);

  const setSelectedConversation = (payload: Conversation | null) => {
    dispatch({ type: SET_SELECTED_CONVERSATION, payload });
  };

  const addMessage = (payload: {
    id: string,
    message: Message,
  }) => {
    dispatch({ type: ADD_MESSAGE, payload });
  };

  const contextValues = {
    setSelectedConversation,
    addMessage,
    ...state,
  };

  return (
    <ConversationsContext.Provider value={contextValues}>
      {children}
    </ConversationsContext.Provider>
  );
}
