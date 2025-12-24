"use client";
import { CgFileDocument } from "react-icons/cg";
import { TbDownload } from "react-icons/tb";
import Searchbox from "../ui/inputs/searchbox";
import Badge from "../ui/badge";

const transcriptMessages = [
  {
    timestamp: "00:03",
    speaker: "Caller",
    role: "caller",
    message:
      "Hi, this is Lena from UrbanMove Berlin. We're looking at e-scooter providers for a pilot and I had a few questions about your pricing and maintenance.",
  },
  {
    timestamp: "00:18",
    speaker: "Agent · D. Chen",
    role: "agent",
    message:
      "Great to meet you, Lena. I can walk you through pilot pricing, how maintenance works, and what a rollout could look like in Berlin. Does that match what you're hoping to cover today?",
  },
  {
    timestamp: "00:36",
    speaker: "Caller",
    role: "caller",
    message:
      "Yes, and I'll also need something I can send to our COO later today — ideally a short deck with numbers and a few scenarios.",
  },
  {
    timestamp: "01:02",
    speaker: "Agent · D. Chen",
    role: "agent",
    message:
      "Perfect. I'll make sure you leave this call with a clear pilot proposal and a deck we can email right after. Before we dive in, how many vehicles are you planning for the first phase?",
  },
  {
    timestamp: "01:26",
    speaker: "Caller",
    role: "caller",
    message:
      "We're thinking 30 to start, focused on the inner ring, but if adoption looks good we'd",
  },
];

export function Transcript() {
  return (
    <div className="mx-auto">
      {/* Header */}
      <div className="mb-6 flex flex-col lg:flex-row lg:items-center gap-3 md:gap-10 lg:gap-28">
        <div className="flex items-center gap-3">
          <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
            <CgFileDocument className="h-6 w-6 text-primary" />
          </div>
          <div className="shrink">
            <h1 className="text-xl font-semibold text-text-primary">
              Transcript
            </h1>
            <p className="text-xs md:text-[15px] text-text-gray font-medium">
              Full, time-stamped conversation with speaker labels.
            </p>
          </div>
        </div>
        <Badge className={"text-xs py-1.5 px-3 w-fit"}>Search & export</Badge>
      </div>

      {/* Search and Export Bar */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Searchbox
          placeholder="Search transcript by keyword or phrase"
          containerClassName={"w-[350px] lg:w-sm"}
        />
        <button className="flex items-center gap-2 rounded-full bg-bg-gray px-4 py-2.5 text-sm font-medium text-gray-700 cursor-pointer">
          <TbDownload className="h-4 w-4" />
          Export .txt
        </button>
        <button className="flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white cursor-pointer">
          <CgFileDocument className="h-4 w-4" />
          Export PDF
        </button>
      </div>

      {/* Transcript Messages */}
      <div className="rounded-2xl border border-secondary p-4 lg:p-6 bg-bg-gray">
        <div className="">
          {transcriptMessages.map((msg, index) => (
            <div
              key={index}
              className="flex gap-4 odd:bg-white px-4 lg:px-10 py-3 rounded-lg lg:rounded-full"
            >
              <div className="w-16 flex-shrink-0 pt-1 hidden lg:block">
                <span className="text-sm font-medium text-text-gray">
                  {msg.timestamp}
                </span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between">
                  <div
                    className={`text-sm font-medium ${
                      msg.role === "caller"
                        ? "text-emerald-600"
                        : "text-primary"
                    }`}
                  >
                    {msg.speaker}
                  </div>
                  <span className="text-sm lg:hidden font-medium text-text-gray">
                    {msg.timestamp}
                  </span>
                </div>
                <div className="text-xs lg:text-sm leading-relaxed text-text-primary font-medium">
                  {msg.message}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-1/2 flex flex-col gap-3 md:flex-row text-center md:text-left justify-between text-xs font-medium mt-8">
        <p className="text-text-gray ">
          Transcript generated automatically · Edit in-place to correct <br />{" "}
          names or details.
        </p>
        <p className="text-primary">Open full transcript view</p>
      </div>
    </div>
  );
}
