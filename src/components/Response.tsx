import React from 'react';
import { listProps } from '../App';
import '../App.css';

interface RProps extends listProps {
  item: listProps,
}

function Response({item, from, text }: RProps) {
  return (
    <>
      <li className="clearfix">
        <div className="message-data align-right">
          <span className="message-data-time">{item.time}</span> &nbsp; &nbsp;
          <span className="message-data-name">{from.name}</span>
          <i className="fa fa-circle me"></i>
        </div>
        <div className="message other-message float-right">{text}</div>
      </li>
    </>
  )
}

export default Response;
