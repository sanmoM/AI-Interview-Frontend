import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { HiChevronRight } from "react-icons/hi2";
import Wrapper from "../shared/wrapper";
import Button from "../ui/buttons/button";
import FileInput from "../ui/inputs/file-input";

export default function ResumeUpload({ handleNext }) {
  const [file, setFile] = useState(null);

  return (
    <Wrapper className="flex-1 flex flex-col h-full">
      <div className="bg-white flex-1 flex flex-col">
        <div className=" flex-1 flex flex-col">
          <h1 className="mb-2 text-2xl lg:text-3xl font-bold text-gray-900">
            Upload resume
          </h1>
          <p className="mb-8 text-text-gray text-sm lg:text-base">
            Please upload your resume to initiate the application process.
          </p>

          {/* <div
            className={`relative flex flex-1 flex-col items-center justify-center rounded-xl border-2 border-dashed bg-bg-gray p-12 transition-colors ${
              dragActive ? "border-secondary bg-cyan-50" : "border-secondary"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              id="file-upload"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleChange}
            />

            {file ? (
              <div className="text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <p className="mb-2 text-lg font-semibold text-gray-900">
                  {file.name}
                </p>
                <p className="mb-4 text-sm text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>

                <button
                  onClick={() => setFile(null)}
                  className="text-sm font-medium text-cyan-600 hover:text-cyan-700"
                >
                  Remove file
                </button>
              </div>
            ) : (
              <>
                <div className="mb-2 inline-flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-secondary">
                  <FiUpload className="w-6 h-6 lg:h-8 lg:w-8 text-primary" />
                </div>

                <p className="mb-2 text-sm lg:text-lg font-semibold text-gray-900">
                  Drop your resume here
                </p>

                <p className="mb-1 text-xs lg:text-sm text-gray-500 whitespace-nowrap flex gap-1">
                  <span>or</span>
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer font-medium text-cyan-600 hover:text-cyan-700 inline"
                  >
                    browse files
                  </label>
                  <span>Supports PDF up to 3MB</span>
                </p>
              </>
            )}
          </div> */}
          <FileInput file={file} setFile={setFile} />
        </div>

        <div className="flex justify-end items-center pt-6">
          <Button
            className={"flex items-center w-fit px-5 lg:py-1.5"}
            onClick={() => handleNext()}
          >
            Next
            <HiChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
