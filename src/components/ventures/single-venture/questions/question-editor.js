"use client"
import InnerDivHeader from '@/components/shared/inner-div-header';
import SecondaryWrapper from '@/components/shared/wrapper/secondary-wrapper';
import BorderButton from '@/components/ui/buttons/border-button';
import Button from '@/components/ui/buttons/button';
import SelectBox from '@/components/ui/inputs/select-box';
import TextAreaInput from '@/components/ui/inputs/text-area-input';
import React from 'react';
import { FiPlus, FiCopy, FiTrash2 } from "react-icons/fi";

export default function QuestionEditor() {
    return (
        <SecondaryWrapper>
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <InnerDivHeader
                    title="Editing question Q-01"
                    description="Describe your venture in one sentence."
                    descriptionClassName="text-sm"
                    titleClassName="text-lg font-normal"
                />
                <div className="flex items-center gap-3">
                    <Button className={"flex items-center gap-2 !text-sm px-3"}>
                        <FiPlus size={16} />
                        New question
                    </Button>
                    <BorderButton className={"flex items-center gap-2 !text-sm px-3"}>
                        <FiCopy size={16} />
                        Duplicate
                    </BorderButton>
                    <BorderButton className={"flex items-center gap-2 !text-sm px-3 border-red-500 text-red-500"}>
                        <FiTrash2 size={16} />
                        Delete
                    </BorderButton>
                </div>
            </div>

            {/* Editor Content */}
            <div className="space-y-6">

                {/* Variations */}
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group relative">
                            <TextAreaInput
                                label="Question text"
                                placeholder="Describe your venture in one sentence."
                                value="Describe your venture in one sentence."
                                onChange={() => { }}
                                inputClassName={"h-24 resize-none"}
                                size='sm'
                            />
                        </div>
                    ))}
                </div>

                {/* Settings */}
                <div className="grid grid-cols-2 gap-6 pt-2">
                    {/* <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Answer type</label>
                        <div className="relative">
                            <select className="appearance-none w-full p-3.5 border border-gray-200 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm font-medium">
                                <option>Long text response</option>
                                <option>Short text response</option>
                                <option>Multiple choice</option>
                                <option>Video response</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Required</label>
                        <div className="relative">
                            <select className="appearance-none w-full p-3.5 border border-gray-200 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm font-medium">
                                <option>Yes • must be answered</option>
                                <option>No • optional</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                    </div> */}
                    <SelectBox
                        label="Answer type"
                        options={[
                            { value: "Long text response", label: "Long text response" },
                            { value: "Short text response", label: "Short text response" },
                            { value: "Multiple choice", label: "Multiple choice" },
                            { value: "Video response", label: "Video response" },
                        ]}
                        size='sm'
                    />

                    <SelectBox
                        label="Required"
                        options={[
                            { value: "Yes • must be answered", label: "Yes • must be answered" },
                            { value: "No • optional", label: "No • optional" },
                        ]}
                        size="sm"
                    />
                </div>

                {/* Helper Text */}
                <div className="pt-2">
                    <TextAreaInput
                        label="Helper text"
                        placeholder="Optional guidance shown below the question"
                        size="sm"
                        inputClassName={"h-24 resize-none"}
                    />
                </div>
            </div>
        </SecondaryWrapper>
    );
}
