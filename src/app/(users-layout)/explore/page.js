"use client";

import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

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

  const totalPages = 17;
  // const currentPage = page;
  const siblingCount = 1;

  const getPaginationRange = () => {
    const totalNumbers = siblingCount * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;

    const range = [];

    if (!showLeftDots && showRightDots) {
      for (let i = 1; i <= 5; i++) range.push(i);
      range.push("...");
      range.push(totalPages);
    } else if (showLeftDots && !showRightDots) {
      range.push(1);
      range.push("...");
      for (let i = totalPages - 4; i <= totalPages; i++) range.push(i);
    } else {
      range.push(1);
      range.push("...");
      for (let i = leftSibling; i <= rightSibling; i++) range.push(i);
      range.push("...");
      range.push(totalPages);
    }

    return range;
  };

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
    <div className="mx-auto h-full overflow-y-auto  flex flex-col">
      <div className="h-fit">
        <h1 className="mb-4 md:mb-6 lg:mb-8 text-2xl md:text-3xl font-bold text-text-primary">
          Explore opportunities
        </h1>

        {/* Search Bar and Filters */}
        <div className="mb-6 md:mb-8 flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full md:w-auto">
            <IoSearchOutline className="absolute left-4 top-1/2 w-5 h-5 md:h-6 md:w-6 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Type to search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-secondary py-2.5 lg:py-3 pl-10 md:pl-12 pr-4  placeholder:font-medium placeholder:text-text-gray focus:border-gray-400 focus:outline-none text-sm md:text-base"
            />
          </div>

          <div className="flex items-center w-full md:w-auto gap-4 px-2 lg:px-0 text-sm md:text-base lg:text-lg">
            <span className="text-text-gray font-medium">Show</span>

            <div className="grid grid-cols-2 items-center  border p-1 border-secondary rounded-full">
              <button
                onClick={() => setActiveFilter("all-roles")}
                className={`rounded-full px-4 cursor-pointer py-1 font-medium transition-colors ${
                  activeFilter === "all-roles"
                    ? "bg-secondary text-primary"
                    : "text-text-gray"
                }`}
              >
                All roles
              </button>

              <button
                onClick={() => setActiveFilter("saved")}
                className={`rounded-full px-4 cursor-pointer py-1 font-medium transition-colors ${
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
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 2xl:grid-cols-3">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="rounded-xl md:rounded-3xl border border-secondary bg-white p-4 md:p-6 transition-shadow hover:shadow-md shadow-secondary"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-base md:text-xl lg:text-[22px] font-bold text-gray-900">
                {opportunity.title}
              </h3>
              <span
                className={`ml-2 text-[10px] md:text-sm lg:text-base whitespace-nowrap rounded-full px-3 py-1 font-medium ${getStatusStyles(
                  opportunity.status
                )}`}
              >
                {opportunity.status}
              </span>
            </div>

            <p className="mb-6 leading-relaxed text-text-gray text-sm md:text-base lg:text-xl">
              {opportunity.description}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] md:text-sm text-gray-500">
              {Object.values(opportunity.metadata).map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {/* <div className="flex items-center justify-center gap-2 flex-1 py-10">
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
      </div> */}

      <div className="flex flex-1 items-center justify-center gap-1 sm:gap-2 py-8">


        {/* Pages */}
        {getPaginationRange().map((item, index) =>
          item === "..." ? (
            <span
              key={index}
              className="hidden sm:flex h-9 w-9 items-center justify-center text-gray-400"
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              onClick={() => setCurrentPage(item)}
              className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full border text-sm font-medium transition
          ${
            currentPage === item
              ? "bg-primary text-white border-primary"
              : "border-secondary text-text-gray hover:bg-gray-100"
          }`}
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>
  );
}
