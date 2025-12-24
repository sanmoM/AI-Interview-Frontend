"use client";

import InnerDivHeader from "@/components/shared/inner-div-header";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import { HiOutlineDocumentText } from "react-icons/hi";
import ContentWrapper from "../shared/wrapper/content-wrapper";
import Badge from "../ui/badge";

export default function RoleOverviewCard() {
    return (
        <InnerWrapper>
            <InnerDivHeader
                Icon={HiOutlineDocumentText}
                title="Role overview"
                description="Concise summary that candidates see first."
                badgeLabel="Candidate-facing"
            />

            <div className="">
                <p className="text-sm font-medium text-text-gray mb-3">Role summary</p>
                <ContentWrapper className={"font-medium"}>
                    As an AI Developer Assistant, you’ll support engineering teams by reviewing code-related transcripts, structuring feedback, and surfacing insights that improve how we ship AI features.
                </ContentWrapper>
                <div className="flex flex-col-reverse md:flex-row gap-2 justify-between items-center px-1 mt-2 md:mt-3">
                    <p className="text-gray-400 text-xs text-left">Ideal: 1–2 sentences, under 280 characters.</p>
                    <Badge status="gray" className="text-xs px-2.5 py-0.5 ml-2 w-fit">Shown on job card</Badge>
                </div>
            </div>
        </InnerWrapper>
    );
}
