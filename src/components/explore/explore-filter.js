import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function ExploreFilter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all-roles");
  return (
    <div className="h-fit">
      <h1 className="mb-4 md:mb-6 lg:mb-8 text-2xl md:text-3xl font-bold text-text-primary">
        Explore opportunities
      </h1>

      {/* Search Bar and Filters */}
      <div className="mb-6 md:mb-8 flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full md:w-auto">
          <IoSearchOutline className="absolute left-4 top-1/2 w-5 h-5 md:h-6 md:w-6 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Type to search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-secondary py-2.5 lg:py-3 pl-10 md:pl-12 pr-4  placeholder:font-medium placeholder:text-text-gray focus:border-gray-400 focus:outline-none text-sm md:text-base"
          />
        </div>

        <div className="flex items-center w-full md:w-auto gap-4 px-2 lg:px-0 text-sm md:text-base lg:text-lg">
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
