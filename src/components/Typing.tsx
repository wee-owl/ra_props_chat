import React from 'react';
import { listProps } from '../App';
import '../App.css';

interface TProps extends listProps {
  item: listProps,
}

function Typing({item, from, text }: TProps) {
  return (
    <>
      <li>
        <div className="message-data">
          <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
          <span className="message-data-time">{item.time}</span>
        </div>
        <div className="typing">{text}</div>
      </li>
    </>
  )
}

export default Typing;
