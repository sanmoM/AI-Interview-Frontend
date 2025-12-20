"use client";

import Link from "next/link";

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

export default function Jobs() {
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
    <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 2xl:grid-cols-3">
      {opportunities.map((opportunity) => (
        <Link
          href={`/explore/${opportunity.id}`}
          key={opportunity.id}
          className="block rounded-xl md:rounded-3xl border border-secondary bg-white p-4 md:p-6 transition-shadow hover:shadow-md shadow-secondary"
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
        </Link>
      ))}
    </div>
  );
}
