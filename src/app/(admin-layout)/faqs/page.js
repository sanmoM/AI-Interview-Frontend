"use client";

import Wrapper from "@/components/shared/wrapper";
import BorderButton from "@/components/ui/buttons/border-button";
import Button from "@/components/ui/buttons/button";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import Searchbox from "@/components/ui/inputs/searchbox";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { FiEdit2, FiPlus, FiTrash2 } from "react-icons/fi";

const FAQ_DATA = [
  {
    id: 1,
    question: "What is this interview about?",
    answer: "Short overview of the venture profile interview and what we use it for.",
    category: "General",
    tags: ["overview", "purpose", "interview"],
  },
  {
    id: 2,
    question: "How long does the interview take?",
    answer: "Give candidates a realistic time estimate so they can plan ahead.",
    category: "Logistics",
    tags: ["duration", "timing"],
  },
  {
    id: 3,
    question: "What do I need to prepare?",
    answer: "Outline any materials, documents, or setup recommended before starting.",
    category: "Process",
    tags: ["prep", "requirements"],
  },
  {
    id: 4,
    question: "What if I lose connection during the interview?",
    answer: "Explain how answers are saved and how to resume if something goes wrong.",
    category: "Technical",
    tags: ["connection", "network", "error"],
  },
];

const FILTERS = ["All FAQs", "General", "Process", "Technical", "Logistics"];

const CATEGORY_COLORS = {
  General: "text-[#304E77]",
  Logistics: "text-[#87CEEB]",
  Process: "text-[#E6B800]",
  Technical: "text-[#28A745]",
};

export default function FAQPage() {
  const [activeFilter, setActiveFilter] = useState("All FAQs");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = FAQ_DATA.filter((item) => {
    const matchesFilter =
      activeFilter === "All FAQs" || item.category === activeFilter;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  return (
    <Wrapper className="shadow-[#00000025]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <SectionHeading>
          FAQ set
        </SectionHeading>
        <Button size="md" className="flex items-center gap-2 w-fit px-4 !py-1.5">
          <FiPlus className="w-5 h-5" />
          Add FAQ
        </Button>
      </div>
      <SubHeading className={"max-w-4xl mb-8"}>
        Manage the FAQs used for this venture's candidates. Add common questions,
        organize them by category, and keep everything searchable for quick
        reference.
      </SubHeading>

      {/* Controls */}
      <div className="flex flex-col 2xl:flex-row justify-between 2xl:items-center gap-4 mb-8">
        {/* Filters */}
        <div className="flex flex-col 2xl:flex-row 2xl:items-center gap-2">
          <p className="text-text-gray font-medium text-nowrap hidden 2xl:block">Filter by category : </p>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-1.5 rounded-full border font-medium transition-colors cursor-pointer text-sm md:text-base",
                  activeFilter === filter
                    ? "bg-primary text-white"
                    : "text-text-gray border-secondary"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <Searchbox
          placeholder="Search FAQs by question or keyword"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          containerClassName={"w-full 2xl:w-fit md:min-w-sm"}
          size="md"
        />
      </div>

      {/* FAQ Card */}
      <div className="border border-[#87CEEB] rounded-3xl p-3 md:p-8 bg-white shadow-sm mb-8">
        <div className="flex justify-between items-start md:mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">FAQs for this venture</h2>
            <p className="text-text-gray text-sm">
              These questions appear in the candidate help panel and search
              results during the interview experience.
            </p>
          </div>
          <span className="bg-secondary text-[10px] text-nowrap md:text-xs font-bold px-2 py-1 rounded-full text-primary ">
            {filteredData.length} FAQs
          </span>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 text-xs font-medium text-text-gray border-b border-gray-100 pb-2 mb-4">
          <div className="col-span-6">Question</div>
          <div className="col-span-2 text-center">Category</div>
          <div className="col-span-3">Search tags</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredData.map((faq) => (
            <div
              key={faq.id}
              className="group flex flex-col md:grid md:grid-cols-12 gap-4 items-center even:bg-bg-gray md:bg-transparent p-4 md:p-3 rounded-2xl transition-colors"
            >
              {/* Question */}
              <div className="col-span-6 w-full">
                <h3 className="font-medium text-text-primary mb-1  md:text-lg">
                  {faq.question}
                </h3>
                <p className="text-text-gray text-xs md:text-sm">{faq.answer}</p>
              </div>

              {/* Category */}
              <div className="col-span-2 text-center w-full md:w-auto flex md:block justify-start text-xs md:text-sm">
                <span className={cn("font-medium", CATEGORY_COLORS[faq.category] || "text-text-gray")}>
                  {faq.category}
                </span>
              </div>

              {/* Tags */}
              <div className="col-span-3 text-text-gray text-sm hidden md:block">
                {faq.tags.join(", ")}
              </div>

              {/* Actions */}
              <div className="col-span-1 flex justify-end gap-3 w-full md:w-auto">
                <button className="text-text-gray hover:text-[#304E77] transition-colors">
                  <FiEdit2 className="w-5 h-5" />
                </button>
                <button className="text-text-gray hover:text-red-500 transition-colors">
                  <FiTrash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Area inside Card */}
        <div className="mt-8 pt-6 border-t border-dashed border-[#87CEEB]/50">
          <p className="text-text-gray text-sm text-center md:text-left">
            Need more coverage? Add FAQs for edge-cases like accessibility, data
            handling, or scheduling conflicts. SEARCHABLE Categories and tags
            make these FAQs instantly searchable from the candidate help drawer.
          </p>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="flex justify-end gap-4">
        <BorderButton size="md" className="flex items-center gap-2 w-fit px-4 !py-1.5">
          Back
        </BorderButton>
        <Button size="md" className="flex items-center gap-2 w-fit px-4 !py-1.5">
          Save & continue
        </Button>
      </div>
    </Wrapper>
  );
}
