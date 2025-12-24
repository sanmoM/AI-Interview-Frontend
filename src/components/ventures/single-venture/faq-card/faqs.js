"use client";

import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import InnerDivHeader from "@/components/shared/inner-div-header";
import BorderButton from "@/components/ui/buttons/border-button";
import { FiHelpCircle, FiPlus } from "react-icons/fi";
import FAQCard from "./components/faq-card";

export default function FAQs() {
    return (
        <InnerWrapper>
            <InnerDivHeader
                Icon={FiHelpCircle}
                title="FAQs"
                description="Venture-specific questions candidates can search."
                badgeLabel="18 items"
                containerClassName={"mb-6 md:mb-0"}
            />

            <div className="space-y-4 mb-6">
                <FAQCard
                    title="How is my trip data stored and used?"
                    description="We log routes and charging events in an aggregated way. Personal identifiers are separated from raw telemetry..."
                    category="Data & privacy"
                />
                <FAQCard
                    title="How is my trip data stored and used?"
                    description="We log routes and charging events in an aggregated way. Personal identifiers are separated from raw telemetry..."
                    category="Data & privacy"
                />
            </div>

            <div className="flex justify-between md:gap-4 items-center">
                <BorderButton className="flex w-fit items-center gap-2 text-text-gray font-medium px-4 py-2 rounded-full hover:bg-gray-50 transition-colors !text-[13px]">
                    <FiPlus className="w-4 h-4 text-text-gray" />
                    Add FAQ
                </BorderButton>
                <button className="text-primary text-xs md:text-sm font-semibold hover:underline cursor-pointer">
                    Manage categories
                </button>
            </div>
        </InnerWrapper>
    );
}
