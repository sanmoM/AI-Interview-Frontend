"use client";

import BrandingCard from "@/components/engine/brand/branding-card";
import IntroCard from "@/components/engine/intro-card";
import ToneCard from "@/components/engine/tone-card";
import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import Badge from "@/components/ui/badge";
import BorderButton from "@/components/ui/buttons/border-button";
import Button from "@/components/ui/buttons/button";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import Searchbox from "@/components/ui/inputs/searchbox";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function EnginePage() {
    return (
        <SecondaryWrapper>
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 md:gap-6 mb-6 md:mb-8">
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

            <div className="flex flex-col gap-5 xl:gap-8 2xl:flex-row justify-between items-center mt-8">

                <p className="text-gray-500 max-w-3xl font-medium flex flex-col md:flex-row md:items-center gap-2">
                    <Badge className="text-[13px] py-1 w-fit mx-auto md:mx-0">
                        Branding & tone
                    </Badge>
                    <span className="text-[13px]">These settings apply only to this venture.</span>
                </p>

                <div className="flex flex-col md:flex-row md:items-center gap-3 w-full md:w-auto">
                    <BorderButton className="!text-base w-full md:w-fit px-4 !py-1.5">
                        Cancel
                    </BorderButton>
                    <BorderButton
                        variant="outline"
                        className={"flex items-center justify-center !text-base gap-2 w-full md:w-fit px-4 !py-1.5"}
                    >
                        <IoPlayCircleOutline className="w-3.5 h-3.5" /> Preview interview
                    </BorderButton>
                    <Button
                        variant="default"
                        className={"flex items-center justify-center !text-base gap-2 w-full md:w-fit px-4 !py-1.5"}
                    >
                        Save changes
                    </Button>
                </div>
            </div>
        </SecondaryWrapper>
    );
}
