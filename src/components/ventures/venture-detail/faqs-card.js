"use client";

import BorderButton from "@/components/ui/buttons/border-button";
import { FiHelpCircle, FiPlus } from "react-icons/fi";

export default function FAQsCard() {
    return (
        <div className="bg-white rounded-4xl p-6 lg:p-8 shadow-lg h-fit">
            <div className="flex justify-between mb-6">
                <div className="flex items-start gap-4 w-full">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <FiHelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 w-full">
                            <h2 className="text-lg font-semibold text-text-primary leading-tight">FAQs</h2>
                            <span className="bg-secondary text-primary text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                                18 items
                            </span>
                        </div>
                        <p className="text-text-gray text-sm mt-0.5">Venture-specific questions candidates can search.</p>
                    </div>
                </div>
            </div>

            <div className="space-y-4 mb-6">
                {/* FAQ Item 1 */}
                <div className="border border-secondary rounded-4xl p-4 bg-[#F8FAFC]">
                    <div className="flex justify-between items-start mb-1.5">
                        <h3 className="text-sm font-semibold text-text-primary pr-4">How is my trip data stored and used?</h3>
                        <span className="bg-secondary text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shrink-0">
                            Data & privacy
                        </span>
                    </div>
                    <p className="text-text-gray text-sm mb-3 line-clamp-2 leading-relaxed">
                        We log routes and charging events in an aggregated way. Personal identifiers are separated from raw telemetry...
                    </p>
                    <div className="flex gap-4 text-xs font-medium">
                        <button className="text-primary cursor-pointer hover:underline transition-colors">Edit</button>
                        <button className="text-primary cursor-pointer hover:underline transition-colors">Change category</button>
                        <button className="text-red-500 cursor-pointer hover:underline transition-colors">Delete</button>
                    </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="border border-gray-200 rounded-2xl p-4 bg-[#F8FAFC]">
                    <div className="flex justify-between items-start mb-1.5">
                        <h3 className="text-sm font-semibold text-gray-900 pr-4">Which cities are currently supported?</h3>
                        <span className="bg-[#E0F2FE] text-[#0BA5EC] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shrink-0">
                            Product scope
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                        Aurora is live in three EU metros and onboarding two LATAM cities. You can always see the latest coverage on...
                    </p>
                    <div className="flex gap-4 text-xs font-medium">
                        <button className="text-[#3E63DD] hover:text-[#2d4bba] hover:underline transition-colors">Edit</button>
                        <button className="text-[#3E63DD] hover:text-[#2d4bba] hover:underline transition-colors">Change category</button>
                        <button className="text-red-500 hover:text-red-600 hover:underline transition-colors">Delete</button>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center">
                <BorderButton className="flex w-fit items-center gap-2 text-text-gray font-medium px-4 py-2 rounded-full hover:bg-gray-50 transition-colors !text-[13px]">
                    <FiPlus className="w-4 h-4 text-text-gray" />
                    Add FAQ
                </BorderButton>
                <button className="text-primary text-sm font-semibold hover:underline cursor-pointer">
                    Manage categories
                </button>
            </div>
        </div>
    );
}
