import { FaRegEdit } from "react-icons/fa";
import { GoBriefcase } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuEarth } from "react-icons/lu";

export default function Application() {
  const projects = [
    {
      id: 1,
      icon: GoBriefcase,
      name: "Aurora Mobility Labs",
      interviews: 12,
      contractType: "Hourly contract",
      interviewType: "Ai interview",
      startedOn: "12/04/25",
      stepsCompleted: 1,
      totalSteps: 2,
    },
    {
      id: 2,
      icon: FaRegEdit,
      name: "Northline Retail Cloud",
      interviews: 8,
      contractType: "Hourly contract",
      interviewType: "Ai interview",
      startedOn: "12/04/25",
      stepsCompleted: 1,
      totalSteps: 2,
    },
    {
      id: 3,
      icon: LuEarth,
      name: "Signal Foundry",
      interviews: 5,
      contractType: "Hourly contract",
      interviewType: "Ai interview",
      startedOn: "12/04/25",
      stepsCompleted: 2,
      totalSteps: 6,
    },
  ];

  return (
    <div className="space-y-4">
      {projects.map((project) => {
        const Icon = project.icon;
        return (
          <div
            key={project.id}
            className="rounded-2xl flex lg:block justify-between items-center border border-secondary bg-white p-4 md:p-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:justify-between w-full md:w-auto">
              <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100">
                  <Icon className="h-6 w-6 text-text-gray" />
                </div>

                {/* Project Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-bold text-gray-900">
                    {project.name}
                  </h3>
                  <p className="text-xs md:text-sm text-text-gray">
                    {project.interviews} interviews · {project.contractType} ·{" "}
                    {project.interviewType}
                  </p>
                </div>
              </div>

              {/* Status Info */}
              <div className="flex justify-center md:justify-start items-center gap-6">
                <div className="text-right flex items-center justify-center md:justify-start gap-6">
                  <p className="text-[10px] md:text-sm text-nowrap text-text-gray font-medium">
                    Started on {project.startedOn}
                  </p>
                  <p className="text-[8px] md:text-xs text-nowrap font-medium text-yellow-600 bg-yellow-100 px-4 py-1 rounded-full">
                    {project.stepsCompleted} of {project.totalSteps} steps
                    completed
                  </p>
                </div>

                {/* Arrow Button */}
                <button className="hidden lg:flex h-8 w-8 bg-bg-gray shrink-0 items-center justify-center rounded-full transition-colors hover:bg-gray-100">
                  <IoIosArrowRoundForward className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            <button className="hidden md:flex lg:hidden h-8 w-8 bg-bg-gray shrink-0 items-center justify-center rounded-full transition-colors hover:bg-gray-100">
              <IoIosArrowRoundForward className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
