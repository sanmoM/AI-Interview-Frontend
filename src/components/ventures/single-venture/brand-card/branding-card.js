"use client";

import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import InnerDivHeader from "@/components/shared/inner-div-header";
import Avatar from "@/components/ui/avatar";
import { useState } from "react";
import { IoColorPaletteOutline } from "react-icons/io5";
import Color from "./components/color";
import ContentWrapper from "@/components/shared/wrapper/content-wrapper";

export default function BrandingCard() {
    const [selectedColor, setSelectedColor] = useState("primary");

    return (
        <InnerWrapper className={""}>
            <InnerDivHeader
                Icon={IoColorPaletteOutline}
                title="Branding"
                description="Logo, colors, and wording applied to this venture."
                badgeLabel="Editable"
                containerClassName={"mb-6 md:mb-0"}
            />

            <div className="flex flex-col 2xl:flex-row gap-4 md:gap-8 mb-4 md:mb-8 ">
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
                <ContentWrapper>
                    <p className="text-text-gray text-xs md:text-sm font-medium leading-relaxed">
                        &quot;Interview&quot; → &quot;Session&quot; · &quot;Candidate&quot; → &quot;Driver&quot;. Update headings, button labels, and static helper copy to match Aurora&apos;s language.
                    </p>
                </ContentWrapper>
                <p className="text-text-gray font-medium text-xs mt-2">
                    This wording is used across the entire interview experience.
                </p>
            </div>
        </InnerWrapper>
    );
}
