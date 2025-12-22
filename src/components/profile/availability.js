"use client";

import { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import SelectBox from "../ui/inputs/select-box";
import BorderButton from "../ui/buttons/border-button";

const weekDays = [
  {
    id: "sun",
    label: "S",
    fullName: "Sunday",
    color: "bg-bg-gray text-text-gray",
  },
  {
    id: "mon",
    label: "M",
    fullName: "Monday",
    color: "bg-secondary text-primary",
  },
  {
    id: "tue",
    label: "T",
    fullName: "Tuesday",
    color: "bg-secondary text-primary",
  },
  {
    id: "wed",
    label: "W",
    fullName: "Wednesday",
    color: "bg-secondary text-primary",
  },
  {
    id: "thu",
    label: "T",
    fullName: "Thursday",
    color: "bg-secondary text-primary",
  },
  {
    id: "fri",
    label: "F",
    fullName: "Friday",
    color: "bg-cyan-500 text-primary",
  },
  {
    id: "sat",
    label: "S",
    fullName: "Saturday",
    color: "bg-gray-300 text-gray-600",
  },
];

export default function Availability() {
  const [availabilityStart, setAvailabilityStart] = useState("Immediately");
  const [preferredHours, setPreferredHours] = useState("Ex: 40");
  const [timezone, setTimezone] = useState("");

  const [workingHours, setWorkingHours] = useState({
    sun: { available: false, start: "9:00am", end: "5:00pm" },
    mon: { available: true, start: "9:00am", end: "5:00pm" },
    tue: { available: true, start: "9:00am", end: "5:00pm" },
    wed: { available: true, start: "9:00am", end: "5:00pm" },
    thu: { available: true, start: "9:00am", end: "5:00pm" },
    fri: { available: true, start: "9:00am", end: "5:00pm" },
    sat: { available: false, start: "9:00am", end: "5:00pm" },
  });

  const toggleAvailability = (dayId) => {
    setWorkingHours((prev) => ({
      ...prev,
      [dayId]: { ...prev[dayId], available: !prev[dayId].available },
    }));
  };

  const updateTime = (dayId, field, value) => {
    setWorkingHours((prev) => ({
      ...prev,
      [dayId]: { ...prev[dayId], [field]: value },
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8  mt-8 md:mt-10 lg:mt-14">
      {/* Left Sidebar */}
      <div className="lg:col-span-3">
        <div className="space-y-4">
          <div>
            <h1 className="mb-1 font-semibold text-gray-900 md:text-lg">
              Availability
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Set when you are typically available for work.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-red-600 font-medium">
              Your availability is missing
            </p>
            <ul className="text-sm text-red-600 space-y-1">
              <li className="flex items-start">
                <span className="mr-1">•</span>
                <span>Time zone</span>
              </li>
              <li className="flex items-start">
                <span className="mr-1">•</span>
                <span>Preferred weekly hours</span>
              </li>
            </ul>
          </div>

          <p className="text-xs text-text-gray">Last updated: 12/04/25</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-9">
        <div className="space-y-8">
          {/* Top Fields Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectBox
              label={"Availability to start"}
              placeholder={"Immediately"}
              value={availabilityStart}
              onChange={(e) => setAvailabilityStart(e.target.value)}
              size="sm"
              required
              description={"How soon you could begin a new role if offered"}
              options={[
                { value: "Immediately", label: "Immediately" },
                { value: "1 week", label: "1 week" },
                { value: "2 weeks", label: "2 weeks" },
                { value: "1 month", label: "1 month" },
              ]}
            />

            {/* Preferred time commitment */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Preferred time commitment{" "}
                <span className="text-red-600">*</span>
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Ideal number of hours you'd like to work each week
              </p>
              <div className="relative">
                <select
                  value={preferredHours}
                  onChange={(e) => setPreferredHours(e.target.value)}
                  className="w-full px-4 py-2.5 pr-10 text-sm border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
                >
                  <option>Ex: 40</option>
                  <option>20 hours</option>
                  <option>30 hours</option>
                  <option>40 hours</option>
                  <option>50+ hours</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div> */}
            <SelectBox
              label={"Preferred time commitment"}
              placeholder={"Ex: 40"}
              value={preferredHours}
              onChange={(e) => setPreferredHours(e.target.value)}
              size="sm"
              required
              description={"Ideal number of hours you'd like to work each week"}
              options={[
                { value: "Ex: 40", label: "Ex: 40" },
                { value: "20 hours", label: "20 hours" },
                { value: "30 hours", label: "30 hours" },
                { value: "40 hours", label: "40 hours" },
                { value: "50+ hours", label: "50+ hours" },
              ]}
            />
          </div>

          <SelectBox
            label={"Timezone"}
            placeholder={"Select timezone"}
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            size="sm"
            required
            description={
              "Select the time zone you primarily work from. This will be used to interpret your weekly availability hours."
            }
            options={[
              {
                value: "America/New_York (EST)",
                label: "America/New_York (EST)",
              },
              {
                value: "America/Chicago (CST)",
                label: "America/Chicago (CST)",
              },
              { value: "America/Denver (MST)", label: "America/Denver (MST)" },
              {
                value: "America/Los_Angeles (PST)",
                label: "America/Los_Angeles (PST)",
              },
              { value: "Europe/London (GMT)", label: "Europe/London (GMT)" },
            ]}
          />

          {/* Working Hours Section */}
          <div className="border-t border-secondary pt-8">
            <div className="flex items-start gap-2 mb-2">
              <svg
                className="w-5 h-5 text-gray-700 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Working hours
                </h2>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Select when you are typically available to work.
            </p>

            {/* Days Schedule */}
            <div className="mt-6 space-y-3  w-full overflow-x-auto scrollbar-hide">
              {weekDays.map((day) => (
                <div key={day.id} className="flex items-center gap-3">
                  {/* Day Badge */}
                  <div
                    className={`w-9 h-9 rounded-full ${day.color} flex items-center justify-center text-sm font-medium flex-shrink-0`}
                  >
                    {day.label}
                  </div>

                  {/* Time Controls */}
                  {!workingHours[day.id].available ? (
                    <button
                      className="px-4 py-1.5 text-sm text-text-gray bg-bg-gray border-secondary rounded-full border cursor-pointer"
                      onClick={() => toggleAvailability(day.id)}
                    >
                      Unavailable
                    </button>
                  ) : (
                    <>
                      <input
                        type="text"
                        value={workingHours[day.id].start}
                        onChange={(e) =>
                          updateTime(day.id, "start", e.target.value)
                        }
                        className="w-28 px-3 py-1.5 text-sm border border-secondary rounded-full focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent"
                      />
                      <span className="text-gray-400">-</span>
                      <input
                        type="text"
                        value={workingHours[day.id].end}
                        onChange={(e) =>
                          updateTime(day.id, "end", e.target.value)
                        }
                        className="w-28 px-3 py-1.5 text-sm border border-secondary rounded-full focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent"
                      />
                      <button
                        onClick={() => toggleAvailability(day.id)}
                        className="p-1.5 bg-bg-gray rounded-full cursor-pointer text-text-gray hover:text-gray-600"
                      >
                        <MdClose className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 bg-bg-gray rounded-full cursor-pointer text-gray-400 hover:text-gray-600">
                        <FiPlus className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Date-specific Hours Section */}
          <div className="border-t border-secondary pt-8">
            <div className="flex flex-col lg:flex-row items-start justify-between">
              <div className="flex items-start gap-2 mb-2 md:mb-4 lg:mb-0">
                <CiCalendarDate className="w-8 h-8 text-text-gray" />
                <div>
                  <h2 className="text-base font-semibold text-gray-900">
                    Date-specific hours
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Specify date-based exceptions to your weekly availability.
                  </p>
                </div>
              </div>
              <BorderButton className={"lg:w-fit !text-sm py-2.5 lg:py-2 px-5"}>
                <span className="flex items-center justify-center md:gap-1.5">
                  <FiPlus className="w-4 h-4" />
                  Add exceptions
                </span>
              </BorderButton>
            </div>

            <div className="mt-4 p-4 bg-bg-gray rounded-full border border-secondary text-center">
              <p className="text-sm text-text-gray">No active exceptions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
