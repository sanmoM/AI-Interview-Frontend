"use client";

import Pagination from "@/components/shared/pagination";
import StickyHeader from "@/components/shared/sticky-header";
import VentureCard from "@/components/shared/venture-card";
import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import Avatar from "@/components/ui/avatar";
import Button from "@/components/ui/buttons/button";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import Searchbox from "@/components/ui/inputs/searchbox";
import FilterTabs from "@/components/ventures/single-venture/filter";
import useAuthAxios from "@/hooks/useAuthAxios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";

const filters = [
  { label: "All brands", count: 182 },
  { label: "Live interviews", count: 36 },
  { label: "Demo / sandbox", count: 24 },
  { label: "Client white label", count: 11 },
  { label: "Internal ventures", count: 9 },
];

export default function VenturesPage() {
  const [ventures, setVentures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const axios = useAuthAxios();

  useEffect(() => {
    async function fetchVentures() {
      const res = await axios.get("/super/ventures", {
        params: {
          page: currentPage,
        },
      });
      setVentures(res?.data?.data);
      setLastPage(res?.data?.lastPage);
      setCurrentPage(res?.data?.currentPage);
    }
    fetchVentures();
  }, [currentPage]);

  return (
    <SecondaryWrapper className="grow min-w-0 !pt-0">
      {/* Header */}
      <StickyHeader>
        <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-10">
          <div className="mb-3 max-w-5xl">
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
            <Link href="/ventures/create-venture" className="block lg:w-fit ml-auto w-full">
              <Button className="flex items-center justify-center gap-2 px-4 !py-2.5 2xl:py-1.5 mb-1 lg:mb-0">
                <FiPlus className="w-5 h-5" />
                New Venture
              </Button>
            </Link>

            {/* Search bar */}
            <div className="flex items-center gap-6 w-full lg:w-auto flex-1 xl:flex-none">
              <Searchbox
                placeholder="Search ventures, tags, interviews"
                containerClassName="flex-1 md:min-w-[250px]"
              />
              <Avatar size="lg" className={""} />
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
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-6 mb-4 md:mb-8 lg:mb-10">
          {ventures.map((venture) => (
            <Link className="block" href={`/ventures/${venture.id}`}>
              <VentureCard
                key={venture.id}
                item={venture}
                className={"h-full"}
              />
            </Link>
          ))}
        </div>

        <Pagination
          size="sm"
          containerClassName={"2xl:mt-20"}
          lastPage={lastPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </SecondaryWrapper>
  );
}
