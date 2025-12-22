import { FiFileText } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import Badge from "../ui/badge";

export default function Assessments() {
  const items = [
    {
      id: 1,
      title: "Tool Use Interview",
      subtitle: "Interview",
      timestamp: "2 days ago",
      status: "Submitted",
    },
  ];

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-3 md:flex-row items-center justify-between rounded-2xl border border-secondary bg-white p-4 md:p-5"
        >
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 ">
            {/* Icon */}
            <div className="flex w-12 h-12 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full bg-bg-gray">
              <FiFileText className="h-6 w-6 md:h-5 md:w-5 text-text-gray" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-semibold text-text-primary">{item.title}</h3>
              <p className="text-sm text-text-gray font-medium">
                {item.subtitle} · {item.timestamp}
              </p>
            </div>
          </div>

          {/* Status and Arrow */}
          <div className="flex items-center gap-8">
            {/* <span className="text-sm font-medium text-emerald-600">
              {item.status}
            </span> */}
            <Badge className={"text-xs py-1"} status="green">
              {item.status}
            </Badge>
            <button className="hidden lg:flex h-8 w-8 bg-bg-gray shrink-0 items-center justify-center rounded-full transition-colors hover:bg-gray-100">
              <IoIosArrowRoundForward className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
