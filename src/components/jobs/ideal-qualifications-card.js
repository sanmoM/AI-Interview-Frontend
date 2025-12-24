"use client";

import InnerDivHeader from "@/components/shared/inner-div-header";
import ContentWrapper from "@/components/shared/wrapper/content-wrapper";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import { FiPlus } from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";
import Badge from "../ui/badge";
import BorderButton from "../ui/buttons/border-button";
import TextInput from "../ui/inputs/text-input";

function QualificationItem({ text }) {
    return (
        <ContentWrapper className="flex justify-between items-start border border-[#B9E6FE] bg-white rounded-3xl p-4 md:p-5 hover:border-[#0BA5EC] hover:shadow-sm transition-all group">
            <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 group-hover:bg-[#0BA5EC] transition-colors"></div>
                <p className="text-sm font-bold text-gray-900 leading-relaxed max-w-md">
                    {text}
                </p>
            </div>
            <button className="text-gray-400 text-xs font-bold hover:text-[#0BA5EC] transition-colors">
                Edit
            </button>
        </ContentWrapper>
    )
}

export default function IdealQualificationsCard() {
    return (
        <InnerWrapper>
            <InnerDivHeader
                Icon={IoSchoolOutline}
                title="Ideal qualifications"
                description="What makes a strong fit for this role."
                badgeLabel="Candidate-facing"
            />

            <div className="mb-4 md:mb-6 space-y-4">
                <QualificationItem text="Experience working with AI tools, developer workflows, or technical support." />
                <QualificationItem text="Strong written communication skills and comfort summarizing complex topics." />
                <QualificationItem text="Ability to follow structured rubrics while applying sound judgment." />
                <QualificationItem text="Reliable internet connection and 8–15 hours per week of availability." />
            </div>

            <div className="flex flex-col md:flex-row gap-3 mb-2">
                {/* <input
                    type="text"
                    placeholder="Add another qualification..."
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#3E63DD]/20 focus:border-[#3E63DD] transition-all"
                /> */}
                <TextInput placeholder="Add another qualification" containerClassName={"flex-1"} />
                {/* <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-600 text-sm font-bold px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors shrink-0">
                    <FiPlus className="w-4 h-4" /> Add
                </button> */}
                <BorderButton className="flex items-center gap-2 px-5 py-2 text-sm font-semibold w-fit mx-auto md:mx-0">
                    <FiPlus className="w-4 h-4" /> Add
                </BorderButton>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-2 mt-3 justify-between items-center px-1 ">
                <p className="text-gray-400 text-xs font-medium text-center">Use short, scannable bullets (4–7 total)</p>
                <Badge status="gray" className={"py-0.5 text-xs"}>Shown in job description</Badge>
            </div>

        </InnerWrapper>
    );
}
