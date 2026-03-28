"use client";

import Wrapper from "@/components/shared/wrapper/wrapper";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const axios = useAuthAxios();
  const { id } = useParams();
  const [chatId, setChatId] = useState(null);
  // State to hold the chat messages
  const [messages, setMessages] = useState([
    // { id: 1, text: "Hey! How can I help you today?", sender: "bot" },
    // { id: 2, text: "Can you give me a React chat component?", sender: "user" },
    // { id: 3, text: "Absolutely! Here you go.", sender: "bot" },
  ]);
  const [role, setRole] = useState({});

  // State for the current input value
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add the user's message
    const newMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    const res = await axios.post(`/send_message`, {
      assistantId: role?.assistant_id,
      input: inputValue,
      previousChatId: chatId,
    });

    const chat = res?.data?.message;
    console.log(chat.output[0].content);

    // Simulate a delayed bot response
    const botMessage = {
      id: Date.now(),
      text: chat.output[0].content,
      sender: "bot",
    };

    setMessages((prev) => [...prev, botMessage]);
  };

  const fetchVenture = async () => {
    const res = await axios.get(`/single-role/${id}`);
    setRole(res?.data?.role);
    getChatId(res?.data?.role?.assistant_id);
  };

  const getChatId = async (id) => {
    const res = await axios.post(`/send_message`, {
      assistantId: id,
      input: "Hello",
    });
    setChatId(res?.data?.message?.id);
  };

  useEffect(() => {
    fetchVenture();
  }, []);
  return (
    <Wrapper>
      <div className="flex flex-col h-full w-full bg-bg-gray border border-gray-200 rounded-4xl overflow-hidden font-sans">
        {/* Header */}
        <div className="bg-primary text-2xl text-white px-6 py-3 rounded-t-lg font-semibold flex items-center shadow-sm">
          {role?.name}
        </div>

        {/* Message Area */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 ">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`max-w-[75%] px-6 py-2 rounded-2xl ${
                msg.sender === "user"
                  ? "bg-primary text-white self-end rounded-br-sm"
                  : "bg-white border border-gray-200 text-gray-800 self-start rounded-bl-sm shadow-sm"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <form
          onSubmit={handleSendMessage}
          className="p-3 bg-white border-t border-gray-200 rounded-b-lg flex gap-2 items-center"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="bg-primary text-white px-5 py-2 rounded-full hover:primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
