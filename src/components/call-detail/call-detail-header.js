import React from 'react';
import { FiChevronLeft, FiShare } from "react-icons/fi";
import Link from 'next/link';
import Badge from '../ui/badge';
import BorderButton from '../ui/buttons/border-button';
import Button from '../ui/buttons/button';

export default function CallDetailHeader() {
    return (
        <div className="mb-6">
            {/* Breadcrumb & Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="text-sm text-gray-500 font-medium">
                    Aurora Mobility Labs <span className="mx-2">·</span> Calls <span className="mx-2">·</span> <span className="text-gray-900">Call detail</span>
                </div>
                <div className="flex items-center gap-3">
                    <BorderButton className="flex items-center gap-2 !text-sm !py-2 !px-4">
                        <FiChevronLeft className="w-4 h-4" />
                        Back to calls
                    </BorderButton>
                    <Button className="flex items-center gap-2 !text-sm !py-2 !px-4">
                        Export call
                    </Button>
                </div>
            </div>

            {/* Title section */}
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-sm shrink-0">
                    AM
                </div>
                <div>
                    <h1 className="text-lg font-medium text-text-gray">Review the full transcript and AI summary in one place, then export or share with your team.</h1>
                    <div className=" flex-wrap items-center gap-2 mt-3 hidden 2xl:flex">
                        <Badge status="blue" className={"text-xs py-1.5 px-3"}>Today · 14:12 · 26 min 04 s</Badge>
                        <Badge status="gray" className={"text-xs py-1.5 px-3"}>Agent · D. Chen</Badge>
                        <Badge status="gray" className={"text-xs py-1.5 px-3"}>Call type · Inbound</Badge>
                    </div>
                </div>
            </div>
            <div className=" flex-wrap items-center gap-2 mt-3 flex 2xl:hidden">
                <Badge status="blue" className={"text-xs py-1.5 px-3"}>Today · 14:12 · 26 min 04 s</Badge>
                <Badge status="gray" className={"text-xs py-1.5 px-3"}>Agent · D. Chen</Badge>
                <Badge status="gray" className={"text-xs py-1.5 px-3"}>Call type · Inbound</Badge>
            </div>
        </div>
    );
}
