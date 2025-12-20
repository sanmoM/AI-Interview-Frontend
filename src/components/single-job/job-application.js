"use client";

import { useState } from "react";
import { LuClock4, LuEarth } from "react-icons/lu";
import Wrapper from "../shared/wrapper";
import Button from "../ui/buttons/button";

export default function JobApplication() {
  const [activeFilter, setActiveFilter] = useState("Best match");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className={"lg:flex-1 flex flex-col gap-4"}>
      {/* Breadcrumb header */}
      <div className="">
        <p className="text-sm text-gray-500 flex flex-col md:flex-row gap-1 md:justify-between">
          <span>Senior/Staff Code Review Experts • Application</span>
          <span className="">Hourly contract • Remote</span>
        </p>
      </div>
      <Wrapper>
        <div className="mx-auto">
          {/* Job title and badges */}
          <div className="mb-6">
            <h1 className="mb-3 text-xl  md:text-2xl 2xl:text-3xl font-bold text-text-primary">
              Senior/Staff Code Review Experts
            </h1>
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-secondary text-text-gray bg-white px-3 py-1 text-[10px] md:text-sm text-gray-700">
                <LuClock4 className="w-2 h-2 md:w-3 md:h-3 lg:h-4 lg:w-4" />
                Hourly contract
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-secondary text-text-gray bg-white px-3 py-1 text-[10px] md:text-sm text-gray-700">
                <LuEarth className="w-2 h-2 md:w-3 md:h-3 lg:h-4 lg:w-4" />
                Remote
              </span>
            </div>
          </div>

          {/* Posted by section */}
          <div className="mb-4 lg:mb-8 flex flex-col md:flex-row lg:items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary font-semibold">
                AI
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Posted by AI interview
                </p>
                <p className="text-sm text-gray-500">AIinterview.com</p>
              </div>
            </div>
            <button className="text-xs font-medium py-1 px-3 rounded-full bg-green-100 text-green-600 hover:text-green-700 w-fit lg:w-auto mt-3 lg:mt-0">
              Open to applications
            </button>
          </div>

          {/* Application progress card */}
          <div className="mb-4 lg:mb-8 rounded-lg lg:rounded-2xl bg-bg-gray p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-text-primary">Application</h2>
              <p className="text-sm text-text-gray">0 of 2 steps completed</p>
            </div>

            <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-full bg-secondary transition-all" />
            </div>

            <p className="mb-4 text-sm text-text-gray">Not started</p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                  <span className="text-text-gray text-[10px] md:text-base">
                    Resume
                  </span>
                </div>
                <span className="text-sm text-text-gray text-[10px] md:text-base">
                  Not done
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                  <span className="text-text-gray text-[10px] md:text-base">
                    Code Review Session
                  </span>
                </div>
                <span className="text-sm text-text-gray text-[10px] md:text-base">
                  Not done
                </span>
              </div>
            </div>
            <Button className={"lg:py-2"}>Start Application</Button>
          </div>
          <div className="border-b my-4 lg:my-6 border-secondary" />

          {/* Role overview */}
          <div className="mb-4 lg:mb-8">
            <h2 className="mb-1 lg:mb-3 text-lg font-medium text-text-primary">
              Role overview
            </h2>
            <p className="text-text-gray leading-relaxed text-sm lg:text-base">
              This short-term, fully remote engagement helps shape the future of
              developer-assisting AI systems. You will review long-form
              transcripts between users and AI coding assistants, analyze the
              AI's logic, and document actionable feedback.
            </p>
          </div>

          {/* Key responsibilities */}
          <div className="mb-4 lg:mb-8">
            <h2 className="mb-1 lg:mb-3 text-lg font-medium text-text-primary">
              Key responsibilities
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-text-gray text-sm lg:text-base">
              <li>
                Review code transcripts and identify strengths, gaps, and
                potential issues.
              </li>
              <li>Score each transcript using a 10-point rubric.</li>
              <li>Write concise justifications with concrete examples.</li>
              <li>Detect mismatches between claims and actions.</li>
            </ul>
          </div>

          {/* Key responsibilities */}
          <div className="mb-4 lg:mb-8">
            <h2 className="mb-1 lg:mb-3 text-lg font-medium text-text-primary">
              Ideal qualifications
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-text-gray text-sm lg:text-base">
              <li>
                Senior or Staff engineers with deep code review experience and
                execution insight.
              </li>
              <li>
                Strong written communication and consistency-checking habits.
              </li>
              <li>
                Comfortable with backend or full-stack development and modern
                tooling.
              </li>
            </ul>
          </div>

          {/* Key responsibilities */}
          <div className="mb-4 lg:mb-8">
            <h2 className="mb-1 lg:mb-3 text-lg font-medium text-text-primary">
              More about the opportunity
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-text-gray text-sm lg:text-base">
              <li>
                Flexible, task-based engagement that fits your own schedule.
              </li>
              <li>
                Must complete each transcript batch within 5 hours of starting.
              </li>
              <li>
                Payments issued weekly via Stripe Connect for completed work.
              </li>
            </ul>
          </div>

          {/* Key responsibilities */}
          <div className="mb-4 lg:mb-8">
            <h2 className="mb-1 lg:mb-3 text-lg font-medium text-text-primary">
              Compensation & contract terms
            </h2>
            <p className="space-y-2 text-text-gray text-sm lg:text-base">
              Competitive hourly ranges depend on geography and experience.
              Contractors are classified as independent service providers.
            </p>
          </div>

          {/* Key responsibilities */}
          <div className="mb-4 lg:mb-8">
            <h2 className="mb-1 lg:mb-3 text-lg font-medium text-text-primary">
              Application process
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-text-gray text-sm lg:text-base">
              <li>Submit your resume to begin.</li>
              <li>
                If selected, you will receive rubric documentation and access to
                the evaluation platform.
              </li>
              <li>Most applicants hear back within a few business days.</li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <h2 className="mb-1 lg:mb-3 text-lg font-medium text-text-primary">
              Friendly Ask Question
            </h2>

            <div className="space-y-3">
              <div className="border border-secondary overflow-hidden rounded-full bg-bg-gray px-4 lg:px-6 py-2">
                <button
                  onClick={() => toggleFaq(0)}
                  className="flex w-full items-center justify-between  text-left hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-900 text-xs md:text-sm 2xl:text-base">
                    How is my trip data stored and used?
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-nowrap text-[5px] md:text-[10px] 2xl:text-xs font-medium text-primary">
                    Data & privacy
                  </span>
                </button>

                <p className="lg:text-xs 2xl:text-sm text-gray-600 text-[8px] md:text-[11px]">
                  We log routes and charging events in an aggregated way.
                </p>
              </div>

              <div className="border border-secondary overflow-hidden rounded-full bg-bg-gray px-4 lg:px-6 py-2">
                <button
                  onClick={() => toggleFaq(0)}
                  className="flex w-full items-center justify-between  text-left hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-900 text-xs md:text-sm 2xl:text-base">
                    Which cities are currently supported?
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-nowrap text-[5px] md:text-[10px] 2xl:text-xs font-medium text-primary">
                    Product scope
                  </span>
                </button>

                <p className="lg:text-xs 2xl:text-sm text-gray-600 text-[8px] md:text-[11px]">
                  Aurora is live in three EU metros and onboarding two LATAM
                  cities. You can always see the latest coverage on...
                </p>
              </div>
            </div>
          </div>

          <Button className={"lg:py-2 lg:mt-8 2xl:mt-16"}>
            Start Application
          </Button>
        </div>
      </Wrapper>
    </div>
  );
}
