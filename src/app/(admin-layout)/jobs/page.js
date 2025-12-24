"use client";

import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import Badge from "@/components/ui/badge";
import BorderButton from "@/components/ui/buttons/border-button";
import Button from "@/components/ui/buttons/button";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import { FiChevronLeft, FiEye } from "react-icons/fi";
import RoleOverviewCard from "@/components/jobs/role-overview-card";
import KeyResponsibilitiesCard from "@/components/jobs/key-responsibilities-card";
import IdealQualificationsCard from "@/components/jobs/ideal-qualifications-card";
import OpportunityDetailsCard from "@/components/jobs/opportunity-details-card";
import ApplicationProcessCard from "@/components/jobs/application-process-card";

export default function JobPage() {
    return (
        <SecondaryWrapper>
            {/* Header */}
            <div className="flex flex-col xl:flex-row justify-between xl:items-start gap-6 mb-8">
                <div className="flex-1">
                    <p className="text-text-gray  text-[10px] md:text-sm font-medium mb-3 flex items-center gap-1.5 text-nowrap">
                        <span className="text-text-gray">Aurora Mobility Labs</span>
                        <span className="text-text-gray">•</span>
                        <span className="text-text-gray">Jobs</span>
                        <span className="text-text-gray">•</span>
                        <span className="text-text-primary font-semibold">AI Developer Assistant</span>
                    </p>

                    <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-2">
                        <div className="flex items-center gap-2">

                            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0 text-primary font-bold text-sm">
                                AI
                            </div>
                            <SectionHeading className="!mb-0 text-3xl font-bold text-gray-900 tracking-tight">
                                AI Developer Assistant
                            </SectionHeading>
                        </div>

                        <Badge status="green" className="text-xs px-2.5 py-0.5 ml-2 w-fit">Open</Badge>
                    </div>

                    <SubHeading className="max-w-3xl text-text-gray font-normal text-base leading-relaxed mb-4">
                        Configure a clear, candidate-facing overview of this role, including responsibilities, qualifications, and how to apply.
                    </SubHeading>

                    <div className="flex flex-wrap gap-2">
                        <Badge status="blue" className="text-xs px-3 py-1 bg-opacity-50">Remote • Flexible hours</Badge>
                        <Badge status="gray" className="text-xs px-3 py-1">Hiring manager • D. Chen</Badge>
                        <Badge status="gray" className="text-xs px-3 py-1">Last updated • Today</Badge>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 mt-2 self-start xl:self-start w-full xl:w-auto items-center">
                    <BorderButton className="flex items-center justify-center gap-2 px-5 py-2 text-sm text-text-gray font-semibold hover:text-gray-900 md:w-fit bg-transparent border-gray-200">
                        <FiChevronLeft className="w-4 h-4" />
                        Back to roles
                    </BorderButton>
                    <Button className="flex items-center justify-center gap-2 !text-sm px-6 py-2.5 font-bold shadow-sm whitespace-nowrap">
                        <FiEye className="w-4 h-4" />
                        Preview job page
                    </Button>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 2xl:grid-cols-[60%_40%] gap-6 items-start">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                    <RoleOverviewCard />
                    <KeyResponsibilitiesCard />
                    <ApplicationProcessCard />
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                    <IdealQualificationsCard />
                    <OpportunityDetailsCard />
                </div>
            </div>

            {/* Footer Floating Bar
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
               
            </div> */}
            <div className="flex flex-col gap-5 xl:gap-8 2xl:flex-row justify-between items-center mt-8">
                 <div className="flex flex-col md:flex-row items-center gap-3">
                    <Badge className="text-xs px-3 py-1">AI Developer Assistant</Badge>
                    <span className="text-gray-500 text-sm font-medium text-center md:text-left">Review responsibilities and qualifications, then save or preview the candidate-facing page.</span>
                </div>
                <div className="flex gap-3">
                    <BorderButton className="flex items-center justify-center gap-2 px-6 py-2 text-sm font-semibold bg-white border-gray-300 md:w-fit">
                        Save
                    </BorderButton>
                    <Button className="flex items-center justify-center gap-2 !text-sm px-6 py-2.5 font-bold shadow-sm whitespace-nowrap !rounded-full">
                        Preview
                    </Button>
                </div>
            </div>

        </SecondaryWrapper>
    );
}
