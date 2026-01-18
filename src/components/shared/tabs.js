import { cn } from "@/utils/cn";

export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={cn(
              "py-3 text-text-gray text-nowrap text-sm md:text-base font-medium cursor-pointer transition-colors",
              activeTab === tab.value
                ? "text-primary border-b-2 border-primary"
                : "text-text-gray"
            )}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
