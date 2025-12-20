"use client";

import JobApplication from "@/components/single-job/job-application";
import SingleJobSidebar from "@/components/single-job/single-job-sidebar";

export default function page() {
  return (
    <div className="h-full flex flex-col lg:flex-row gap-6 xl:gap-8">
      <SingleJobSidebar />
      <JobApplication />
    </div>
  );
}
