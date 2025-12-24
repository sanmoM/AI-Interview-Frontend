"use client";

import { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import InnerDivHeader from "../shared/inner-div-header";
import InnerWrapper from "../shared/wrapper/inner-wrapper";
import TitleSubtitle from "./shared/title-subtitle";
import SelectBox from "../ui/inputs/select-box";
import ContentWrapper from "../shared/wrapper/content-wrapper";

export default function ToneCard() {
    const [tone, setTone] = useState("Professional, friendly");

    return (
        <InnerWrapper>
            <InnerDivHeader
                title="Tone & writing style"
                description="How the assistant speaks to candidates."
                Icon={FiMessageSquare}
                badgeLabel="Voice"
                containerClassName={"mb-6 md:mb-8"}
            />

            <div className="flex flex-col xl:flex-row gap-4 md:gap-10">
                <div className="flex-1">
                    <div className="mb-4 md:mb-6">
                        <TitleSubtitle title="Tone" description="Choose the overall personality." />
                        <SelectBox
                            options={[
                                { value: "professional-friendly", label: "Professional, friendly" },
                                { value: "casual-warm", label: "Casual, warm" },
                                { value: "direct-concise", label: "Direct, concise" },
                            ]}
                            value={tone}
                            onChange={(e) => setTone(e.target.value)}
                            placeholder="Select tone"
                        />
                    </div>

                    <div>
                        <TitleSubtitle title="Key rules" />
                        <ContentWrapper>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Short, clear sentences. Avoid jargon.<br />
                                Warm and respectful. No emojis.
                            </p>
                        </ContentWrapper>
                    </div>
                </div>

                <div className="flex-1">
                    <TitleSubtitle title="Preview" description="Example using current settings." />
                    <ContentWrapper className={"border-none"}>
                        <p className="text-sm font-bold text-text-gray uppercase tracking-wide mb-2">Candidate preview</p>
                        <p className="text-text-gray text-sm leading-relaxed">
                            &quot;To get started, could you briefly describe what your product does and who it is for? We&apos;ll ask a few follow-up questions after this.&quot;
                        </p>
                    </ContentWrapper>
                </div>
            </div>
        </InnerWrapper>
    );
}
