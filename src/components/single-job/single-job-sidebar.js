import Wrapper from "../shared/wrapper";
import Searchbox from "../ui/searchbox";

const companies = [
  {
    id: 1,
    name: "Aurora Mobility Labs",
    interviews: 12,
    avatars: [
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    id: 2,
    name: "Northline Retail Cloud",
    interviews: 8,
    avatars: [
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    id: 3,
    name: "Signal Foundry",
    interviews: 5,
    avatars: [
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    id: 4,
    name: "Atlas Health OS",
    interviews: 16,
    avatars: [
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkAJEkJQ1WumU0hXNpXdgBt9NUKc0QDVIiaw&s",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
];

export default function SingleJobSidebar() {
  return (
    <Wrapper className="mx-auto w-full lg:w-[30%] xl:w-[25%] lg:h-full overflow-visible lg:overflow-auto">
      {/* Header with search */}
      <div className="mb-6 flex flex-col 2xl:flex-row  xl:items-center justify-between gap-4 xl:gap-4 2xl:gap-8">
        <h1 className="text-nowrap font-bold text-gray-900 md:text-2xl lg:text-lg 2xl:text-base">
          Explore opportunities
        </h1>
        <Searchbox
          inputClassName={
            "py-1.5 md:py-2 lg:py-2 xl:py-2.5 lg:text-xs lg:pl-10 lg:w-full"
          }
          iconClassName={"lg:w-4 lg:h-4"}
          containerClassName={"w-full 2xl:w-auto"}
        />
      </div>

      {/* Filter tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button className="rounded-full bg-primary px-4 py-1.5 text-nowrap text-[11px] md:text-sm lg:text-xs xl:text-sm font-medium text-white transition-colors hover:bg-slate-800">
          Best match
        </button>
        <button className="rounded-full border border-secondary bg-white px-4 py-1.5 text-nowrap text-[11px] md:text-sm lg:text-xs xl:text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
          Trending
        </button>
        <button className="rounded-full border border-secondary bg-white px-4 py-1.5 text-nowrap text-[11px] md:text-sm lg:text-xs xl:text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
          Newest
        </button>
      </div>

      {/* Company cards */}
      <div className="max-w-full overflow-x-auto scrollbar-hide">
        <div className="lg:space-y-3 flex gap-4 lg:block min-w-max">
          {companies.map((company) => (
            <button
              key={company.id}
              className="w-full rounded-xl xl:rounded-2xl 2xl:rounded-3xl border border-secondary bg-white p-3 xl:p-4 text-left transition-all hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h2 className="mb-2 font-bold text-text-primary text-nowrap">
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
                    <span className="text-sm text-text-gray text-nowrap">
                      {company.interviews} interviews
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
