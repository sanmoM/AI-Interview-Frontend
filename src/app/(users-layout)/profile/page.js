"use client";

import Availability from "@/components/profile/availability";
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
    <Wrapper>
      <div className="">
        {/* Header */}
        <h1 className="mb-2 md:mb-4 text-3xl font-bold text-text-primary">
          Profile
        </h1>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "resume" && <Resume />}
        {activeTab === "availability" && <Availability />}
        {activeTab === "workPreferences" && <WorkPreferences />}
      </div>
    </Wrapper>
  );
}
