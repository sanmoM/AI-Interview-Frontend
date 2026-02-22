"use client";

import { AiOutlineHistory } from "react-icons/ai";
import InnerDivHeader from "../shared/inner-div-header";
import InnerWrapper from "../shared/wrapper/inner-wrapper";

export default function CallHistory() {
  const [messages, setMessages] = useState([]);
  const axios = useAuthAxios();
  const id = useParams().id;

  useEffect(() => {
    axios.get(`/vapi/messages/${id}`).then((res) => {
      setMessages(res.data?.messages);
    });
  }, []);

  console.log(messages);
  return (
    <InnerWrapper className={"mt-4 lg:mt-6"}>
      <InnerDivHeader
        Icon={AiOutlineHistory}
        title="Call history"
        description="All conversations with this call."
        // badgeLabel="Search & export"
      />
      <Chatbox messages={messages} />
    </InnerWrapper>
  );
}

import useAuthAxios from "@/hooks/useAuthAxios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Chatbox({ messages }) {
  return (
    <div className="w-full rounded-2xl flex flex-col max-h-[500px] bg-bg-gray py-2">
      <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3">
        {messages.map(
          (msg) =>
            msg?.role !== "system" && (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl max-w-[75%] text-sm shadow ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ),
        )}

        <p className="text-primary text-center mt-4 text-sm">
          No more messages
        </p>
      </div>
    </div>
  );
}
