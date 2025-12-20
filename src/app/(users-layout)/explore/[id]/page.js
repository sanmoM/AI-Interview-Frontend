import JobApplication from "@/components/single-job/job-application";
import SingleJobSidebar from "@/components/single-job/single-job-sidebar";

export default function page() {
  return (
    <div className="h-full flex">
      <SingleJobSidebar />
      <JobApplication/>
    </div>
  );
}
