"use client";

import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

const opportunities = [
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

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all-roles");
  const [currentPage, setCurrentPage] = useState(2);

  const getStatusStyles = (status) => {
    switch (status) {
      case "ACTIVE":
        return "text-green-400";
      case "CLIENT":
      case "DEMO":
        return "bg-secondary text-primary";
      case "TEMPLATE":
        return "text-text-gray";
      default:
        return "text-text-gray";
    }
  };

  return (
    <div className="mx-auto h-full overflow-y-auto bg-white p-8 rounded-4xl shadow-lg shadow-secondary flex flex-col">
      <div className="h-fit">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Explore opportunities
        </h1>

        {/* Search Bar and Filters */}
        <div className="mb-8 flex items-center gap-4">
          <div className="relative flex-1">
            <IoSearchOutline className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Type to search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-secondary py-2.5 pl-12 pr-4  placeholder:font-medium placeholder:text-text-gray focus:border-gray-400 focus:outline-none"
            />
          </div>

          <span className="text-text-gray font-medium">Show</span>

          <div className="grid grid-cols-2 items-center  border p-1 border-secondary rounded-full">
            <button
              onClick={() => setActiveFilter("all-roles")}
              className={`rounded-full px-4 py-1 font-medium transition-colors ${
                activeFilter === "all-roles"
                  ? "bg-secondary text-primary"
                  : "text-text-gray"
              }`}
            >
              All roles
            </button>

            <button
              onClick={() => setActiveFilter("saved")}
              className={`rounded-full px-4 py-1 font-medium transition-colors ${
                activeFilter === "saved"
                  ? "bg-secondary text-primary"
                  : " text-text-gray"
              }`}
            >
              Saved
            </button>
          </div>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="rounded-3xl border border-secondary bg-white p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                {opportunity.title}
              </h3>
              <span
                className={`ml-2 whitespace-nowrap rounded-full px-3 py-1 font-medium ${getStatusStyles(
                  opportunity.status
                )}`}
              >
                {opportunity.status}
              </span>
            </div>

            <p className="mb-6 leading-relaxed text-text-gray text-lg">
              {opportunity.description}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
              {Object.values(opportunity.metadata).map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 flex-1 py-10">
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors font-medium ${
              currentPage === page
                ? page === 2
                  ? "bg-primary text-white"
                  : "border-secondary text-text-gray"
                : "border-secondary text-text-gray hover:border-gray-400"
            }`}
          >
            {page}
          </button>
        ))}

        <span className="flex h-10 w-10 items-center justify-center text-text-gray border border-secondary rounded-full">
          ...
        </span>

        {[16, 17].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className="flex h-10 w-10 items-center justify-center rounded-full border text-text-gray transition-colors border-secondary"
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
