"use client";

import ContentWrapper from "@/components/shared/wrapper/content-wrapper";
import InnerDivHeader from "@/components/shared/inner-div-header";
import { IoSparklesOutline } from "react-icons/io5";

export default function SystemPromptCard() {
    return (
        <div className="bg-white rounded-[32px] p-6 lg:p-8 shadow-lg h-fit">
            {/* <div className="flex justify-between items-start mb-6">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                        <IoSparklesOutline className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h2 className="text-lg font-semibold text-text-primary leading-tight">System prompt</h2>
                        </div>
                        <p className="text-text-gray text-sm mt-0.5">Global instructions that drive assistant behaviour.</p>
                    </div>
                    <span className="text-nowrap bg-secondary text-primary text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#B9E6FE]">
                        Applied to all steps
                    </span>
                </div>
            </div> */}
            <InnerDivHeader
                Icon={IoSparklesOutline}
                title="System prompt"
                description="Global instructions that drive assistant behaviour."
                containerClassName={"mb-6 md:mb-0"}
                badgeLabel={"Applied to all steps"}
            />

            <ContentWrapper>
                <p className="text-text-primary text-xs md:text-sm font-medium leading-relaxed">
                    You are the interview assistant for Aurora Mobility Labs.
                    Always: - Explain concepts in clear, non-technical
                    language.- Ask one question at a time. - Tie questions
                    back to how insights will improve urban e‑mobility.
                    - Never promise incentives that aren't listed in the intro.
                </p>
            </ContentWrapper>
            <p className="text-text-gray text-xs text-left mt-2 md:mt-4">
                This was set when the venture was created and can be edited safely here.
            </p>
        </div>
    );
}
