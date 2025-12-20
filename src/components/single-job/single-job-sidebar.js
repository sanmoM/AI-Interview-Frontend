import { IoSearchSharp } from "react-icons/io5";
import Wrapper from "../shared/wrapper";

const companies = [
  {
    id: 1,
    name: "Aurora Mobility Labs",
    interviews: 12,
    avatars: [
      "/professional-person-1.png",
      "/professional-person-2.png",
      "/professional-person-3.png",
    ],
  },
  {
    id: 2,
    name: "Northline Retail Cloud",
    interviews: 8,
    avatars: [
      "/professional-person-4.png",
      "/professional-person-5.png",
      "/professional-person-6.png",
    ],
  },
  {
    id: 3,
    name: "Signal Foundry",
    interviews: 5,
    avatars: [
      "/professional-person-7.png",
      "/professional-person-8.png",
      "/professional-person-9.png",
    ],
  },
  {
    id: 4,
    name: "Atlas Health OS",
    interviews: 16,
    avatars: [
      "/professional-person-10.jpg",
      "/professional-person-11.jpg",
      "/professional-person-12.jpg",
    ],
  },
];

export default function SingleJobSidebar() {
  return (
    <Wrapper className="mx-auto w-[30%] h-full">
      {/* Header with search */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Explore opportunities
        </h1>
        <div className="relative flex-1 max-w-xs">
          <IoSearchSharp className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Type to search"
            className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>

      {/* Filter tabs */}
      <div className="mb-6 flex gap-2">
        <button className="rounded-full bg-slate-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800">
          Best match
        </button>
        <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
          Trending
        </button>
        <button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
          Newest
        </button>
      </div>

      {/* Company cards */}
      <div className="space-y-3">
        {companies.map((company) => (
          <button
            key={company.id}
            className="w-full rounded-3xl border border-gray-200 bg-white p-4 text-left transition-all hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h2 className="mb-2 font-semibold text-gray-900">
                  {company.name}
                </h2>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {company.avatars.map((avatar, index) => (
                      <div
                        key={index}
                        className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-gray-100"
                      >
                        <img
                          src={avatar || "/placeholder.svg"}
                          alt={`Person ${index + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {company.interviews} interviews
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </Wrapper>
  );
}
