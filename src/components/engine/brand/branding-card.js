"use client";

import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoColorPaletteOutline } from "react-icons/io5";
import InnerDivHeader from "../../shared/inner-div-header";
import InnerWrapper from "../../shared/wrapper/inner-wrapper";
import Button from "../../ui/buttons/button";
import Color from "./components/color";
import TitleSubtitle from "../shared/title-subtitle";

function ColorInput({ label, color, hex, onChange }) {
    return (
        <div className="flex-1 min-w-[140px] bg-[#F9FAFB] border border-gray-200 rounded-xl p-3 flex flex-col gap-2 relative group focus-within:ring-2 focus-within:ring-[#3E63DD]/20 focus-within:border-[#3E63DD]">
            <label className="text-xs font-semibold text-gray-700">{label}</label>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-2 py-1.5 shadow-sm">
                <div
                    className="w-5 h-5 rounded-full border border-black/5 shrink-0"
                    style={{ backgroundColor: color }}
                />
                <input
                    type="text"
                    value={hex}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full text-xs font-medium text-gray-600 focus:outline-none uppercase"
                />
            </div>
        </div>
    );
}

export default function BrandingCard() {
    const [colors, setColors] = useState({
        primary: { color: "#304E77", hex: "#304E77" }, // Using dark blue from screenshot visual
        secondary: { color: "#87CEEB", hex: "#87CEEB" },
        accent: { color: "#F0F9FF", hex: "#1D1F28" } // Placeholder hex
    });

    return (
        <InnerWrapper>
            <InnerDivHeader
                Icon={IoColorPaletteOutline}
                title="Branding"
                description="Logo and colors that appear across the interview."
                badgeLabel="Candidate-facing"
                containerClassName={"mb-6 md:mb-0"}
            />

            <div className="flex flex-col xl:flex-row gap-10">
                {/* Logo Section */}
                <div className="flex-1">
                    <TitleSubtitle title="Logo" description="Shown on all interview screens." />

                    <div className="flex lg:items-center gap-4">
                        <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-2xl bg-[#87CEEB] flex items-center justify-center text-[#1e3a8a] text-xl md:text-2xl border border-black/5 shadow-inner">
                            VP
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <p className="text-sm 2xl:text-base text-text-primary font-medium">Venture logo</p>
                            <p className="text-text-gray text-xs ">PNG or SVG, square, transparent background.</p>
                            <div className="flex items-center gap-4 mt-1">
                                <Button className="flex items-center gap-2 justify-center !py-1.5 lg:!py-2 w-fit px-4 !text-sm">
                                    <FiUploadCloud className="w-4 h-4" />
                                    Upload logo
                                </Button>
                                <button className="text-text-gray hover:text-red-500 text-xs font-medium transition-colors">
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Colors Section */}
                <div className="flex-[1.5]">
                    <TitleSubtitle title="Colors" description="Fast presets for primary, secondary, and accent." />

                    <div className="flex overflow-x-auto scrollbar-hide gap-4">
                        {/* <div className="flex-1 bg-[#F9FAFB] border border-gray-200 rounded-2xl p-3 relative group focus-within:ring-2 focus-within:ring-[#3E63DD]/20 focus-within:border-[#3E63DD]">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-xs font-bold text-gray-700">Primary</label>
                                <div className="w-8 h-4 rounded-full bg-[#304E77]"></div>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                                <span className="text-gray-400 text-xs mr-1">#</span>
                                <input type="text" defaultValue="304E77" className="w-full text-xs font-medium text-gray-600 focus:outline-none uppercase" />
                            </div>
                        </div>

                        <div className="flex-1 bg-[#F9FAFB] border border-gray-200 rounded-2xl p-3 relative group focus-within:ring-2 focus-within:ring-[#3E63DD]/20 focus-within:border-[#3E63DD]">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-xs font-bold text-gray-700">Secondary</label>
                                <div className="w-8 h-4 rounded-full bg-[#87CEEB]"></div>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                                <span className="text-gray-400 text-xs mr-1">#</span>
                                <input type="text" defaultValue="87CEEB" className="w-full text-xs font-medium text-gray-600 focus:outline-none uppercase" />
                            </div>
                        </div>

                        <div className="flex-1 bg-[#F9FAFB] border border-gray-200 rounded-2xl p-3 relative group focus-within:ring-2 focus-within:ring-[#3E63DD]/20 focus-within:border-[#3E63DD]">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-xs font-bold text-gray-700">Accent</label>
                                <div className="w-8 h-4 rounded-full bg-black"></div>
                            </div>
                            <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
                                <span className="text-gray-400 text-xs mr-1">#</span>
                                <input type="text" defaultValue="1D1F28" className="w-full text-xs font-medium text-gray-600 focus:outline-none uppercase" />
                            </div>
                        </div> */}
                        <Color title="Primary" color="#304E77" />
                        <Color title="Secondary" color="#87CEEB" />
                        <Color title="Accent" color="#1D1F28" />
                    </div>
                </div>
            </div>
        </InnerWrapper>
    );
}
