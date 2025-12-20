import { IoSearchSharp } from "react-icons/io5";
import Wrapper from "../shared/wrapper";
import Searchbox from "../ui/searchbox";

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
    <Wrapper className="mx-auto w-[30%] xl:w-[25%] h-full">
      {/* Header with search */}
      <div className="mb-6 flex flex-col 2xl:flex-row  xl:items-center justify-between gap-4 xl:gap-4 2xl:gap-8">
        <h1 className="text-nowrap font-bold text-gray-900 lg:text-lg 2xl:text-base">Explore opportunities</h1>
        <Searchbox inputClassName={"py-1.5 lg:py-2 xl:py-2.5 lg:text-xs lg:pl-10 lg:w-full"} iconClassName={"lg:w-4 lg:h-4"} containerClassName={"w-full 2xl:w-auto"} />
      </div>

      {/* Filter tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button className="rounded-full bg-primary px-4 py-1.5 text-nowrap lg:text-xs xl:text-sm font-medium text-white transition-colors hover:bg-slate-800">
          Best match
        </button>
        <button className="rounded-full border border-secondary bg-white px-4 py-1.5 text-nowrap lg:text-xs xl:text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
          Trending
        </button>
        <button className="rounded-full border border-secondary bg-white px-4 py-1.5 text-nowrap lg:text-xs xl:text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
          Newest
        </button>
      </div>

      {/* Company cards */}
      <div className="space-y-3">
        {companies.map((company) => (
          <button
            key={company.id}
            className="w-full rounded-xl xl:rounded-2xl 2xl:rounded-3xl border border-secondary bg-white p-3 xl:p-4 text-left transition-all hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h2 className="mb-2 font-bold text-text-primary">
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
                  <span className="text-sm text-text-gray">
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
