"use client";

import NoData from "@/components/shared/no-data";
import Pagination from "@/components/shared/pagination";
import StickyHeader from "@/components/shared/sticky-header";
import VentureCard from "@/components/shared/venture-card";
import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import Button from "@/components/ui/buttons/button";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import Searchbox from "@/components/ui/inputs/searchbox";
import useAuthAxios from "@/hooks/useAuthAxios";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { FiPlus } from "react-icons/fi";

export default function VenturesPage() {
  const [ventures, setVentures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const axios = useAuthAxios();

  // ✅ Fetch data
  useEffect(() => {
    async function fetchVentures() {
      const res = await axios.get("/super/ventures", {
        params: { page: currentPage },
      });

      setVentures(res?.data?.data || []);
      setLastPage(res?.data?.lastPage || 0);
      setCurrentPage(res?.data?.currentPage || 1);
    }

    fetchVentures();
  }, [currentPage]);

  // ✅ Derived state (NO useEffect needed)
  const filteredVentures = useMemo(() => {
    if (!searchQuery) return ventures;

    return ventures.filter((venture) =>
      venture.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, ventures]);

  return (
    <SecondaryWrapper className="grow min-w-0 !pt-0 flex flex-col">
      <StickyHeader>
        <div className="flex flex-col xl:flex-row justify-between gap-4 xl:gap-10">
          <div className="mb-3 max-w-5xl">
            <SectionHeading className={"mb-2 lg:mb-4"}>
              All Venture Profiles
            </SectionHeading>
            <SubHeading className="2xl:text-lg">
              Curate, compare, and operationalize live venture pipelines in one
              place.
            </SubHeading>
          </div>

          <div className="flex flex-col lg:flex-row xl:flex-col items-center gap-4">
            <Link
              href="/ventures/create-venture"
              className="block lg:w-fit ml-auto w-full"
            >
              <Button className="flex items-center justify-center gap-2 px-4 !py-2.5">
                <FiPlus className="w-5 h-5" />
                New Venture
              </Button>
            </Link>

            <div className="flex items-center gap-6 w-full lg:w-auto flex-1 xl:flex-none">
              <Searchbox
                placeholder="Search ventures"
                containerClassName="flex-1 md:min-w-[250px]"
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
          </div>
        </div>
      </StickyHeader>

      <div className="h-full">
        {ventures.length > 0 ? (
          <>
            <div className="mt-4 md:mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 lg:gap-6 mb-4 md:mb-8 lg:mb-10">
              {filteredVentures.map((venture) => (
                <Link key={venture.id} href={`/ventures/${venture.id}`}>
                  <VentureCard
                    item={venture}
                    className={"h-full"}
                    hasButton={false}
                  />
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="h-full flex justify-center items-center w-full lg:-mt-28">
            <NoData />
          </div>
        )}

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
