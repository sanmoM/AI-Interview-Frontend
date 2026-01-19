"use client";

import CodeSession from "@/components/interview/code-session";
import ResumeUpload from "@/components/interview/resume-upload";
import BorderButton from "@/components/ui/buttons/border-button";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";

export default function ResumeUploadPage() {
  const [activeTab, setActiveTab] = useState("resume");

  const router = useRouter();

  return (
    <div className="lg:h-full flex flex-col">
      <div className="flex flex-col lg:flex-row justify-between items-center sticky top-0 bg-bg-gray py-4 lg:py-0">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 w-full lg:w-auto px-4 lg:items-center">
          <button
            onClick={() =>
              setActiveTab(
                activeTab === "code-session" ? "resume" : router.back()
              )
            }
            className="flex cursor-pointer items-center gap-1 text-gray-600 hover:text-gray-900 text-lg lg:text-base"
          >
            <GoChevronLeft className="w-6 h-6" />
            Go back
          </button>

          <p className="text-text-gray text-sm">
            Senior/Staff Code Review Experts Application
          </p>
        </div>
        <div>
          <nav className=" lg:pl-8 py-2 lg:py-4">
            <div className="flex items-center justify-end gap-6 lg:gap-3 text-sm">
              <a href="#" className="text-text-gray">
                View listing
              </a>
              <a
                href="#"
                className="text-text-gray bg-white px-4 py-1.5 rounded-full"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-text-gray bg-white px-4 py-1.5 rounded-full"
              >
                Contact support
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 flex-1 py-6 lg:h-[calc(100%-200px)] mx-4 lg:m-0">
        {/* Left Sidebar */}
        <aside className="lg:w-80 lg:h-full">
          <div className="mb-0 lg:mb-6 rounded-2xl border-2 border-secondary bg-white p-6 h-full">
            <h1 className="mb-2 text-lg font-bold text-gray-900">
              Senior/Staff Code Review Experts
            </h1>
            <p className="mb-4 text-sm text-gray-500">0 of 2 steps done</p>

            <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full bg-cyan-400 transition-all"
                style={{
                  width: activeTab === "resume" ? "0px" : "50%",
                }}
              />
            </div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
              Application steps
            </p>

            <div className="space-y-2">
              <div
                className={cn(
                  "flex items-center gap-3 cursor-pointer rounded-lg  px-4 py-3",
                  activeTab === "resume" && "bg-secondary"
                )}
                // onClick={() => setActiveTab("resume")}
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary  text-sm font-semibold text-primary">
                  1
                </div>
                <span className="text-sm font-medium text-primary">
                  Upload Resume
                </span>
              </div>
              <div
                className={cn(
                  "flex items-center gap-3 cursor-pointer rounded-lg px-4 py-3",
                  activeTab === "code-session" && " bg-secondary"
                )}
                // onClick={() => setActiveTab("code-session")}
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary  text-sm font-semibold text-primary">
                  2
                </div>
                <span className="text-sm font-medium text-primary">
                  Code Review Session
                </span>
              </div>
            </div>
          </div>
        </aside>

        {activeTab === "resume" && (
          <ResumeUpload handleNext={() => setActiveTab("code-session")} />
        )}
        {activeTab === "code-session" && (
          <CodeSession
            handleNext={() => {}}
            handleBack={() => setActiveTab("resume")}
          />
        )}
      </div>

      {/* Bottom Next button */}
      {activeTab === "code-session" && (
        <div className="lg:mt-2 flex justify-end  pb-6 mx-4 lg:m-0">
          <BorderButton className={"w-fit px-6 2xl:py-1.5 2xl:text-sm"}>
            Next
          </BorderButton>
        </div>
      )}
    </div>
  );
}
