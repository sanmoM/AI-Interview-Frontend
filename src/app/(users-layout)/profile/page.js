"use client";

import Account from "@/components/profile/account";
import Availability from "@/components/profile/availability";
import Communications from "@/components/profile/communications";
import Resume from "@/components/profile/resume";
import WorkPreferences from "@/components/profile/work-preferences";
import Tabs from "@/components/shared/tabs";
import Wrapper from "@/components/shared/wrapper";
import { useState } from "react";

const tabs = [
  { label: "Resume", value: "resume" },
  { label: "Availability", value: "availability" },
  { label: "Work Preferences", value: "workPreferences" },
  { label: "Communications", value: "communications" },
  { label: "Account", value: "account" },
];

export default function page() {
  const [activeTab, setActiveTab] = useState("resume");
  return (
    <Wrapper className={"!pt-0"}>
      <div className="flex flex-col">
        <div className="sticky top-0 bg-white z-[4] pt-4 lg:pt-6 pb-2">
          {/* Header */}
          <h1 className="mb-2 md:mb-4 text-3xl font-bold text-text-primary">
            Profile
          </h1>
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide ">
          {activeTab === "resume" && <Resume />}
          {activeTab === "availability" && <Availability />}
          {activeTab === "workPreferences" && <WorkPreferences />}
          {activeTab === "communications" && <Communications />}
          {activeTab === "account" && <Account />}
        </div>
      </div>
    </Wrapper>
  );
}
