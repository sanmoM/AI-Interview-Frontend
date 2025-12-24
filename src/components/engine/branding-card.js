"use client";

import { useState } from "react";
import { FiUploadCloud, FiTrash2 } from "react-icons/fi";
import { IoColorPaletteOutline, IoImageOutline } from "react-icons/io5";

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
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0">
                        <IoColorPaletteOutline className="w-6 h-6 text-[#0BA5EC]" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 leading-tight">Branding</h2>
                        <p className="text-gray-500 text-sm mt-1">Logo and colors that appear across the interview.</p>
                    </div>
                </div>
                <span className="bg-[#E0F2FE] text-[#0BA5EC] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Candidate-facing
                </span>
            </div>

            <div className="flex flex-col xl:flex-row gap-10">
                {/* Logo Section */}
                <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900 mb-1">Logo</p>
                    <p className="text-gray-500 text-xs mb-4">Shown on all interview screens.</p>

                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-2xl bg-[#87CEEB] flex items-center justify-center text-[#1e3a8a] text-2xl font-bold border border-black/5 shadow-inner">
                            VP
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <p className="text-sm font-bold text-gray-900">Venture logo</p>
                            <p className="text-gray-400 text-xs">PNG or SVG, square, transparent background.</p>
                            <div className="flex items-center gap-4 mt-1">
                                <button className="flex items-center gap-2 bg-[#344054] hover:bg-[#1D2939] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-colors shadow-sm">
                                    <FiUploadCloud className="w-4 h-4" />
                                    Upload logo
                                </button>
                                <button className="text-gray-400 hover:text-red-500 text-xs font-medium transition-colors">
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Colors Section */}
                <div className="flex-[1.5]">
                    <p className="text-sm font-bold text-gray-900 mb-1">Colors</p>
                    <p className="text-gray-500 text-xs mb-4">Fast presets for primary, secondary, and accent.</p>

                    <div className="flex gap-4">
                        <div className="flex-1 bg-[#F9FAFB] border border-gray-200 rounded-2xl p-3 relative group focus-within:ring-2 focus-within:ring-[#3E63DD]/20 focus-within:border-[#3E63DD]">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
