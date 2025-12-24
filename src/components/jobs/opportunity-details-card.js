"use client";

import InnerDivHeader from "@/components/shared/inner-div-header";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import { FiInfo, FiChevronUp } from "react-icons/fi";

export default function OpportunityDetailsCard() {
    return (
        <InnerWrapper>
            <InnerDivHeader
                Icon={FiInfo}
                title="Opportunity details"
                description="Flexible hours, compensation, and contract terms."
                badgeLabel="Accordion"
            />

            <div className="bg-[#F9FAFB] border border-gray-200 rounded-3xl overflow-hidden">
                <div className="px-3 md:px-6 py-4 flex justify-between items-center border-b border-gray-200">
                    <span className="text-sm font-bold text-text-primary">More about the opportunity</span>
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-text-gray uppercase tracking-wide hidden md:block">Expanded</span>
                        <FiChevronUp className="w-4 h-4 text-gray-500" />
                    </div>
                </div>

                <div className="p-3 md:p-6">
                    <div className="mb-4">
                        <p className="text-xs font-bold text-text-gray mb-1">Flexibility</p>
                        <p className="text-sm font-bold text-text-primary mb-1">
                            Work asynchronously from anywhere within ±3 hours of CET.
                        </p>
                        <p className="text-sm text-text-gray font-medium">
                            Most work is self-paced with optional weekly syncs.
                        </p>
                    </div>

                    <div className="mb-4">
                        <p className="text-xs font-bold text-text-gray mb-1">Compensation</p>
                        <p className="text-sm font-bold text-text-primary mb-1">
                            Contract-based, hourly compensation with bonuses tied to quality, reliability, and turnaround time.
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-bold text-text-gray mb-1">Contract</p>
                        <p className="text-sm font-bold text-text-primary">
                            Initial 3-month engagement with the option to extend based on mutual fit.
                        </p>
                    </div>
                </div>
            </div>
        </InnerWrapper>
    );
}
