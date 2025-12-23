"use client";

import Pagination from "@/components/shared/pagination";
import StickyHeader from "@/components/shared/sticky-header";
import VentureCard from "@/components/shared/venture-card";
import Wrapper from "@/components/shared/wrapper";
import Avatar from "@/components/ui/avatar";
import Button from "@/components/ui/buttons/button";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import Searchbox from "@/components/ui/inputs/searchbox";
import FilterTabs from "@/components/ventures/filter";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const ventures = [
  {
    id: 1,
    title: "Aurora Mobility Labs",
    status: "ACTIVE",
    description:
      "Urban e-mobility platform piloting with three OEM partners across EU and LATAM.",
    metadata: {
      interviews: "12 interviews",
      stage: "Stage: Fit testing",
      owner: "Owner: D. Chen",
    },
  },
  {
    id: 2,
    title: "Northline Retail Cloud",
    status: "CLIENT",
    description:
      "White-labeled decision engine powering merchandising experiments for Tier-1 retailers.",
    metadata: {
      interviews: "8 interviews",
      program: "Program: Q2 Enterprise",
      client: "Client: Northline Group",
    },
  },
  {
    id: 3,
    title: "Signal Foundry",
    status: "DEMO",
    description:
      "Internal sandbox for testing new pricing and packaging narratives across segments.",
    metadata: {
      interviews: "5 interviews",
      cluster: "Cluster: PLG SaaS",
      owner: "Owner: A. Singh",
    },
  },
  {
    id: 4,
    title: "Atlas Health OS",
    status: "ACTIVE",
    description:
      "Modular care navigation stack focused on employer-sponsored health plans in the US.",
    metadata: {
      interviews: "16 interviews",
      cohort: "Cohort: Healthcare",
      risk: "Risk: Med-high",
    },
  },
  {
    id: 5,
    title: "Helio Insights Studio",
    status: "TEMPLATE",
    description:
      "Reusable interview script and asset library for new vertical discovery sprints.",
    metadata: {
      interviews: "0 interviews",
      type: "Template pack",
      updated: "Last updated 3d ago",
    },
  },
  {
    id: 6,
    title: "Bluewave Commerce OS",
    status: "CLIENT",
    description:
      "Client-branded experimentation hub for cross-border e-commerce and payments.",
    metadata: {
      interviews: "9 interviews",
      region: "Region: APAC",
      client: "Client: Bluewave Holdings",
    },
  },
];

const filters = [
  { label: "All brands", count: 182 },
  { label: "Live interviews", count: 36 },
  { label: "Demo / sandbox", count: 24 },
  { label: "Client white label", count: 11 },
  { label: "Internal ventures", count: 9 },
];

export default function VenturesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Wrapper className="shadow-[#00000025] grow min-w-0 !pt-0">
      {/* Header */}
      <StickyHeader>
        <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-10">
          <div className="mb-3">
            <SectionHeading className={"mb-2 lg:mb-4"}>
              Venture Profiles
            </SectionHeading>
            <SubHeading className="2xl:text-lg">
              Curate, compare, and operationalize live venture pipelines in one
              place. Filter by interview stage, client program, or internal
              sandbox.
            </SubHeading>
          </div>
          <div className="flex flex-col lg:flex-row xl:flex-col items-center gap-4">
            <Button className="flex items-center justify-center gap-2 px-4 !py-2.5 2xl:py-1.5 lg:w-fit ml-auto mb-1 lg:mb-0">
              <FiPlus className="w-5 h-5" />
              New Venture
            </Button>

            {/* Search bar */}
            <div className="flex items-center gap-6 w-full lg:w-auto flex-1 xl:flex-none">
              <Searchbox
                placeholder="Search ventures, tags, interviews"
                containerClassName="flex-1 min-w-[250px]"
              />
              <Avatar size="lg" />
            </div>
          </div>
        </div>
      </StickyHeader>

      {/* Filter tabs and sync info */}
      <div className=" bg-white mt-4 lg:mt-0 w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-4 w-full">
          <FilterTabs filters={filters} />
          <p className="text-sm md:text-[15px] text-text-gray self-end lg:self-auto text-nowrap">
            Synced 12 min ago
          </p>
        </div>
      </div>

      {/* Venture cards grid */}
      <div className="mt-4 md:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 mb-4 lg:mb-10">
          {ventures.map((venture) => (
            <VentureCard key={venture.id} item={venture} />
          ))}
        </div>

        <Pagination />
      </div>
    </Wrapper>
  );
}
