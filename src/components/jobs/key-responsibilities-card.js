"use client";

import InnerDivHeader from "@/components/shared/inner-div-header";
import ContentWrapper from "@/components/shared/wrapper/content-wrapper";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import { FiCheckSquare, FiPlus } from "react-icons/fi";
import { cn } from "@/utils/cn";
import Badge from "../ui/badge";

function ResponsibilityItem({ title, description, isSelected = false }) {
    return (
        <ContentWrapper className={cn("relative flex items-start gap-4")}>
            <div className="flex items-center flex-col gap-4" >
                <div className={cn("w-6 h-6 rounded-full border border-[#0BA5EC] flex items-center justify-center mt-0.5 shrink-0 bg-white")}>
                </div>
                <div className="w-6 h-6 rounded-full border border-secondary  items-center justify-center shrink-0 flex md:hidden">
                    <FiPlus className="w-4 h-4 text-[#0BA5EC]" />
                </div>
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-bold text-gray-900">{title}</h3>
                    <div className="w-5 h-5 rounded-full border border-secondary  items-center justify-center shrink-0 ml-2 hidden md:flex">
                        <FiPlus className="w-3 h-3 text-[#0BA5EC]" />
                    </div>
                </div>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                    {description}
                </p>
            </div>
        </ContentWrapper>
    )
}

export default function KeyResponsibilitiesCard() {
    return (
        <InnerWrapper>
            <div className="flex flex-col md:flex-row justify-between items-start mb-6 md:-mb-2">
                <InnerDivHeader
                    title="Key responsibilities"
                    description="Track and check off core tasks for this role."
                    Icon={FiCheckSquare}
                    badgeLabel={""}
                    containerClassName={"mb-4 md:mb-6"}

                />
                <button className="md:mt-0 flex items-center gap-2 text-[#0BA5EC] hover:text-[#0284c7] text-sm font-bold transition-colors">
                    <FiPlus className="w-4 h-4" />
                    Add responsibility
                </button>
            </div>

            <div className="space-y-4 md:space-y-6">
                <ResponsibilityItem
                    title="Review code transcripts for completeness and clarity."
                    description="Spot missing context, flag issues, and tag segments that require developer follow-up."
                    isSelected={false}
                />
                <ResponsibilityItem
                    title="Score each transcript using a 10-point rubric."
                    description="Apply consistent scoring across calls, highlighting high-risk or low-quality interactions."
                    isSelected={false}
                />
                <ResponsibilityItem
                    title="Write concise feedback and summaries for the team."
                    description="Distill conversations into short written summaries that developers can scan quickly."
                    isSelected={false}
                />
                <ResponsibilityItem
                    title="Collaborate with product and ops on rubric updates."
                    description="Suggest rubric changes and examples to keep quality high as the product evolves."
                    isSelected={false}
                />
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-2 mt-3 justify-between items-center px-1">
                <p className="text-gray-400 text-xs font-medium text-center">Use checkboxes during onboarding to confirm coverage.</p>
                <Badge status="gray" className={"py-0.5 text-xs"}>4 responsibilities listed</Badge>
            </div>
        </InnerWrapper>
    );
}
