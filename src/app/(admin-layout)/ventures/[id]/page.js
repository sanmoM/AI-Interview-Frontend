"use client";

import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import Wrapper from "@/components/shared/wrapper/wrapper";
import Badge from "@/components/ui/badge";
import BorderButton from "@/components/ui/buttons/border-button";
import Button from "@/components/ui/buttons/button";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import Searchbox from "@/components/ui/inputs/searchbox";
import BrandingCard from "@/components/ventures/brand-card/branding-card";
import FAQs from "@/components/ventures/faq-card/faqs";
import Knowledge from "@/components/ventures/knowledge/knowledge";
import SystemPromptCard from "@/components/ventures/system-prompt-card";
import ToneCard from "@/components/ventures/tone-card";
import { FiExternalLink } from "react-icons/fi";

export default function VentureDetailPage() {
    return (
        <SecondaryWrapper>
            {/* Top Header */}
            <div className="flex flex-1 flex-col xl:flex-row justify-between xl:items-start gap-6 mb-8">
                <div className="">
                    <p className="text-text-gray text-xs md:text-sm font-medium mb-3 flex items-center gap-1.5">
                        <span className="text-text-gray">Venture profiles b7</span>
                        <span className="text-text-primary font-semibold">Aurora Mobility Labs</span>
                    </p>
                    <div className="flex flex-col md:flex-row items-start gap-5">
                        <div className="w-14 h-14 rounded-3xl bg-secondary flex items-center justify-center shrink-0 text-xl text-primary mx-auto md:mx-0">
                            AM
                        </div>
                        <div>
                            <SectionHeading className="!mb-1 text-text-primary tracking-tight">Aurora Mobility Labs</SectionHeading>
                            <SubHeading className="max-w-2xl text-text-gray font-normal leading-relaxed">
                                Urban e-mobility platform piloting with three OEM partners across EU and LATAM.
                            </SubHeading>

                            <div className="flex flex-wrap gap-2.5 mt-4">
                                <Badge status="green" className={"text-[13px] px-3 py-0.5"}>
                                    Active
                                </Badge>
                                <Badge status="blue" className={"text-[13px] px-3 py-0.5"}>
                                    Stage: Fit testing
                                </Badge>
                                <Badge status="gray" className={"text-[13px] px-3 py-0.5"}>
                                    Owner: D. Chen
                                </Badge>
                                <Badge status="gray" className={"text-[13px] px-3 py-0.5"}>
                                    12 interviews
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 mt-2 self-start xl:self-start w-full xl:w-auto items-center">
                    <Searchbox placeholder="Search within venture" containerClassName="w-full 2xl:w-[270px]" />
                    <BorderButton className="flex items-center justify-center gap-2 px-5 py-2 text-sm text-primary md:w-fit">
                        <FiExternalLink className="w-4 h-4" />
                        Live candidate link
                    </BorderButton>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-6">
                {/* Left Column (Branding & Tone) */}
                <BrandingCard />
                <FAQs />

                {/* Right Column (FAQs, System Prompt, Knowledge) */}
                <ToneCard />
                <div className="flex flex-col gap-6">
                    <SystemPromptCard />
                    <Knowledge />
                </div>
            </div>

            {/* Floating Action Bar */}
            <div className="flex flex-col gap-5 xl:gap-8 2xl:flex-row justify-between items-center mt-8">
                <p className="text-gray-500 max-w-3xl font-medium flex flex-col md:flex-row md:items-center gap-2">
                    <span className="bg-secondary w-fit text-primary text-xs font-bold px-2 py-1 rounded-full mr-2 uppercase tracking-wide text-nowrap gap-2">Config on venture</span>
                    <span className="text-sm"> Branding, tone, FAQs, system prompt, and knowledge were initially set on creation and remain fully editable.</span>
                </p>
                <div className="flex flex-col md:flex-row gap-2">
                    <BorderButton className="text-gray-600 hover:text-gray-900 !text-sm font-semibold px-4 py-2 hover:bg-gray-100 rounded-full transition-colors whitespace-nowrap">
                        Discard unsaved changes
                    </BorderButton>
                    <Button className="!text-sm px-6">
                        Save & open interview preview
                    </Button>
                </div>
            </div>
        </SecondaryWrapper>
    );
}
