"use client";

import InnerDivHeader from "@/components/shared/inner-div-header";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import { FiList } from "react-icons/fi";
import Badge from "../ui/badge";

function StepItem({ number, title, description }) {
    return (
        <div className="border border-[#B9E6FE] bg-white rounded-xl md:rounded-full p-3 md:px-6 md:py-4 flex flex-col md:flex-row gap-2 md:gap-5 items-center">
            <div className="flex gap-2 items-center">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 text-[#1e3a8a] text-sm font-bold shadow-sm">
                    {number}
                </div>
                <div>
                    <p className="text-sm font-bold text-gray-900 mb-0.5">{title}</p>
                    <div className=" items-center gap-2 hidden md:flex">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                        <p className="text-xs md:text-sm font-medium text-text-gray">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 md:hidden">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                <p className="text-xs md:text-sm font-medium text-text-gray">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default function ApplicationProcessCard() {
    return (
        <InnerWrapper>
            <InnerDivHeader
                Icon={FiList}
                title="Application process"
                description="Simple, step-by-step path from apply to offer."
                badgeLabel="Visible to candidates"
            />

            <div className=" space-y-4">
                <StepItem
                    number="1"
                    title="Submit resume and short introduction"
                    description="Share your background, availability, and tools you're comfortable with."
                />
                <StepItem
                    number="2"
                    title="Receive rubric documentation"
                    description="We send a short guide explaining how we score transcripts."
                />
                <StepItem
                    number="3"
                    title="Complete a trial transcript set"
                    description="Score and summarize a small batch of calls using the rubric."
                />
                <StepItem
                    number="4"
                    title="Feedback, alignment call, and next steps"
                    description="We review your work together and, if aligned, move to onboarding."
                />
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-2 mt-3 justify-between items-center px-1 ">
                <p className="text-gray-400 text-xs font-medium text-center">Keep 3–5 clear steps to set expectations.</p>
                <Badge status="gray" className={"py-0.5 text-xs"}>Progress bar auto-generates from steps</Badge>
            </div>
        </InnerWrapper>
    );
}
