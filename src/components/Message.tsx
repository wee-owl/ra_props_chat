import React from 'react';
import { listProps } from '../App';
import '../App.css';

interface MProps extends listProps {
  item: listProps,
}

function Message({item, from, text }: MProps) {
  return (
    <>
      <li>
        <div className="message-data">
          <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
          <span className="message-data-time">{item.time}</span>
        </div>
        <div className="message my-message">{text}</div>
      </li>
    </>
  )
}

export default Message;
