"use client";

import { AiOutlineHistory } from "react-icons/ai";
import InnerDivHeader from "../shared/inner-div-header";
import InnerWrapper from "../shared/wrapper/inner-wrapper";

export default function CallHistory() {
  return (
    <InnerWrapper className={"mt-4 lg:mt-6"}>
      <InnerDivHeader
        Icon={AiOutlineHistory}
        title="Call history"
        description="All conversations with this call."
        // badgeLabel="Search & export"
      />
      <Chatbox />
    </InnerWrapper>
  );
}

import { useEffect, useRef, useState } from "react";

function Chatbox() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Mock reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: "Got it 👍", sender: "bot" },
      ]);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="w-full rounded-2xl flex flex-col h-[500px] bg-bg-gray py-2">
      {/* <div className="px-4 py-3 border-b font-semibold text-lg">Chat</div> */}

      <div
        ref={scrollRef}
        className="flex-1 px-4 py-3 overflow-y-auto space-y-3"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-2xl max-w-[75%] text-sm shadow ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
