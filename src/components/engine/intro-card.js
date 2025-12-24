"use client";

import { useState } from "react";
import { FiEye, FiPlus } from "react-icons/fi";
import { IoPlayCircleOutline } from "react-icons/io5";
import InnerDivHeader from "../shared/inner-div-header";
import ContentWrapper from "../shared/wrapper/content-wrapper";
import Badge from "../ui/badge";
import Button from "../ui/buttons/button";
import TitleSubtitle from "./shared/title-subtitle";
import { cn } from "@/utils/cn";
import InnerWrapper from "../shared/wrapper/inner-wrapper";
import BorderButton from "../ui/buttons/border-button";

export default function IntroCard() {
    const [activePreview, setActivePreview] = useState("Intro");

    const [content, setContent] = useState("image");

    return (
        <InnerWrapper>
            <InnerDivHeader
                title="Intro & outro"
                description="What candidates see at the beginning and end."
                badgeLabel="Experience"
                Icon={IoPlayCircleOutline}
            />

            {/* Messages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <ContentWrapper className={"relative"}>
                    <Badge className={"absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"}>
                        First screen
                    </Badge>
                    <p className="text-sm font-bold text-gray-900 mb-1">Intro message</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Welcome to the {"{{venture_name}}"} interview. This will take around {"{{duration_minutes}}"} minutes.
                    </p>
                </ContentWrapper>
                <ContentWrapper className={"relative"}>
                    <Badge className={"absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"}>
                        First screen
                    </Badge>
                    <p className="text-sm font-bold text-gray-900 mb-1">Intro message</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Welcome to the {"{{venture_name}}"} interview. This will take around {"{{duration_minutes}}"} minutes.
                    </p>
                </ContentWrapper>
            </div>

            {/* Media Section */}
            <div className="mb-5">
                <TitleSubtitle title="Media (optional)" description="Add a light visual layer." />
                <div className="flex gap-2 flex-wrap">
                    <Button
                        variant="outline"
                        className={cn("flex items-center gap-2 justify-center !text-sm w-fit !py-1.5 px-4", content === "image" ? "bg-secondary text-primary hover:bg-secondary" : "border border-secondary bg-transparent text-text-gray bg-transparent hover:bg-transparent")}
                    >
                        <FiPlus className="w-3.5 h-3.5" /> Cover image
                    </Button>
                    <Button
                        variant="outline"
                        className={cn("flex items-center gap-2 justify-center !text-sm w-fit !py-1.5 px-4", content === "video" ? "bg-secondary text-primary hover:bg-secondary" : "border border-secondary bg-transparent text-text-gray bg-transparent hover:bg-transparent")}
                    >
                        <FiPlus className="w-3.5 h-3.5" /> Intro video
                    </Button>
                    <Button
                        variant="outline"
                        className={cn("flex items-center gap-2 justify-center !text-sm w-fit !py-1.5 px-4", content === "thank-you" ? "bg-secondary text-primary hover:bg-secondary" : "border border-secondary bg-transparent text-text-gray bg-transparent hover:bg-transparent")}
                    >
                        <FiPlus className="w-3.5 h-3.5" /> Thank-you card
                    </Button>
                </div>
            </div>

            {/* Quick Preview */}
            <div className=" rounded-2xl p-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="flex rounded-full gap-2">
                        <button
                            onClick={() => setActivePreview("Intro")}
                            className={`px-4 py-1 rounded-full text-sm transition-all ${activePreview === "Intro" ? "bg-primary text-white shadow-sm" : "text-text-gray bg-bg-gray hover:text-gray-700"}`}
                        >
                            Intro
                        </button>
                        <button
                            onClick={() => setActivePreview("Outro")}
                            className={`px-4 py-1 rounded-full text-sm transition-all ${activePreview === "Outro" ? "bg-primary text-white shadow-sm" : "text-text-gray bg-bg-gray hover:text-gray-700"}`}
                        >
                            Outro
                        </button>
                    </div>
                    <Badge status="gray" className={"md:ml-auto text-[10px] font-bold px-2 py-1 rounded md:rounded-full"}>
                        Uses current branding & tone
                    </Badge>
                </div>

                <ContentWrapper className={"border-none"}>
                    <p className="text-xs text-text-gray uppercase tracking-wide mb-2">Quick preview</p>
                    <p className="text-text-gray text-sm leading-relaxed font-medium">
                        &quot;Welcome to the {"{{venture_name}}"} interview. This should take about {"{{duration_minutes}}"} minutes. You can pause and return at any time.&quot;
                    </p>
                </ContentWrapper>

                <div className="flex flex-col lg:flex-row justify-end gap-3 mt-6">
                    <BorderButton className="!text-base lg:w-fit px-4 !py-1.5">
                        Edit intro / outro
                    </BorderButton>
                    <Button
                        variant="outline"
                        className={"flex items-center justify-center !text-base gap-2 lg:w-fit px-4 !py-1.5"}
                    >
                        <FiEye className="w-3.5 h-3.5" /> Full preview
                    </Button>
                </div>
            </div>
        </InnerWrapper>
    );
}
