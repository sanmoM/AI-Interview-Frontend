import { getDuration } from "@/utils/call";
import { cn } from "@/utils/cn";
import { formatIsoDate } from "@/utils/date";

export default function CallCard({ call }) {
  const duration = getDuration(call?.createdAt, call?.endedAt);
  const formattedDuration = duration
    ? `${Math.floor(duration / 60000)}m ${Math.floor((duration % 60000) / 1000)}s`
    : "N/A";
  return (
    <div className="group border border-secondary rounded-xl md:rounded-full p-4 md:p-2 pl-3 md:pr-6  transition-all duration-200 bg-white flex flex-col md:flex-row items-center gap-3 md:gap-4 relative md:min-w-[1024px]">
      {/* Avatar */}
      <div
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-sm bg-secondary text-primary",
        )}
      >
        {call.initials || "N/A"}
      </div>

      {/* Main Info */}
      <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-16 gap-y-2 items-center ">
        {/* Time & Phone */}
        <div className="md:col-span-4 flex flex-col text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-medium text-text-primary text-sm md:text-base">
              {formatIsoDate(call?.createdAt)}
            </span>
          </div>
          <span className="text-gray-500 text-sm font-medium mt-0.5">
            {call?.customer?.number} <span className="mx-1">·</span>{" "}
            {call.location}
          </span>
        </div>

        {/* Duration & Status */}
        <div className="md:col-span-4 2xl:col-span-5 flex flex-col text-center md:text-left items-center md:items-start w-fit md:w-auto mx-auto 2xl:mx-0">
          <span className="text-gray-400 text-sm font-medium mb-1">
            Duration · {formattedDuration}
          </span>
          <span
            className={cn(
              "text-sm px-2.5 py-0.5 rounded-full w-fit lg:w-auto ",
              call.status === "ended" && "bg-[#D1FADF] text-[#027A48]",
              call.status === "Missed" && "bg-[#FEE4E2] text-[#B42318]",
              call.status === "In progress" && "bg-secondary text-primary",
            )}
          >
            {call.status || "N/A"}
          </span>
        </div>
        <span className="md:col-span-3 2xl:col-span-2 font-medium text-gray-500 text-sm text-center md:text-left">
          Assigned · <span className="">{call?.role?.name}</span>
        </span>

        {/* Assigned */}
        <div className="md:col-span-5 flex flex-col text-center md:text-left items-center md:items-end justify-center h-full">
          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="flex items-center justify-center md:justify-end gap-2 mt-1">
              {call?.tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-bg-gray text-gray-500 text-xs font-bold px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-xs text-right truncate max-w-[200px] mt-0.5">
              Notes · {call.notes || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
