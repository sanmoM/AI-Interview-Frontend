import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Searchbox from "../ui/inputs/searchbox";
import SectionHeading from "../ui/headings/section-heading";

export default function ExploreFilter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all-roles");
  return (
    <div className="h-fit">
      <SectionHeading className={"mb-4 md:mb-6 lg:mb-8"}>
        Explore opportunities
      </SectionHeading>

      {/* Search Bar and Filters */}
      <div className="mb-6 md:mb-8 flex flex-col md:flex-row items-center gap-4">
        <Searchbox containerClassName={"flex-1 w-full md:w-auto"} />

        <div className="flex items-center w-full md:w-auto gap-4 px-2 lg:px-0 text-sm md:text-base xl:text-lg">
          <span className="text-text-gray font-medium">Show</span>

          <div className="grid grid-cols-2 items-center  border p-1 border-secondary rounded-full">
            <button
              onClick={() => setActiveFilter("all-roles")}
              className={`rounded-full px-4 cursor-pointer py-1 font-medium transition-colors ${
                activeFilter === "all-roles"
                  ? "bg-secondary text-primary"
                  : "text-text-gray"
              }`}
            >
              All roles
            </button>

            <button
              onClick={() => setActiveFilter("saved")}
              className={`rounded-full px-4 cursor-pointer py-1 font-medium transition-colors ${
                activeFilter === "saved"
                  ? "bg-secondary text-primary"
                  : " text-text-gray"
              }`}
            >
              Saved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
