"use client";

import { useState } from "react";
import { FiMessageSquare } from "react-icons/fi";

export default function ToneCard() {
    const [tone, setTone] = useState("Professional, friendly");

    return (
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E0F2FE] flex items-center justify-center shrink-0">
                        <FiMessageSquare className="w-6 h-6 text-[#0BA5EC]" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 leading-tight">Tone & writing style</h2>
                        <p className="text-gray-500 text-sm mt-1">How the assistant speaks to candidates.</p>
                    </div>
                </div>
                <span className="bg-[#E0F2FE] text-[#0BA5EC] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Voice
                </span>
            </div>

            <div className="flex flex-col xl:flex-row gap-10">
                <div className="flex-1">
                    <div className="mb-6">
                        <label className="block text-sm font-bold text-gray-900 mb-1">Tone</label>
                        <p className="text-gray-500 text-xs mb-3">Choose the overall personality.</p>
                        <div className="relative">
                            <select
                                value={tone}
                                onChange={(e) => setTone(e.target.value)}
                                className="w-full appearance-none bg-[#F9FAFB] border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#3E63DD]/20 focus:border-[#3E63DD] cursor-pointer"
                            >
                                <option>Professional, friendly</option>
                                <option>Casual, warm</option>
                                <option>Direct, concise</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-900 mb-1">Key rules</label>
                        <div className="bg-[#F2F8FD] border border-[#d1e9ff]/60 rounded-2xl p-4 min-h-[100px]">
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Short, clear sentences. Avoid jargon.<br />
                                Warm and respectful. No emojis.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-bold text-gray-900 mb-1">Preview</label>
                    <p className="text-gray-500 text-xs mb-3">Example using current settings.</p>
                    <div className="bg-[#F9FAFB] border border-gray-100 rounded-2xl p-6">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Candidate preview</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            &quot;To get started, could you briefly describe what your product does and who it is for? We&apos;ll ask a few follow-up questions after this.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
