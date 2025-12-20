"use client";

import { useState } from "react";
import { GoClock } from "react-icons/go";
import { LuEarth } from "react-icons/lu";
import Wrapper from "../shared/wrapper";

export default function JobApplication() {
  const [activeFilter, setActiveFilter] = useState("Best match");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <Wrapper>
      {/* Breadcrumb header */}
      <div className="border-b border-gray-200 bg-white px-6 py-3">
        <p className="text-sm text-gray-500">
          Senior/Staff Code Review Experts • Application
          <span className="ml-auto float-right">Hourly contract • Remote</span>
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-8">
        {/* Job title and badges */}
        <div className="mb-6">
          <h1 className="mb-3 text-3xl font-bold text-gray-900">
            Senior/Staff Code Review Experts
          </h1>
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700">
              <GoClock className="h-4 w-4" />
              Hourly contract
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700">
              <LuEarth className="h-4 w-4" />
              Remote
            </span>
          </div>
        </div>

        {/* Posted by section */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
              AI
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Posted by AI interview
              </p>
              <p className="text-sm text-gray-500">AIinterview.com</p>
            </div>
          </div>
          <button className="text-sm font-medium text-green-600 hover:text-green-700">
            Open to applications
          </button>
        </div>

        {/* Application progress card */}
        <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Application</h2>
            <p className="text-sm text-gray-500">0 of 2 steps completed</p>
          </div>

          <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-0 bg-blue-400 transition-all" />
          </div>

          <p className="mb-4 text-sm text-gray-600">Not started</p>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                <span className="text-gray-700">Resume</span>
              </div>
              <span className="text-sm text-gray-400">Not done</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                <span className="text-gray-700">Code Review Session</span>
              </div>
              <span className="text-sm text-gray-400">Not done</span>
            </div>
          </div>

          <button className="mt-6 w-full rounded-lg bg-slate-700 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
            Start Application
          </button>
        </div>

        {/* Role overview */}
        <div className="mb-8">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            Role overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This short-term, fully remote engagement helps shape the future of
            developer-assisting AI systems. You will review long-form
            transcripts between users and AI coding assistants, analyze the AI's
            logic, and document actionable feedback.
          </p>
        </div>

        {/* Key responsibilities */}
        <div className="mb-8">
          <h2 className="mb-3 text-xl font-bold text-gray-900">
            Key responsibilities
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>
              Review code transcripts and identify strengths, gaps, and
              potential issues.
            </li>
            <li>Score each transcript using a 10-point rubric.</li>
            <li>Write concise justifications with concrete examples.</li>
            <li>Detect mismatches between claims and actions.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            Friendly Ask Question
          </h2>

          <div className="space-y-3">
            <div className="rounded-lg border border-gray-200 bg-white">
              <button
                onClick={() => toggleFaq(0)}
                className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">
                  How is my trip data stored and used?
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                  Data & privacy
                </span>
              </button>

              {expandedFaq === 0 && (
                <div className="border-t border-gray-200 bg-gray-50 p-4">
                  <p className="text-sm text-gray-600">
                    We log routes and charging events in an aggregated way.
                  </p>
                </div>
              )}
            </div>

            <div className="rounded-lg border border-gray-200 bg-white">
              <button
                onClick={() => toggleFaq(1)}
                className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">
                  Which cities are currently supported?
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                  Product scope
                </span>
              </button>

              {expandedFaq === 1 && (
                <div className="border-t border-gray-200 bg-gray-50 p-4">
                  <p className="text-sm text-gray-600">
                    Aurora is live in three EU metros and onboarding two LATAM
                    cities.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <button className="w-full rounded-lg bg-slate-700 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
          Start Application
        </button>
      </div>
    </Wrapper>
  );
}
