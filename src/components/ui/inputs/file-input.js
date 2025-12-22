import { cn } from "@/utils/cn";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";

export default function FileInput({ file, setFile, containerClassName }) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <div
      className={cn(`relative flex flex-1 flex-col items-center justify-center rounded-xl border-2 border-dashed bg-bg-gray p-12 transition-colors`, dragActive ? "border-secondary bg-cyan-50" : "border-secondary", containerClassName)}
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
    </div>
  );
}
