import React from 'react';
import { ConversationsContextProvider } from './Context/ConversationsContext';
import { Chat } from './Pages/Chat/Chat';

function App() {
  return (
    <div className="App">
      <ConversationsContextProvider>
        <Chat />
      </ConversationsContextProvider>
    </div>
  );
}

export default App;
