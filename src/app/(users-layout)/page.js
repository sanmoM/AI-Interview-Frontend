"use client";

import Application from "@/components/home/application";
import Assessments from "@/components/home/Assessments";
import Contracts from "@/components/home/contracts";
import SavedJobs from "@/components/home/saved-jobs";
import { Transcript } from "@/components/home/transcript";
import Tabs from "@/components/shared/tabs";
import Wrapper from "@/components/shared/wrapper";
import Button from "@/components/ui/buttons/button";
import { useState } from "react";
import { TfiHelpAlt } from "react-icons/tfi";
import { VscSettings } from "react-icons/vsc";

const tabs = [
  { label: "Contracts", value: "contracts" },
  { label: "Transcript", value: "transcript" },
  { label: "Applications", value: "applications" },
  { label: "Assessments", value: "assessments" },
  { label: "Saved", value: "saved" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("contracts");
  return (
    <Wrapper className="h-full flex flex-col">
      {/* Header */}
      <div className="py-4 flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">
            Welcome back!
          </h1>
          <p className="text-text-gray mt-1">
            Continue where you left off with your contracts and offers.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-text-gray transition-colors">
            <TfiHelpAlt className="w-5 h-5" />
            <span>Support</span>
          </button>
          <button className="flex items-center gap-2 text-text-gray transition-colors">
            <VscSettings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>

      <div className="py-2 lg:py-8 flex-1 flex flex-col">
        {/* Important Tasks Section */}
        <section className="mb-4 lg:mb-8">
          <h2 className="text-lg font-medium text-text-primary mb-4">
            Important Tasks (2)
          </h2>

          {/* Task Card */}
          <div className="bg-bg-gray border border-secondary rounded-2xl p-6 w-fit">
            <h3 className="text-lg font-medium mb-2 text-text-primary">
              Complete Your Profile
            </h3>
            <p className="text-sm md:text-base text-text-gray mb-4">
              Completed profiles are more likely to be discovered and hired by
              companies.
            </p>
            <Button
              className={"w-fit text-xs md:text-sm lg:text-sm 2xl:text-sm px-6"}
            >
              Complete now
            </Button>
          </div>
        </section>

        {/* Tabs Navigation */}
        <nav className="border-b border-secondary mb-4 lg:mb-8 w-full overflow-x-auto scrollbar-hide">
          {/* <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                className={cn(
                  "py-3 text-text-gray text-sm md:text-base font-medium cursor-pointer transition-colors",
                  activeTab === tab.value
                    ? "text-primary border-b-2 border-primary"
                    : "text-text-gray"
                )}
                onClick={() => setActiveTab(tab.value)}
              >
                {console.log(activeTab === tab.value)}
                {tab.label}
              </button>
            ))}
          </div> */}
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </nav>

        <div className="flex-1">
          {activeTab === "contracts" && <Contracts />}
          {activeTab === "transcript" && <Transcript />}
          {activeTab === "applications" && <Application />}
          {activeTab === "assessments" && <Assessments />}
          {activeTab === "saved" && <SavedJobs />}
        </div>
      </div>
    </Wrapper>
  );
}
