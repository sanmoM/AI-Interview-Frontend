"use client";

import CallCard from "@/components/call/call-card";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import Searchbox from "@/components/ui/inputs/searchbox";
import SelectBox from "@/components/ui/inputs/select-box";
import useAuthAxios from "@/hooks/useAuthAxios";
import { getDuration } from "@/utils/call";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

const getFilteredCalls = (calls, filter) => {
  return calls
    .filter((call) => {
      const createdDate = new Date(call.createdAt).toISOString().split("T")[0]; // YYYY-MM-DD

      const today = new Date();
      const todayStr = today.toISOString().split("T")[0];
      console.log(createdDate, todayStr);
      // Today only
      if (filter.days === -1) {
        return createdDate === todayStr;
      }

      // Start date string
      const start = new Date();
      start.setDate(today.getDate() - filter.days);
      const startStr = start.toISOString().split("T")[0];

      return createdDate >= startStr && createdDate <= todayStr;
    })
    .filter((call) => {
      const regex = new RegExp(filter.search, "i");
      return regex.test(call.customer.number);
    });
};

export default function CallsPage() {
  const [calls, setCalls] = useState([]);
  const [filter, setFilter] = useState({
    days: 15,
    status: "all",
    assignee: "all",
    search: "",
  });

  const [filterData, setFilterData] = useState([]);
  const changeFilter = (key, value) => {
    setFilter((prev) => ({ ...prev, [key]: value }));
  };
  const axios = useAuthAxios();

  useEffect(() => {
    axios.get("/vapi/calls").then((res) => {
      setCalls(res.data);
    });
  }, []);

  //   success rate logic
  // const successCallCount = calls.reduce((acc, call) => {
  //   if (call?.analysis?.successEvaluation === "true") {
  //     return acc + 1;
  //   }
  //   return acc;
  // }, 0);

  // const successRate = Math.round((successCallCount / calls.length) * 100);
  const successRate = 100;

  //   duration logic
  const totalDuration =
    calls.reduce((acc, call) => {
      return acc + getDuration(call?.createdAt, call?.endedAt);
    }, 0) / calls.length;

  const minutes = Math.floor(totalDuration / 60000);
  const seconds = Math.floor((totalDuration % 60000) / 1000);

  const STATS_DATA = [
    {
      label: "Total calls",
      value: calls.length ?? 0,
      change: "+18% vs yesterday",
      isPositive: true,
    },
    {
      label: "Completion rate",
      value: `${isNaN(successRate) ? 0 : successRate}%`,
      change: "+6 pts",
      isPositive: true,
    },
    {
      label: "Avg. duration",
      value: `${isNaN(minutes) ? 0 : minutes}m ${isNaN(seconds) ? 0 : seconds}s`,
      change: "Last 24 hours",
      isNeutral: true,
    },
  ];

  useEffect(() => {
    setFilterData(getFilteredCalls(calls, filter));
  }, [filter, calls]);

  // console.log(calls);
  return (
    <SecondaryWrapper>
      {/* <p className="text-text-gray text-xs md:text-sm font-medium mb-4">
        Aurora Mobility Labs · <span className="text-text-primary">Calls</span>
      </p> */}
      {/* Header */}
      <div className="flex flex-col 2xl:flex-row justify-between md:items-start mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-secondary shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-primary ">
              AM
            </span>
            <div>
              <SectionHeading className="!mb-0">Call timeline</SectionHeading>
              <SubHeading
                className={"text-gray-500 font-normal hidden lg:block"}
              >
                A focused, visual stream of every call for this venture. Scan
                patterns at a glance and open individual records in one click.
              </SubHeading>
            </div>
          </div>
          <SubHeading
            className={"max-w-4xl text-gray-500 font-normal lg:hidden"}
          >
            A focused, visual stream of every call for this venture. Scan
            patterns at a glance and open individual records in one click.
          </SubHeading>
          {/* <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-[#D1FADF] text-[#027A48] text-xs font-bold px-3 py-1 rounded-full">
              Voice bot live
            </span>
            <span className="bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              {calls.length} calls
            </span>
          </div> */}
        </div>
        {/* <div className="flex gap-2 items-center w-full 2xl:w-auto mt-2">
          <Searchbox
            placeholder="Search calls by phone, tag, or note"
            containerClassName={"w-full 2xl:w-[320px]"}
            size="md"
          />
          <Button size="md" className="px-6 w-fit text-nowrap shadow-md">
            Export logs
          </Button>
        </div> */}
      </div>

      {/* Main Content Card */}
      <InnerWrapper>
        {/* Card Header */}
        <div className="flex  flex-col md:flex-row justify-between items-start mb-4 lg:mb-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
              <BsTelephone className="w-5 h-5 " />
            </div>
            <div className="mt-1">
              <h2 className="text-lg font-medium text-text-primary leading-tight">
                activity
              </h2>
              <p className="text-text-gray text-sm font-medium">
                Live view of calls across bots and agents.
              </p>
              <span className="block md:hidden w-fit bg-secondary text-primary text-[11px] font-bold px-3 py-1 rounded-full shadow-sm h-fit mt-2">
                Showing 1–{filterData?.length} of {calls.length} calls
              </span>
            </div>
          </div>
          {/* <span className="hidden md:block bg-secondary text-primary text-[11px] font-bold px-3 py-1 rounded-full shadow-sm h-fit mt-2">
            Showing 1–{filterData?.length} of {calls.length} calls
          </span> */}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-3 2xl:gap-6 mb-6 2xl:mb-10">
          {STATS_DATA.map((stat, index) => (
            <div
              key={index}
              className="border border-secondary rounded-full px-6 py-1.5 2xl:py-3.5 flex justify-between items-center bg-white"
            >
              <div className="flex flex-col">
                <span className="text-text-gray text-sm font-medium">
                  {stat.label}
                </span>
                <span className="text-xl font-medium text-text-primary mt-0.5">
                  {stat.value}
                </span>
              </div>
              {/* <span
                className={cn(
                  "text-sm font-medium whitespace-nowrap",
                  stat.isPositive
                    ? "text-green-500"
                    : stat.isNeutral
                      ? "text-gray-400"
                      : "text-red-500",
                )}
              >
                {stat.change}
              </span> */}
            </div>
          ))}
        </div>

        {/* Filters Row */}
        <div className="flex flex-col 2xl:flex-row justify-between items-center gap-4 mb-6 lg:mb-6">
          <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
            <SelectBox
              options={[
                { label: "Today", value: -1 },
                { label: "Last 7 days", value: 7 },
                { label: "Last 15 days", value: 15 },
              ]}
              value={filter.days}
              onChange={(e) => changeFilter("days", e.target.value)}
              size="sm"
              containerClassName={"w-[160px]"}
            />
            {/* <SelectBox
              options={[
                { label: "All", value: "all" },
                { label: "Completed", value: "completed" },
                { label: "Missed", value: "missed" },
                { label: "In progress", value: "in_progress" },
              ]}
              value={filter.status}
              onChange={(e) => changeFilter("status", e.target.value)}
              size="sm"
              containerClassName={"w-[160px]"}
            />
            <SelectBox
              options={[
                { label: "All", value: "all" },
                { label: "Unassigned", value: "unassigned" },
                { label: "Assigned", value: "assigned" },
              ]}
              value={filter.assignee}
              onChange={(e) => changeFilter("assignee", e.target.value)}
              size="sm"
              containerClassName={"w-[160px]"}
            /> */}
          </div>
          <div className="flex gap-2.5 w-full 2xl:w-auto">
            <div className="relative w-full 2xl:w-auto">
              <Searchbox
                placeholder="Search by phone number"
                containerClassName={"w-full lg:min-w-[285px]"}
                size="md"
                value={filter.search}
                setSearchQuery={(val) => changeFilter("search", val)}
              />
            </div>
            {/* <button className="flex items-center gap-2 rounded-full px-5 py-2 text-xs lg:text-sm font-semibold text-gray-500 border border-secondary bg-white transition-colors whitespace-nowrap">
              <FiFilter className="w-5 h-5" /> Filter
            </button> */}
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-3 w-full overflow-x-auto grid grid-cols-1">
          {filterData?.length > 0 ? (
            filterData.map((call) => (
              <Link href={`/call-details/${call.id}`} key={call.id}>
                <CallCard call={call} />
              </Link>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 text-gray-400 text-sm font-medium min-h-[300px]">
              <IoSearchOutline className="w-7 h-7" />
              <p>No results found</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-4 md:mt-6 px-2">
          <p className="text-gray-400 text-xs md:text-sm font-medium">
            Showing 1–{filterData?.length} of {calls.length} calls
          </p>
          <Pagination
            size="xs"
            previous={
              <button className="text-text-gray text-xs md:text-base px-3 py-1 hover:text-primary">
                Prev
              </button>
            }
            next={
              <button className="text-text-gray text-xs md:text-base px-3 py-1 hover:text-primary">
                Next
              </button>
            }
            containerClassName={"flex-0"}
          />
        </div> */}
      </InnerWrapper>

      {/* Bottom Floating Bar */}
      {/* <div className="flex flex-col lg:flex-row justify-between items-center mt-6 lg:mt-12 gap-6 px-1">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <span className="bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
            Calls workspace
          </span>
          <p className="text-gray-500 text-xs font-medium text-center md:text-left">
            A unique, timeline-style view of every call, designed for fast
            scanning and deep dives.
          </p>
        </div>
        <div className="flex flex-row gap-2 md:gap-3">
          <BorderButton
            className={"!py-2 lg:!py-2.5 px-3 lg:px-5 !text-xs lg:!text-sm"}
          >
            Export current view
          </BorderButton>
          <Button
            className={"!py-2 lg:!py-2.5 px-3 lg:px-5 !text-xs lg:!text-sm"}
          >
            Save filters as default
          </Button>
        </div>
      </div> */}
    </SecondaryWrapper>
  );
}
