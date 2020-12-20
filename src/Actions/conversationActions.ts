import { Conversation, Message } from "../Types/types";

export const SET_SELECTED_CONVERSATION = 'SET_SELECTED_CONVERSATION';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export interface setSelectedMessageAction {
  type: typeof SET_SELECTED_CONVERSATION;
  payload: Conversation | null;
}

export interface AddMessageAction {
  type: typeof ADD_MESSAGE;
  payload: {
    id: string;
    message: Message;
  };
}

export type ConversationActionTypes = setSelectedMessageAction | AddMessageAction;