"use client";

import BrandingCard from "@/components/engine/branding-card";
import ToneCard from "@/components/engine/tone-card";
import IntroCard from "@/components/engine/intro-card";
import { FiSearch, FiPlayCircle, FiEye } from "react-icons/fi";
import { IoPlayCircleOutline } from "react-icons/io5";
import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import Badge from "@/components/ui/badge";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import Searchbox from "@/components/ui/inputs/searchbox";

export default function EnginePage() {
    return (
        <SecondaryWrapper>
            <div className="">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 md:gap-6 mb-8">
                    <div className="">
                        <Badge className={"text-sm py-1"}>
                            Venture configuration
                        </Badge>
                        <SectionHeading className={"mt-3 md:mt-4 mb-1"}>
                            Branding, tone & intro flow
                        </SectionHeading>
                        <SubHeading>
                            Configure the essentials for this ventures candidate experience in three quick sections: branding, voice, and intro/outro.
                        </SubHeading>
                    </div>
                    <Searchbox 
                        placeholder="Search ventures"
                    />
                </div>

                {/* Content Stack */}
                <div className="flex flex-col gap-6">
                    <BrandingCard />
                    <ToneCard />
                    <IntroCard />
                </div>
            </div>

            {/* Footer */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-4 px-6 md:px-10 z-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        <span className="bg-[#BAE6FD] text-[#026AA2] text-xs font-bold px-3 py-1 rounded-full">
                            Branding & tone
                        </span>
                        <p className="text-gray-500 text-sm font-medium">
                            These settings apply only to this venture.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="text-gray-700 hover:text-gray-900 text-sm font-bold px-6 py-2.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                            Cancel
                        </button>
                        <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm font-bold px-6 py-2.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                            <IoPlayCircleOutline className="w-5 h-5 text-gray-500" />
                            Preview interview
                        </button>
                        <button className="bg-[#344054] hover:bg-[#1D2939] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-colors shadow-sm">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </SecondaryWrapper>
    );
}
