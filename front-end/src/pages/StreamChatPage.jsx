import React, { useEffect, useState, useContext } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  LoadingIndicator,
} from "stream-chat-react";
import { AuthContext } from "../context/auth.context";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import "@stream-io/stream-chat-css/dist/css/index.css";
import "../css/ChatRoom.css";

const apiKey = `pv6atd9jxn29`;

function StreamChatPage() {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);
  // const { isLoggedIn, user } = useContext(AuthContext);

  const user = {
    id: "john",
    name: "John",
  };
  useEffect(() => {
    async function init() {
      const chatClient = StreamChat.getInstance(apiKey);

      await chatClient.connectUser(user, chatClient.devToken(user.id));

      const channel = chatClient.channel("messaging", "react-talk", {
        name: "Session 2",
        members: [user.id],
      });

      await channel.watch();

      setChannel(channel);
      setClient(chatClient);
    }

    init();

    if (client) return () => client.disconnectUser();
  }, []);

  if (!channel || !client) return <LoadingIndicator />;

  return (
    <Chat client={client} theme="messaging light">
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}
export default StreamChatPage;
