import React from 'react';
import { listProps } from '../App';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';
import '../App.css';

interface MHProps {
  list: listProps[],
}

function MessageHistory({ list }: MHProps) {
  return (
    <ul>
      {
        list.map(item => {
          return item.type === 'message' ? <Message key={item.id} from={item.from} text={item.text} item={item}/>
              : item.type === 'response' ? <Response key={item.id} from={item.from} text={item.text} item={item}/>
              : <Typing key={item.id} from={item.from} text={item.text} item={item}/>
        })
      }
    </ul>
  )
}

export default MessageHistory;
