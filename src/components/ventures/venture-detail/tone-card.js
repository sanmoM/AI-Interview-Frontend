"use client";

import BorderButton from "@/components/ui/buttons/border-button";
import SelectBox from "@/components/ui/inputs/select-box";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { FiMessageSquare, FiRefreshCw } from "react-icons/fi";

export default function ToneCard() {
    const [tonePreset, setTonePreset] = useState("Friendly, professional");

    return (
        <div className="bg-white rounded-4xl p-6 lg:p-8 shadow-lg flex flex-col self-start">
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <FiMessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-text-primary leading-tight">Tone & writing style</h2>
                        <p className="text-text-gray text-sm mt-0.5">How Aurora speaks to candidates.</p>
                    </div>
                </div>
                <span className="bg-secondary text-primary text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Set on creation
                </span>
            </div>

            <div className="mb-8">
                <p className="text-sm font-medium text-gray-700 mb-3">Tone preset</p>
                <div className="relative">
                    {/* <select
                        className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0BA5EC]/20 focus:border-[#0BA5EC] pr-10 cursor-pointer shadow-sm transition-all"
                        value={tonePreset}
                        onChange={(e) => setTonePreset(e.target.value)}
                    >
                        <option>Friendly, professional</option>
                        <option>Formal, concise</option>
                        <option>Casual, warm</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                    </div> */}
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

            <div className="mb-8">
                <p className="text-sm font-medium text-text-gray mb-3">Writing style guidelines</p>
                <div className="bg-bg-gray border border-secondary rounded-3xl p-4">
                    <p className="text-text-primary text-sm leading-relaxed font-medium">
                        Use short, concrete questions. Avoid jargon and emojis. Prefer bullet points for longer explanations. Mirror candidate language where possible and keep responses under 3 sentences.
                    </p>
                </div>
                <p className="text-text-gray text-xs mt-2">
                    Used to steer the assistant&apos;s wording across the full interview.
                </p>
            </div>

            <div className="mt-auto">
                <div className="flex justify-between items-center mb-3">
                    <p className="text-sm font-medium text-text-gray">Live preview</p>
                </div>
                <div className="border border-secondary bg-bg-gray rounded-3xl p-5 mb-4 shadow-sm">
                    <p className="text-text-primary text-sm leading-relaxed font-medium">
                        &quot;Hi there — thanks for taking a few minutes to help us improve urban e-mobility. This session should take about 8–10 minutes. We&apos;ll ask about your routes, charging habits, and what would make Aurora genuinely useful for you.&quot;
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <BorderButton className={"flex items-center gap-2 text-text-primary text-sm font-medium px-4 py-2 border border-secondary rounded-full hover:bg-gray-50 transition-colors shadow-sm bg-white w-fit !text-sm"}>
                        <FiRefreshCw className="w-4 h-4 text-gray-500" />
                        Regenerate preview
                    </BorderButton>
                    <button className="text-primary  text-sm font-semibold hover:underline">
                        Reset to default tone
                    </button>
                </div>
            </div>
        </div>
    );
}
