"use client";

import { BsFileEarmarkPdf } from "react-icons/bs";
import { FiDownload, FiFileText } from "react-icons/fi";
import CallCard from "../call/call-card";
import InnerDivHeader from '../shared/inner-div-header';
import Button from "../ui/buttons/button";
import Searchbox from '../ui/inputs/searchbox';
import InnerWrapper from "../shared/wrapper/inner-wrapper";
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

export default function TranscriptColumn() {
    return (
        <InnerWrapper>
            <InnerDivHeader
                Icon={FiFileText}
                title="Transcript"
                description="Full, time-stamped conversation with speaker labels."
                badgeLabel="Search & export"
            />

            {/* Search & Actions */}
            <div className="flex flex-col md:flex-row items-center gap-3 w-full mb-4 md:mb-6">
                <Searchbox
                    placeholder='Search transcript by keyword or phrase'
                    value={''}
                    onChange={() => { }}
                    containerClassName={"flex-1 w-full"}
                />
                <Button className={"flex items-center px-4 w-full 2xl:w-fit !py-2 !text-sm bg-bg-gray text-text-gray"}>
                    <FiDownload size={16} />
                    <span className="inline">Export .txt</span>
                </Button>
                <Button className={"flex items-center px-4 w-full 2xl:w-fit !py-2 !text-sm"}>
                    <BsFileEarmarkPdf size={16} />
                    <span className="inline">Export PDF</span>
                </Button>
            </div>

            {/* Transcript List */}
            <div className="flex-1 space-y-6 overflow-y-auto pr-2">
                {CALLS_DATA.map((item, index) => (
                    <CallCard call={item} />
                ))}
            </div>

            <div className="mt-4 pt-4 text-xs font-medium flex justify-between">
                <p className="text-text-gray ">Transcript generated automatically · Edit in-place to correct
                    names or details.</p>
                <p className="text-primary">Open full transcript view</p>
            </div>
        </InnerWrapper>
    );
}
