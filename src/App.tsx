import React from 'react';
import MessageHistory from './components/MessageHistory';
import messages from './data/messages';
import './App.css';

const list: listProps[] = messages;

export interface listProps {
  id?: string,
  from: { name: string },
  type?: string,
  time?: string,
  text?: string,
}

function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={list} />
        </div>
      </div>  
    </div>
  );
}

export default App;
