"use client";

import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import InnerDivHeader from "@/components/shared/inner-div-header";
import BorderButton from "@/components/ui/buttons/border-button";
import { FiFolder, FiUploadCloud } from "react-icons/fi";
import FIleCard from "./components/file-card";

export default function Knowledge() {
    return (
        <InnerWrapper>
            <InnerDivHeader
                Icon={FiFolder}
                title="Knowledge files"
                description="Docs the assistant can reference during the interview."
                containerClassName={"mb-6 md:mb-0"}
                badgeLabel={"Linked"}
            />

            <div className="space-y-3 mb-6">

                <FIleCard
                    title="City_Partnership_FAQ.xlsx"
                    description="Uploaded by Ops workspace · 320 KB · 34 rows indexed"
                    replace="Replace"
                    remove="Remove"
                />

                <FIleCard
                    title="City_Partnership_FAQ.xlsx"
                    description="Uploaded by Ops workspace · 320 KB · 34 rows indexed"
                    replace="Replace"
                    remove="Remove"
                />
            </div>

            <BorderButton className="flex items-center justify-center gap-2 text- text-sm font-medium px-4 py-3  rounded-full w-fit !text-sm !py-2 !px-4">
                <FiUploadCloud className="w-5 h-5 text-text-gray" />
                Upload knowledge file
            </BorderButton>
        </InnerWrapper>
    );
}
