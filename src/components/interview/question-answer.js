"use client";

import useAxios from "@/hooks/useAxios";
import { useState } from "react";
import {
  FiAlertCircle,
  FiArrowLeft,
  FiCheckCircle,
  FiCircle,
} from "react-icons/fi";
import BorderButton from "../ui/buttons/border-button";
import Button from "../ui/buttons/button";
import TextAreaInput from "../ui/inputs/text-area-input";

export default function QuestionAnswer({
  questions,
  sessionId,
  flowId,
  setQuestions,
}) {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [success, setSuccess] = useState(false);
  const axios = useAxios();

  const answeredCount = questions.filter((q) => q.answered).length;
  const totalCount = questions.length;

  const handleSelectQuestion = (question) => {
    setSelectedQuestion(question);
    setAnswer("");
    setSubmitError(null);
    setSuccess(false);
  };

  const handleBackToList = () => {
    setSelectedQuestion(null);
    setAnswer("");
    setSubmitError(null);
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    if (!answer.trim()) {
      setSubmitError("Please provide an answer before submitting");
      return;
    }

    try {
      setSubmitLoading(true);

      await axios.post(`/interview/answer`, {
        session_id: sessionId,
        flow_id: flowId,
        question_id: selectedQuestion?.id,
        order_no: selectedQuestion?.order_no,
        answer_text: answer.trim(),
      });

      setSuccess(true);
      setTimeout(() => {
        if (selectedQuestion) {
          setQuestions(
            questions.map((q) =>
              q.id === selectedQuestion.id ? { ...q, answered: true } : q,
            ),
          );
        }
        handleBackToList();
      }, 1500);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Failed to submit answer",
      );
    } finally {
      setSubmitLoading(false);
    }
  };

  // Answer Form View
  if (selectedQuestion) {
    return (
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="bg-primary rounded-xl border-b border-slate-700/50 px-6 lg:px-8 py-6">
          <div className="max-w-3xl flex items-center gap-4">
            <button
              onClick={handleBackToList}
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors text-white hover:text-white"
              aria-label="Go back"
            >
              <FiArrowLeft className="w-8 h-8" />
            </button>
            <div>
              <p className="text-xl font-semibold text-white uppercase tracking-wide">
                Answering Question
              </p>
              <h1 className="text-xl font-bold text-white text-balance">
                {selectedQuestion.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className=" flex items-center py-12 px-6 lg:px-8">
          <div className="w-full max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Question Card */}
              <div className="bg-primary border border-slate-700/50 rounded-xl p-8">
                <p className="text-white text-sm font-medium mb-3 uppercase tracking-wide">
                  Question Details
                </p>
                <h2 className="text-2xl font-bold text-white mb-4 text-balance">
                  {selectedQuestion.question_text}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {selectedQuestion.question_type}
                </p>
              </div>

              {/* Answer Input */}
              <div className="space-y-3">
                <TextAreaInput
                  placeholder="Enter your detailed answer here..."
                  label="Your Answer"
                  required
                  value={answer}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                    setSubmitError(null);
                  }}
                  inputClassName={"h-40 resize-none"}
                />
                <p className="text-xs text-slate-500">
                  {answer.length} characters
                </p>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                  <FiAlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-400">{submitError}</p>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-green-400 font-medium">
                    Answer submitted successfully!
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <BorderButton
                  className={"w-full px-6"}
                  onClick={handleBackToList}
                >
                  Cancel
                </BorderButton>
                <Button
                  className={"w-full px-6"}
                  loading={submitLoading}
                  disabled={submitLoading || success}
                >
                  Submit Answer
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Question List View
  return (
    <div className="flex flex-col lg:flex-row h-full gap-8">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-primary border-b rounded-t-xl border-slate-700/50 px-6 lg:px-8 py-8">
          <div className="">
            <h1 className="text-4xl font-bold text-white mb-2 text-balance">
              Answer Your Questions
            </h1>
            <p className="text-slate-400">
              Complete your questionnaire by answering all questions below
            </p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-primary/70 border-b rounded-b-xl border-slate-700/50 px-6 lg:px-8 py-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-white">
                    Progress
                  </span>
                  <span className="text-xs text-gray-200">
                    {answeredCount} of {totalCount}
                  </span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300 ease-out"
                    style={{
                      width: `${totalCount === 0 ? 0 : (answeredCount / totalCount) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">
                  {Math.round(
                    totalCount === 0 ? 0 : (answeredCount / totalCount) * 100,
                  )}
                </p>
                <p className="text-xs text-white">Complete</p>
              </div>
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div className="flex-1 overflow-y-auto px-6 lg:px-0 py-8">
          <div className=" space-y-3">
            {questions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-400">No questions available</p>
              </div>
            ) : (
              questions.map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => handleSelectQuestion(question)}
                  className="w-full text-left group"
                >
                  <div className="bg-primary border border-slate-700/50 rounded-lg p-5 transition-all duration-200 hover:bg-slate-800 hover:border-slate-600 hover:shadow-lg hover:shadow-orange-500/10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {question.answered ? (
                          <FiCheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <FiCircle className="w-6 h-6 text-white transition-colors" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold text-white transition-colors">
                              {index + 1}. {question.question_text}
                            </h3>
                            <p className="text-slate-400 text-sm mt-1 line-clamp-2">
                              {question.question_type}
                            </p>
                          </div>
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500 text-white whitespace-nowrap">
                            {question.answered ? "Answered" : "Pending"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Sidebar Stats */}
      <div className="hidden lg:flex w-80 bg-primary/80 rounded-xl border-l border-slate-700/50 flex-col p-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wide mb-4">
              Statistics
            </h3>
            <div className="space-y-4">
              <div className="bg-primary rounded-lg p-4 border border-slate-700/50">
                <p className="text-xs text-white mb-1">Total Questions</p>
                <p className="text-3xl font-bold text-white">{totalCount}</p>
              </div>
              <div className="bg-primary rounded-lg p-4 border border-slate-700/50">
                <p className="text-xs text-white mb-1">Answered</p>
                <p className="text-3xl font-bold text-green-500">
                  {answeredCount}
                </p>
              </div>
              <div className="bg-primary rounded-lg p-4 border border-slate-700/50">
                <p className="text-xs text-white mb-1">Remaining</p>
                <p className="text-3xl font-bold text-red-500">
                  {totalCount - answeredCount}
                </p>
              </div>
            </div>
          </div>

          {answeredCount === totalCount && totalCount > 0 && (
            <div className="mt-8 pt-8 border-t border-slate-700/50">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                <p className="text-green-500 font-semibold text-sm">
                  ✓ All questions answered!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
