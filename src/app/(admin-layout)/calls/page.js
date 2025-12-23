"use client";

import Wrapper from "@/components/shared/wrapper";
import BorderButton from "@/components/ui/buttons/border-button";
import Button from "@/components/ui/buttons/button";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import Searchbox from "@/components/ui/inputs/searchbox";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import Pagination from "@/components/shared/pagination";

const STATS_DATA = [
    {
        label: "Total calls",
        value: "132",
        change: "+18% vs yesterday",
        isPositive: true,
    },
    {
        label: "Completion rate",
        value: "82%",
        change: "+6 pts",
        isPositive: true,
    },
    {
        label: "Avg. duration",
        value: "07:24",
        change: "Last 24 hours",
        isNeutral: true,
    },
];

const CALLS_DATA = [
    {
        id: 1,
        initials: "AM",
        bgColor: "bg-[#87CEEB]/20",
        textColor: "text-[#304E77]",
        time: "Today · 14:12",
        phone: "+49 173 555 2019",
        location: "Berlin, DE",
        duration: "12:43",
        status: "Completed",
        assigned: "D. Chen",
        tags: ["Test drive", "High intent"],
        notes: "Wants pricing deck emailed.",
    },
    {
        id: 2,
        initials: "UN",
        bgColor: "bg-gray-100",
        textColor: "text-gray-600",
        time: "Today · 13:08",
        phone: "Unknown number",
        location: "São Paulo, BR",
        duration: "03:21",
        status: "Missed",
        assigned: "Unassigned",
        tags: ["After-hours"],
        notes: "Voicemail transcription pending.",
    },
    {
        id: 3,
        initials: "MS",
        bgColor: "bg-[#87CEEB]/20",
        textColor: "text-[#304E77]",
        time: "Today · 11:52",
        phone: "+34 612 889 441",
        location: "Madrid, ES",
        duration: "08:05",
        status: "Completed",
        assigned: "M. Silva",
        tags: ["Follow-up", "OEM partner"],
        notes: "Shared pilot performance summary.",
    },
    {
        id: 4,
        initials: "RB",
        bgColor: "bg-[#87CEEB]/20",
        textColor: "text-[#304E77]",
        time: "Yesterday · 18:14",
        phone: "Routing bot",
        location: "queue handoff",
        duration: "05:17",
        status: "In progress",
        assigned: "Routing bot",
        tags: ["Queue"],
        notes: "Waiting for agent pickup.",
    },
    {
        id: 5,
        initials: "DC",
        bgColor: "bg-[#87CEEB]/20",
        textColor: "text-[#304E77]",
        time: "Yesterday · 09:46",
        phone: "+1 (415) 555-0108",
        location: "San Francisco, US",
        duration: "16:49",
        status: "Completed",
        assigned: "D. Chen",
        tags: ["Renewal", "Strategic"],
        notes: "Agreed on Q4 expansion trial.",
    },
];

export default function CallsPage() {
    const [activeFilter, setActiveFilter] = useState("All calls");

    return (
        <Wrapper className="shadow-[#00000010] pb-20">
            {/* Header */}
            <div className="flex flex-col 2xl:flex-row justify-between md:items-start mb-6 gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="bg-secondary shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-primary ">
                            AM
                        </span>
                        <div>
                            <SectionHeading className="!mb-0">Call timeline</SectionHeading>
                            <SubHeading className={"max-w-4xl text-gray-500 font-normal hidden lg:block"}>
                                A focused, visual stream of every call for this venture. Scan patterns
                                at a glance and open individual records in one click.
                            </SubHeading>
                        </div>
                    </div>
                    <SubHeading className={"max-w-4xl text-gray-500 font-normal lg:hidden"}>
                        A focused, visual stream of every call for this venture. Scan patterns
                        at a glance and open individual records in one click.
                    </SubHeading>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <span className="bg-[#D1FADF] text-[#027A48] text-xs font-bold px-3 py-1 rounded-full">
                            Voice bot live
                        </span>
                        <span className="bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                            36 calls today
                        </span>
                        <span className="bg-bg-gray text-text-gray text-xs font-bold px-3 py-1 rounded-full">
                            Owner: D. Chen
                        </span>
                    </div>
                </div>
                <div className="flex gap-2 items-center w-full 2xl:w-auto mt-2">
                    <Searchbox
                        placeholder="Search calls by phone, tag, or note"
                        containerClassName={"w-full 2xl:w-[320px]"}
                        size="md"
                    />
                    <Button size="md" className="px-6 w-fit text-nowrap shadow-md">
                        Export logs
                    </Button>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-4xl border border-gray-100 shadow-lg p-6 md:p-8">
                {/* Card Header */}
                <div className="flex  flex-col md:flex-row justify-between items-start mb-4 lg:mb-8">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                            <BsTelephone className="w-5 h-5 " />
                        </div>
                        <div className="mt-1">
                            <h2 className="text-lg font-medium text-text-primary leading-tight">
                                Today&apos;s activity
                            </h2>
                            <p className="text-text-gray text-sm font-medium">
                                Live view of calls across bots and agents.
                            </p>
                            <span className="block md:hidden w-fit bg-secondary text-primary text-[11px] font-bold px-3 py-1 rounded-full shadow-sm h-fit mt-2">
                                Showing 1–25 of 132
                            </span>
                        </div>
                    </div>
                    <span className="hidden md:block bg-secondary text-primary text-[11px] font-bold px-3 py-1 rounded-full shadow-sm h-fit mt-2">
                        Showing 1–25 of 132
                    </span>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 2xl:grid-cols-3 gap-3 2xl:gap-6 mb-6 2xl:mb-10">
                    {STATS_DATA.map((stat, index) => (
                        <div
                            key={index}
                            className="border border-secondary rounded-full px-6 py-1.5 2xl:py-3.5 flex justify-between items-center bg-white"
                        >
                            <div className="flex flex-col">
                                <span className="text-text-gray text-sm font-medium">{stat.label}</span>
                                <span className="text-xl font-medium text-text-primary mt-0.5">{stat.value}</span>
                            </div>
                            <span
                                className={cn(
                                    "text-sm font-medium whitespace-nowrap",
                                    stat.isPositive
                                        ? "text-green-500"
                                        : stat.isNeutral
                                            ? "text-gray-400"
                                            : "text-red-500"
                                )}
                            >
                                {stat.change}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Filters Row */}
                <div className="flex flex-col 2xl:flex-row justify-between items-center gap-4 mb-6 lg:mb-6">
                    <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
                        <button className="flex items-center gap-2 rounded-full px-4 py-2 text-xs lg:text-sm font-semibold text-gray-500 border border-secondary bg-bg-gray hover:bg-gray-50 transition-colors w-full md:w-auto justify-center">
                            Date <span className="">Last 7 days ▼</span>
                        </button>
                        <button className="flex items-center gap-2 rounded-full px-4 py-2 text-xs lg:text-sm font-semibold text-gray-500 border border-secondary bg-bg-gray hover:bg-gray-50 transition-colors w-full md:w-auto justify-center">
                            Status <span className="">Completed & missed ▼</span>
                        </button>
                        <button className="flex items-center gap-2 rounded-full px-4 py-2 text-xs lg:text-sm font-semibold text-gray-500 border border-secondary bg-bg-gray hover:bg-gray-50 transition-colors w-full md:w-auto justify-center">
                            Owner <span className="">Any assignee ▼</span>
                        </button>
                    </div>
                    <div className="flex gap-2.5 w-full 2xl:w-auto">
                        <div className="relative w-full 2xl:w-auto">
                            <Searchbox
                                placeholder="Search within results"
                                containerClassName={"w-full lg:min-w-[240px]"}
                                size="md"
                            />
                        </div>
                        <button className="flex items-center gap-2 rounded-full px-5 py-2 text-xs lg:text-sm font-semibold text-gray-500 border border-secondary bg-white transition-colors whitespace-nowrap">
                            <FiFilter className="w-5 h-5" /> Filter
                        </button>
                    </div>
                </div>

                {/* Timeline List */}
                <div className="space-y-3 w-full overflow-x-auto grid grid-cols-1">
                    {CALLS_DATA.map((call) => (
                        <div
                            key={call.id}
                            className="group border border-secondary rounded-xl md:rounded-full p-4 md:p-2 pl-3 md:pr-6  transition-all duration-200 bg-white flex flex-col md:flex-row items-center gap-3 md:gap-4 relative md:min-w-[1024px]"
                        >
                            {/* Avatar */}
                            <div
                                className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-sm bg-secondary text-primary",
                                )}
                            >
                                {call.initials}
                            </div>

                            {/* Main Info */}
                            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-16 gap-y-2 items-center ">

                                {/* Time & Phone */}
                                <div className="md:col-span-4 flex flex-col text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-2">
                                        <span className="font-medium text-text-primary text-sm md:text-base">{call.time}</span>
                                    </div>
                                    <span className="text-gray-500 text-sm font-medium mt-0.5">
                                        {call.phone} <span className="mx-1">·</span> {call.location}
                                    </span>
                                </div>

                                {/* Duration & Status */}
                                <div className="md:col-span-4 2xl:col-span-5 flex flex-col text-center md:text-left items-center md:items-start w-fit md:w-auto mx-auto 2xl:mx-0">
                                    <span className="text-gray-400 text-sm font-medium mb-1">Duration · {call.duration}</span>
                                    <span className={cn(
                                        "text-sm px-2.5 py-0.5 rounded-full w-fit lg:w-auto ",
                                        call.status === "Completed" && "bg-[#D1FADF] text-[#027A48]",
                                        call.status === "Missed" && "bg-[#FEE4E2] text-[#B42318]",
                                        call.status === "In progress" && "bg-secondary text-primary"
                                    )}>
                                        {call.status}
                                    </span>
                                </div>
                                <span className="md:col-span-3 2xl:col-span-2 font-medium text-gray-500 text-sm text-center md:text-left">
                                    Assigned · <span className="">{call.assigned}</span>
                                </span>

                                {/* Assigned */}
                                <div className="md:col-span-5 flex flex-col text-center md:text-left items-center md:items-end justify-center h-full">
                                    <div className="flex flex-col items-center md:items-end gap-1">
                                        <div className="flex items-center justify-center md:justify-end gap-2 mt-1">
                                            {call.tags.map(tag => (
                                                <span key={tag} className="bg-bg-gray text-gray-500 text-xs font-bold px-2 py-0.5 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-gray-400 text-xs text-right truncate max-w-[200px] mt-0.5">
                                            Notes · {call.notes}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-4 md:mt-6 px-2">
                    <p className="text-gray-400 text-xs md:text-sm font-medium">Showing 1–25 of 132 calls</p>
                    <Pagination size="xs" previous={<button className="text-gray-400 text-xs md:text-base hover:text-[#304E77] px-3 py-1">Prev</button>} next={<button className="text-gray-400 text-xs md:text-base hover:text-[#304E77] px-3 py-1">Next</button>} containerClassName={"flex-0"} />
                </div>
            </div>

            {/* Bottom Floating Bar */}
            <div className="flex flex-col lg:flex-row justify-between items-center mt-6 lg:mt-12 gap-6 px-1">
                <div className="flex flex-col md:flex-row items-center gap-3">
                    <span className="bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                        Calls workspace
                    </span>
                    <p className="text-gray-500 text-xs font-medium text-center md:text-left">
                        A unique, timeline-style view of every call, designed for fast scanning and deep dives.
                    </p>
                </div>
                <div className="flex flex-row gap-2 md:gap-3">
                    <BorderButton className={"!py-2 lg:!py-2.5 px-3 lg:px-5 !text-xs lg:!text-sm"} >
                        Export current view
                    </BorderButton>
                    <Button className={"!py-2 lg:!py-2.5 px-3 lg:px-5 !text-xs lg:!text-sm"}>
                        Save filters as default
                    </Button>
                </div>
            </div>
        </Wrapper>
    );
}
