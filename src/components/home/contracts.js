import { GoBriefcase } from "react-icons/go";

export default function Contracts() {
  return (
    <div className="flex flex-col items-center justify-center py-6 md:py-10 lg:py-16">
      <div className="w-14 h-14 md:w-20 md:h-20 bg-gray-100 rounded-4xl flex items-center justify-center mb-6">
        <GoBriefcase
          className="w-6 h-6 md:w-10 md:h-10 text-gray-400"
          strokeWidth={1.5}
        />
      </div>
      <h3 className=" md:text-lg font-medium text-text-gray mb-2">
        You don't have any contracts yet
      </h3>
      <p className="text-text-gray text-sm md:text-base text-center">
        You will be notified when companies reach out to you.
      </p>
    </div>
  );
}
