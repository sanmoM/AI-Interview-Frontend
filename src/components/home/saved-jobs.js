import { FiBookmark } from "react-icons/fi";
import Button from "../ui/buttons/button";

export default function SavedJobs() {
  return (
    <div className="flex max-w-md flex-col items-center justify-center text-center mx-auto h-full py-6 md:py-0">
      {/* Icon Circle */}
      <div className="mb-3 md:mb-6 flex w-14 h-14 md:h-20 md:w-20 items-center justify-center rounded-full bg-bg-gray">
        <FiBookmark className="w-8 h-8 md:h-10 md:w-10 text-text-gray" />
      </div>

      {/* Heading */}
      <h2 className="mb-2 text-lg md:text-xl font-semibold text-text-primary">
        You don't have anything saved
      </h2>

      {/* Description */}
      <p className="text-sm md:text-base mb-6 text-text-gray">
        Save listings or assessments to easily find them later.
      </p>

      {/* Button */}
      {/* <button className="rounded-full bg-slate-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800">
        Explore opportunities
      </button> */}
      <Button className={"w-fit text-xs md:text-sm lg:text-sm 2xl:text-sm px-6"}>
        <span>Explore opportunities</span>
      </Button>
    </div>
  );
}
