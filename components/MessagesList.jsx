"use client";

import React, { useEffect, useRef, useContext } from "react";
import { Appstate } from "@/hooks/context";
import ChatMessage from "./ChatMessage";
import RefMessage from "./RefMessage";
import ChatInputImage from "./ChatInputImage";

function MessagesList({ list }) {
  const messagesListRef = useRef(null);
  const {
    messages,
    selectedChatUser,
    refMessageInfo,
    setImageInfo,
    imageInfo,
    setReferenceMessage,
  } = useContext(Appstate);

  const messageContainerRef = useRef(null);

  useEffect(() => {
    messageContainerRef.current.scrollTo({
      behavior: "smooth",
      top: messagesListRef.current.scrollHeight,
    });
  }, [messages, selectedChatUser]);

  useEffect(() => {
    const messageList = document.getElementById("messageContainer");
    messageList.scrollTo({
      top: messageList.scrollHeight,
      behavior: "smooth",
    });
  }, [imageInfo, refMessageInfo]);

  console.log(list);

  return (
    <div
      className="flex flex-col items-center justify-between overflow-y-scroll -z-10 h-[calc(100%-128px)]"
      id="messageContainer"
      ref={messageContainerRef}
    >
      <div className="w-full" ref={messagesListRef} id="messageList">
        {(list || messages[selectedChatUser.current_User_Id])?.map(
          (message, index) => {
            return <ChatMessage message={message} key={index} />;
          }
        )}
      </div>
      <div className="w-[98%] mx-auto">
        <RefMessage
          refMessageInfo={refMessageInfo}
          onClick={() => setReferenceMessage(null)}
        />
        <ChatInputImage imageInfo={imageInfo} setImageInfo={setImageInfo} />
      </div>
    </div>
  );
}

export default MessagesList;
