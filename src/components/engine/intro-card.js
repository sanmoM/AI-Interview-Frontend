"use client";

import { useState } from "react";
import { FiPlayCircle, FiPlus, FiEye, FiEdit3 } from "react-icons/fi";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function IntroCard() {
    const [activePreview, setActivePreview] = useState("Intro");

    return (
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0">
                        <IoPlayCircleOutline className="w-7 h-7 text-[#0BA5EC]" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 leading-tight">Intro & outro</h2>
                        <p className="text-gray-500 text-sm mt-1">What candidates see at the beginning and end.</p>
                    </div>
                </div>
                <span className="bg-[#E0F2FE] text-[#0BA5EC] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Experience
                </span>
            </div>

            {/* Messages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Intro Message */}
                <div className="border border-[#7EA5F4] bg-[#F5F8FF] rounded-2xl p-4 relative">
                    <span className="absolute top-4 right-4 bg-[#b2ddff] text-[#175CD3] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        First screen
                    </span>
                    <p className="text-sm font-bold text-gray-900 mb-1">Intro message</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Welcome to the {"{{venture_name}}"} interview. This will take around {"{{duration_minutes}}"} minutes.
                    </p>
                </div>

                {/* Outro Message */}
                <div className="border border-gray-200 bg-white rounded-2xl p-4 relative">
                    <span className="absolute top-4 right-4 bg-[#b2ddff] text-[#175CD3] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Thank you
                    </span>
                    <p className="text-sm font-bold text-gray-900 mb-1">Outro message</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Thank you for sharing your venture, {"{{founder_first_name}}"}. We&apos;ll review your answers and follow up soon.
                    </p>
                </div>
            </div>

            {/* Media Section */}
            <div className="mb-8">
                <p className="text-sm font-bold text-gray-900 mb-1">Media (optional)</p>
                <p className="text-gray-500 text-xs mb-3">Add a light visual layer.</p>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 bg-[#BAE6FD] text-[#026AA2] text-xs font-bold px-4 py-2 rounded-full hover:bg-[#7CD4FD] transition-colors">
                        <FiPlus className="w-3.5 h-3.5" /> Cover image
                    </button>
                    <button className="flex items-center gap-2 border border-gray-300 text-gray-600 text-xs font-bold px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">
                        <FiPlus className="w-3.5 h-3.5" /> Intro video
                    </button>
                    <button className="flex items-center gap-2 border border-gray-300 text-gray-600 text-xs font-bold px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">
                        <FiPlus className="w-3.5 h-3.5" /> Thank-you card
                    </button>
                </div>
            </div>

            {/* Quick Preview */}
            <div className=" rounded-2xl p-1">
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex bg-gray-100 p-1 rounded-full border border-gray-200">
                        <button
                            onClick={() => setActivePreview("Intro")}
                            className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${activePreview === "Intro" ? "bg-[#344054] text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                        >
                            Intro
                        </button>
                        <button
                            onClick={() => setActivePreview("Outro")}
                            className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${activePreview === "Outro" ? "bg-[#344054] text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                        >
                            Outro
                        </button>
                    </div>
                    <span className="ml-auto bg-[#F2F4F7] text-gray-500 text-[10px] font-bold px-2 py-1 rounded md:rounded-full">
                        Uses current branding & tone
                    </span>
                </div>

                <div className="bg-[#F9FAFB] rounded-2xl p-6 mb-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Quick preview</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        &quot;Welcome to the {"{{venture_name}}"} interview. This should take about {"{{duration_minutes}}"} minutes. You can pause and return at any time.&quot;
                    </p>
                </div>

                <div className="flex justify-end gap-3">
                    <button className="flex items-center gap-2 border border-gray-300 text-gray-600 text-xs font-bold px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                        Edit intro / outro
                    </button>
                    <button className="flex items-center gap-2 bg-[#344054] hover:bg-[#1D2939] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors shadow-sm">
                        <FiEye className="w-3.5 h-3.5" />
                        Full preview
                    </button>
                </div>
            </div>
        </div>
    );
}
