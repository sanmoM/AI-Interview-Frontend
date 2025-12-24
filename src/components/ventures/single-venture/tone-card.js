"use client";

import ContentWrapper from "@/components/shared/wrapper/content-wrapper";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import InnerDivHeader from "@/components/shared/inner-div-header";
import BorderButton from "@/components/ui/buttons/border-button";
import SelectBox from "@/components/ui/inputs/select-box";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { FiMessageSquare, FiRefreshCw } from "react-icons/fi";

export default function ToneCard() {
    const [tonePreset, setTonePreset] = useState("Friendly, professional");

    return (
        <InnerWrapper className={"h-fit"}>
            <InnerDivHeader
                Icon={FiMessageSquare}
                title="Tone & writing style"
                description="How Aurora speaks to candidates."
                badgeLabel="Set on creation"
                containerClassName={"mb-6 md:mb-0"}
            />

            <div className="mb-4 md:mb-8">
                <p className="text-sm font-medium text-gray-700 mb-3">Tone preset</p>
                <div className="relative">
                    <SelectBox
                        options={[
                            { value: "friendly, professional", label: "Friendly, professional" },
                            { value: "formal, concise", label: "Formal, concise" },
                            { value: "casual, warm", label: "Casual, warm" },
                        ]}
                        value={tonePreset}
                        onChange={(e) => setTonePreset(e.target.value)}
                        placeholder="Select tone preset"
                        size="sm"
                    />
                </div>
                <p className="text-text-gray text-xs mt-2">
                    Choose from formal, casual, professional, friendly, or a custom mix.
                </p>
            </div>

            <div className="mb-4 md:mb-8">
                <p className="text-sm font-medium text-text-gray mb-3">Writing style guidelines</p>
                <ContentWrapper >
                    <p className="text-text-primary text-xs md:text-sm leading-relaxed font-medium">
                        Use short, concrete questions. Avoid jargon and emojis. Prefer bullet points for longer explanations. Mirror candidate language where possible and keep responses under 3 sentences.
                    </p>
                </ContentWrapper>
                <p className="text-text-gray text-xs mt-2">
                    Used to steer the assistant&apos;s wording across the full interview.
                </p>
            </div>

            <div className="mt-auto">
                <div className="flex justify-between items-center mb-3">
                    <p className="text-sm font-medium text-text-gray">Live preview</p>
                </div>
                <ContentWrapper>
                    <p className="text-text-primary text-xs md:text-sm leading-relaxed font-medium">
                        &quot;Hi there — thanks for taking a few minutes to help us improve urban e-mobility. This session should take about 8–10 minutes. We&apos;ll ask about your routes, charging habits, and what would make Aurora genuinely useful for you.&quot;
                    </p>
                </ContentWrapper>
                <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                    <BorderButton className={"flex items-center gap-2 text-text-primary !text-xs md:!text-sm font-medium px-4 py-2 w-fit"}>
                        <FiRefreshCw className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                        Regenerate preview
                    </BorderButton>
                    <button className="text-primary text-xs md:text-sm font-semibold hover:underline">
                        Reset to default tone
                    </button>
                </div>
            </div>
        </InnerWrapper>
    );
}
