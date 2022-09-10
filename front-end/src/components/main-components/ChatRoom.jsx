import React from 'react';
import '../../css/ChatRoom.css'
import { StreamChat } from 'stream-chat';
import { Chat, ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

const apiKey = 'pv6atd9jxn29';

const client = StreamChat.getInstance(apiKey);

export default function ChatRoom(){
    return(
      <div className="app__wrapper">
        <Chat client={client} theme="team light">
          <ChannelListContainer
          
          />

          <ChannelContainer
          
          />
        </Chat>
       </div>
    )
}

function ChannelListContainer(){
  return(
    <>
    </>
  )
}

function ChannelContainer(){
  return(
    <div>
      ChannelContainer
    </div>
  )
}