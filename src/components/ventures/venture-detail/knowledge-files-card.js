"use client";

import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import SingleVentureInnerDivHeader from "@/components/single-venture/single-venture";
import BorderButton from "@/components/ui/buttons/border-button";
import { FiFolder, FiUploadCloud } from "react-icons/fi";

export default function KnowledgeFilesCard() {
    return (
        <InnerWrapper>
            <SingleVentureInnerDivHeader
                Icon={FiFolder}
                title="Knowledge files"
                description="Docs the assistant can reference during the interview."
                containerClassName={"mb-6 md:mb-0"}
                badgeLabel={"Linked"}
            />

            <div className="space-y-3 mb-6">
                {/* File Item 1 */}
                <div className="border border-secondary rounded-full p-4 bg-bg-gray flex justify-between items-center group hover:border-[#0BA5EC]/30 hover:bg-[#F0F9FF]/50 transition-all">
                    <div>
                        <h3 className="text-sm font-medium text-gray-900">City_Partnership_FAQ.xlsx</h3>
                        <p className="text-gray-500 text-xs mt-1">
                            Uploaded by Ops workspace · 320 KB · 34 rows indexed
                        </p>
                    </div>
                    <div className="flex gap-4 text-xs font-medium">
                        <button className="text-primary hover:underline transition-colors">Replace</button>
                        <button className="text-red-500 hover:underline transition-colors">Remove</button>
                    </div>
                </div>

                {/* File Item 2 */}
                <div className="border border-secondary rounded-full p-4 bg-bg-gray flex justify-between items-center group hover:border-[#0BA5EC]/30 hover:bg-[#F0F9FF]/50 transition-all">
                    <div>
                        <h3 className="text-sm font-medium text-gray-900">City_Partnership_FAQ.xlsx</h3>
                        <p className="text-gray-500 text-xs mt-1">
                            Uploaded by Ops workspace · 320 KB · 34 rows indexed
                        </p>
                    </div>
                    <div className="flex gap-4 text-xs font-medium">
                        <button className="text-primary hover:underline transition-colors">Replace</button>
                        <button className="text-red-500 hover:underline transition-colors">Remove</button>
                    </div>
                </div>
            </div>

            <BorderButton className="flex items-center justify-center gap-2 text- text-sm font-medium px-4 py-3  rounded-full w-fit !text-sm !py-2 !px-4">
                <FiUploadCloud className="w-5 h-5 text-text-gray" />
                Upload knowledge file
            </BorderButton>
        </InnerWrapper>
    );
}
