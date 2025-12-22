import { useState } from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import { BsCash } from "react-icons/bs";
import { GoBriefcase } from "react-icons/go";
import {
  IoCodeSlashOutline,
  IoFlaskOutline,
  IoLanguageOutline,
  IoSparklesSharp,
} from "react-icons/io5";
import { LuPenTool, LuScale } from "react-icons/lu";
import { MdMenuBook } from "react-icons/md";
import { PiHeartbeat } from "react-icons/pi";
import TextInput from "../ui/inputs/text-input";
import { cn } from "@/utils/cn";

/* -------------------- Domain config -------------------- */

const domains = [
  {
    id: "software-engineering",
    label: "Software Engineering",
    icon: IoCodeSlashOutline,
  },
  { id: "medicine", label: "Medicine", icon: PiHeartbeat },
  { id: "law", label: "Law", icon: LuScale },
  { id: "data-analysis", label: "Data Analysis", icon: AiOutlineBarChart },
  { id: "finance", label: "Finance", icon: BsCash },
  {
    id: "business-operations",
    label: "Business Operations",
    icon: GoBriefcase,
  },
  {
    id: "life-science",
    label: "Life, Physical, and Social Science",
    icon: IoFlaskOutline,
  },
  { id: "arts-design", label: "Arts & Design", icon: LuPenTool },
  {
    id: "language-audio",
    label: "Language and Audio",
    icon: IoLanguageOutline,
  },
  { id: "humanities", label: "Humanities", icon: MdMenuBook },
  { id: "miscellaneous", label: "Miscellaneous", icon: IoSparklesSharp },
];

/* -------------------- Main Component -------------------- */

const WorkPreferences = () => {
  const [selectedDomains, setSelectedDomains] = useState([
    "software-engineering",
  ]);
  const [otherDomain, setOtherDomain] = useState("");
  const [fullTimeCompensation, setFullTimeCompensation] = useState("0");
  const [partTimeCompensation, setPartTimeCompensation] = useState("0");

  const toggleDomain = (domainId) => {
    setSelectedDomains((prev) =>
      prev.includes(domainId)
        ? prev.filter((id) => id !== domainId)
        : [...prev, domainId]
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8  mt-8 md:mt-10 lg:mt-14">
      {/* Left sidebar */}
      <div className="lg:col-span-3">
        <h1 className="mb-1 font-semibold text-gray-900 md:text-lg">
          Work Preferences
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Define how and when you'd like to work.
        </p>
        <p className="text-sm text-gray-500 mt-3 lg:mt-4">
          Use these preferences to help match you with roles that fit your
          interests and compensation goals.
        </p>
      </div>

      {/* Main content */}
      <div className="lg:col-span-9">
        {/* Domain interests */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-text-primary">
              Domain interests
            </h3>
            <p className="text-sm text-text-gray font-medium mt-1">
              What domains are you interested in? Select all that apply.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {domains.map((domain) => {
              const Icon = domain.icon;
              return (
                <DomainChip
                  key={domain.id}
                  label={domain.label}
                  icon={Icon}
                  selected={selectedDomains.includes(domain.id)}
                  onClick={() => toggleDomain(domain.id)}
                />
              );
            })}
          </div>
          <TextInput
            value={otherDomain}
            onChange={(e) => setOtherDomain(e.target.value)}
            size="sm"
            placeholder="Others (please specify)"
          />
        </div>

        <div className="border-t border-secondary my-4 md:my-6 lg:my-8" />

        {/* Compensation */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-text-primary">
              Minimum expected compensation
            </h3>
            <p className="text-sm text-text-gray font-medium mt-1">
              Share your minimum expectations. This is private and won't impact
              your visibility to roles.
            </p>
          </div>

          <CompensationInput
            label="Full-time"
            value={fullTimeCompensation}
            onChange={setFullTimeCompensation}
            helperText="We won't reach out about full-time roles below this. This stays private and won't impact your offers."
          />

          <CompensationInput
            label="Part-time"
            value={partTimeCompensation}
            onChange={setPartTimeCompensation}
            helperText="We won't reach out about part-time roles below this. This stays private and won't impact your offers."
          />
        </div>
      </div>
    </div>
  );
};

/* -------------------- Subcomponents -------------------- */

const DomainChip = ({ label, icon: Icon, selected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center cursor-pointer text-primary gap-2 px-4 py-1.5 rounded-full border text-sm font-medium transition-all ${
        selected
          ? "bg-secondary  border-none"
          : " text-text-gray border-secondary"
      }`}
    >
      <Icon
        className={cn("w-4 h-4 text-text-gray", selected && "text-primary")}
      />
      {label}
    </button>
  );
};

const CompensationInput = ({ label, value, onChange, helperText }) => {
  return (
    <div className="space-y-2">
      <TextInput
        label={label}
        value={value}
        onChange={onChange}
        size="sm"
        placeholder="0"
      />
      <p className="text-sm text-text-gray font-medium max-w-xl">
        {helperText}
      </p>
    </div>
  );
};

export default WorkPreferences;
