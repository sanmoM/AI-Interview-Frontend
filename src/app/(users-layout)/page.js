"use client";

import JobApplication from "@/components/single-job/job-application/job-application";

export default function page() {
  return (
    <div className="h-full flex flex-col lg:flex-row gap-6 xl:gap-8 w-full">
      <JobApplication />
    </div>
  );
}
