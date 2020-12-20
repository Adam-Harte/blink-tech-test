import { ADD_MESSAGE, ConversationActionTypes, SET_SELECTED_CONVERSATION } from "../Actions/conversationActions";
import { Conversation } from "../Types/types";

interface ConversationsState {
  conversations: Conversation[];
  selectedConversation: Conversation | null;
}

export const conversationsReducer = (state: ConversationsState, action: ConversationActionTypes): ConversationsState => {
  switch (action.type) {
    case SET_SELECTED_CONVERSATION:
      const conversationToSet = state.conversations.find(
        (conversation) => conversation.id === action?.payload?.id
      ) || null;

      return {
        ...state,
        ...(conversationToSet && {
            selectedConversation: conversationToSet,
          }
        ),
      }

    case ADD_MESSAGE:
      const updatedConversations = state.conversations.map((conversation) => ({
        ...conversation,
        messages: conversation.messages.map((message) => ({
          ...message,
        })),
      }));
      const conversationIndexToUpdate = updatedConversations.findIndex((conversation) => conversation.id === action.payload.id);
      updatedConversations[conversationIndexToUpdate].messages.push(action.payload.message);
      const updatedConversationsToSet = updatedConversations.find(
        (conversation) => conversation.id === action?.payload?.id
      ) || null;
      return {
        ...state,
        conversations: updatedConversations,
        selectedConversation: updatedConversationsToSet
      }

    default:
      return state
  }
}