"use client";

import Avatar from "@/components/ui/avatar";
import { useState } from "react";
import { IoColorPaletteOutline } from "react-icons/io5";
import Color from "./components/color";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";

export default function BrandingCard() {
    const [selectedColor, setSelectedColor] = useState("primary");

    return (
        <InnerWrapper>
            <div>
                <div className="flex justify-between items-center md:items-start mb-3 md:mb-6">
                    <div className="flex items-center md:items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0">
                            <IoColorPaletteOutline className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 leading-tight">Branding</h2>
                            <p className="text-text-gray text-sm mt-0.5 hidden md:block">Logo, colors, and wording applied to this venture.</p>
                        </div>
                    </div>
                    <span className="bg-secondary text-primary text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                        Editable
                    </span>
                </div>
                <p className="text-text-gray text-sm md:hidden">Logo, colors, and wording applied to this venture.</p>
            </div>

            <div className="flex flex-col xl:flex-row gap-4 md:gap-8 mb-4 md:mb-8 mt-4 md:mt-0">
                {/* Logo Section */}
                <div className="flex-1 min-w-[120px]">
                    <p className="text-sm font-medium text-text-gray mb-3">Logo</p>
                    <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-100 mb-3 relative shadow-sm">
                        <Avatar size="xl" />
                    </div>
                    <p className="text-text-gray text-xs leading-relaxed font-medium">
                        Shown on all candidate-facing screens and emails.
                    </p>
                </div>

                {/* Color Theme Section */}
                <div className="flex-2">
                    <p className="text-sm font-medium text-text-gray mb-3">Color theme</p>
                    <div className="flex gap-2 md:gap-3 mb-3 flex-wrap">
                        <Color color="#3E63DD" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
                        <Color color="#4B5563" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
                        <Color color="#87CEEB" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
                    </div>
                    <p className="text-text-gray font-medium text-xs">
                        Click any color chip to adjust the picker used for this venture.
                    </p>
                </div>
            </div>

            {/* Wording & Labels */}
            <div className="mt-auto">
                <p className="text-sm font-medium text-text-gray mb-3">Wording & labels</p>
                <div className="bg-bg-gray border border-secondary rounded-3xl p-2 md:p-4 mb-2">
                    <p className="text-text-gray text-xs md:text-sm font-medium leading-relaxed">
                        &quot;Interview&quot; → &quot;Session&quot; · &quot;Candidate&quot; → &quot;Driver&quot;. Update headings, button labels, and static helper copy to match Aurora&apos;s language.
                    </p>
                </div>
                <p className="text-text-gray font-medium text-xs">
                    This wording is used across the entire interview experience.
                </p>
            </div>
        </InnerWrapper>
    );
}
