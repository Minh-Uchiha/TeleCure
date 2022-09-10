// import { useEffect, useState } from 'react'
import React from 'react';
import '../../css/Chat.css'
export default function Chat(){

    // const [chatData, setChatData] = useState();

    // useEffect(()=>{
    //   //can use "/api" because we defined proxy inside package.json
    //   fetch("/chat")
    //   .then(response => response.json())
    //   .then(data =>{setChatData(data)})
    // }, [])
  
    return(
      <div id="screen">
        <div id="chat-log">
                  {/* {chatData && chatData.chat_log.map((chat, index) =>{
          return(
            <div key={index}>{chat.message}</div>
          )
        })} */}
          <div className="chat a">Hello</div>
          <div className="chat b">Hi there!</div>
          <div className="chat a">yoo</div>
          <div className="chat b">checking</div>
          <div className="chat a">Hello</div>
          <div className="chat b">Hi there!</div>
          <div className="chat a">yoo</div>
          <div className="chat b">checking</div>
          <div className="chat a">Hello</div>
          <div className="chat b">Hi there!</div>
          <div className="chat a">yoo</div>
          <div className="chat b">checking</div>
          <div className="chat a">Hello</div>
          <div className="chat b">Hi there!</div>
          <div className="chat a">yoo</div>
          <div className="chat b">checking</div>
          <div className="chat a">Hello</div>
          <div className="chat b">Hi there!</div>
          <div className="chat a">yoo</div>
          <div className="chat b">checking</div>
          <div className="chat a">Hello</div>
          <div className="chat b">Hi there!</div>
          <div className="chat a">yoo</div>
          <div className="chat b">checking</div>
        </div>
        <form action="/message/add" method="POST">
          <textarea name="message" placeholder="message" id="message"/>
          <input type="submit" value="Send" id='submit'/>
        </form>
      </div>
    )
}