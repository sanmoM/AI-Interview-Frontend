"use client";

import ExploreFilter from "@/components/explore/explore-filter";
import Jobs from "@/components/explore/jobs";
import Loader from "@/components/shared/loader";
import Pagination from "@/components/shared/pagination";
import Wrapper from "@/components/shared/wrapper/wrapper";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";

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
  const [ventures, setVentures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredVentures, setFilteredVentures] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    const fetchVentures = async () => {
      setLoading(true);
      const res = await axios.get("/all-venture");
      setVentures(res?.data?.allVentures);
      setFilteredVentures(res?.data?.allVentures);
      setLoading(false);
    };
    fetchVentures();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      return setFilteredVentures(ventures);
    }
    const filteredVentures = ventures.filter((venture) => {
      return venture.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredVentures(filteredVentures);
  }, [searchQuery]);

  return (
    <Wrapper className="flex flex-col">
      {loading ? (
        <Loader />
      ) : (
        <>
          <ExploreFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Jobs ventures={filteredVentures} />
          <Pagination />
        </>
      )}
    </Wrapper>
  );
}
