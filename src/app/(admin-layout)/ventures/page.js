"use client";

import Wrapper from "@/components/shared/wrapper";
import Avatar from "@/components/ui/avatar";
import Searchbox from "@/components/ui/inputs/searchbox";
import FilterTabs from "@/components/ventures/filter";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";

const ventures = [
  {
    id: 1,
    title: "Aurora Mobility Labs",
    status: "ACTIVE",
    statusColor: "green",
    description:
      "Urban e-mobility platform piloting with three OEM partners across EU and LATAM.",
    metadata: ["12 interviews", "Stage: Fit testing", "Owner: D. Chen"],
  },
  {
    id: 2,
    title: "Northline Retail Cloud",
    status: "CLIENT",
    statusColor: "blue",
    description:
      "White-labeled decision engine powering merchandising experiments for Tier-1 retailers.",
    metadata: [
      "8 interviews",
      "Program: Q2 Enterprise",
      "Client: Northline Group",
    ],
  },
  {
    id: 3,
    title: "Signal Foundry",
    status: "DEMO",
    statusColor: "cyan",
    description:
      "Internal sandbox for testing new pricing and packaging narratives across segments.",
    metadata: ["5 interviews", "Cluster: PLG SaaS", "Owner: A. Singh"],
  },
  {
    id: 4,
    title: "Atlas Health OS",
    status: "ACTIVE",
    statusColor: "green",
    description:
      "Modular care navigation stack focused on employer-sponsored health plans in the US.",
    metadata: ["16 interviews", "Cohort: Healthcare", "Risk: Med-high"],
  },
  {
    id: 5,
    title: "Helio Insights Studio",
    status: "TEMPLATE",
    statusColor: "gray",
    description:
      "Reusable interview script and asset library for new vertical discovery sprints.",
    metadata: ["0 interviews", "Template pack", "Last updated 3d ago"],
  },
  {
    id: 6,
    title: "Bluewave Commerce OS",
    status: "CLIENT",
    statusColor: "blue",
    description:
      "Client-branded experimentation hub for cross-border e-commerce and payments.",
    metadata: ["9 interviews", "Region: APAC", "Client: Bluewave Holdings"],
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
    <Wrapper className="shadow-[#00000025] flex-1">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Venture Profiles
            </h1>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-800 transition-colors">
              <FiPlus className="w-5 h-5" />
              New Venture
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-6">
            Curate, compare, and operationalize live venture pipelines in one
            place. Filter by interview stage, client program, or internal
            sandbox.
          </p>

          {/* Search bar */}
          <div className="flex items-center gap-3">
            <Searchbox />
            <Avatar />
          </div>
        </div>
      </div>

      {/* Filter tabs and sync info */}
      <div className="border-b border-gray-200 bg-white">
        <div className="">
          <div className="flex items-center justify-between">
            <FilterTabs filters={filters} />
            <p className="text-xs text-gray-500">Synced 12 min ago</p>
          </div>
        </div>
      </div>

      {/* Venture cards grid */}
      <div className="mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* {ventures.map((venture) => (
            <VentureCard key={venture.id} venture={venture} />
          ))} */}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-sm font-semibold bg-blue-900 text-white rounded transition-colors">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
            3
          </button>
          <span className="text-gray-400 mx-1">...</span>
          <button className="w-8 h-8 flex items-center justify-center text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
            9
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
