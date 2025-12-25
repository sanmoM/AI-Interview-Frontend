import React from 'react';
import { FiFolder, FiUpload, FiFileText } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import SecondaryWrapper from '@/components/shared/wrapper/secondary-wrapper';
import InnerDivHeader from '@/components/shared/inner-div-header';
import InnerWrapper from '@/components/shared/wrapper/inner-wrapper';
import ContentWrapper from '@/components/shared/wrapper/content-wrapper';
import BorderButton from '@/components/ui/buttons/border-button';
import Button from '@/components/ui/buttons/button';
import TextAreaInput from '@/components/ui/inputs/text-area-input';
import BadgeWithText from '@/components/shared/badge-with-text';
import Badge from '@/components/ui/badge';

export default function QuestionsSidebar() {
    return (
        <SecondaryWrapper className={"!h-fit w-full 2xl:w-[470px] flex-shrink-0"}>
            <div className="flex flex-col gap-3">
                <InnerDivHeader
                    title="Question tools"
                    description="Upload knowledge, ask AI for drafts, and define how it should act."
                    badgeLabel="Editor view"
                    descriptionClassName="text-sm"
                    titleClassName="text-lg font-normal"
                    containerClassName={"!mb-0"}
                />

                <ContentWrapper className="bg-white relative overflow-hidden bg-bg-gray">
                    <div className="relative z-0">
                        <div className="flex items-start gap-3 mb-4 mt-2">
                            <div className="mt-1 text-primary">
                                <FiFolder size={20} />
                            </div>
                            <div>
                                <h4 className="text-text-primary">Knowledge file</h4>
                                <p className="text-xs text-text-gray mt-0.5 leading-relaxed pr-8">
                                    Upload decks, PDFs, or docs to ground the interview.
                                </p>
                            </div>
                        </div>
                        <BorderButton className={"flex items-center gap-2 !text-sm mb-2 bg-white w-fit px-4 mx-auto"}>
                            <FiUpload size={16} />
                            Upload knowledge file
                        </BorderButton>

                        <p className="text-xs text-text-gray mb-4">Supported: PDF, PPTX, DOCX, up to 20MB.</p>

                        <div className="p-4 border border-dashed border-blue-200 rounded-2xl md:rounded-4xl bg-white flex items-start gap-3">
                            <div className="p-2 bg-secondary rounded-lg text-primary shrink-0">
                                <FiFileText size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">No file uploaded yet</p>
                                <p className="text-xs text-text-gray mt-0.5 leading-relaxed">
                                    Your latest knowledge file will appear here once added.
                                </p>
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
                <ContentWrapper className={"bg-white"}>
                    <div className="flex items-start gap-3 mb-3">
                        <div className="mt-1 text-blue-600">
                            <BsStars size={18} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">AI suggest questions</h3>
                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">Generate or improve questions based on your knowledge file and venture goals.</p>
                        </div>
                    </div>
                    <Button className={"flex items-center gap-2 !text-sm"}>
                        <BsStars size={16} />
                        AI suggest
                    </Button>
                </ContentWrapper>

                <ContentWrapper className={""}>
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="font-semibold text-gray-900">How should AI act?</h3>
                            <p className="text-xs text-gray-500 mt-0.5">High-level behavior for this interview flow.</p>
                        </div>
                        <Badge status='blue' className="text-[10px] py-1 px-2">
                            AI mode
                        </Badge>
                    </div>
                    <TextAreaInput
                        size='xs'
                        inputClassName={"h-24 lg:h-28 2xl:h-32 resize-none bg-white"}
                        placeholder="System prompt"
                    />

                    <div className="flex justify-between items-center pt-3 border-t border-gray-50">
                        <p className="text-xs text-text-gray leading-tight max-w-[60%]">
                            These rules come from tone & writing style. Adjust them there if needed.
                        </p>
                        <button className="text-xs font-semibold text-primary hover:underline">
                            Open AI behavior
                        </button>
                    </div>
                </ContentWrapper>

                <div className="flex items-start justify-between mt-2 px-1">
                    <BadgeWithText
                        containerClassName={"justify-between lg:gap-10"}
                        badgeLabel="12 questions in this flow"
                        text="Select any question to refine it on the right."
                    />
                </div>
            </div>
        </SecondaryWrapper>
    );
}
