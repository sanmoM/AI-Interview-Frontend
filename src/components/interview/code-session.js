import { FiClock, FiVideo } from "react-icons/fi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMic, IoShieldOutline, IoVideocamOffOutline } from "react-icons/io5";
import { LuRotateCcw } from "react-icons/lu";
import Wrapper from "../shared/wrapper";
import BorderButton from "../ui/buttons/border-button";
import Button from "../ui/buttons/button";

export default function CodeSession({ handleNext, handleBack }) {
  return (
    <div className="flex-1 h-full flex flex-col">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 flex-1 h-full">
        {/* Main content area - left side */}
        <Wrapper className="lg:col-span-2 h-full overflow-y-auto">
          <div className=" h-full flex flex-col">
            {/* Header */}
            <div className="mb-2 lg:mb-4 flex items-center gap-3">
              <h1 className="text-xl lg:text-3xl font-bold text-text-primary">
                Code Review Session
              </h1>
              <span className="rounded-full bg-secondary px-2 lg:px-3 py-1 text-xs lg:text-sm font-semibold text-primary">
                29 min
              </span>
            </div>
            <p className="mb-4 lg:mb-6 text-text-gray">
              Debug some pieces of code
            </p>

            {/* Camera permission card */}
            <div className="mb-6 flex flex-1 flex-col items-center justify-center rounded-2xl bg-gray-900 p-6 lg:p-12">
              {/* Camera off icon */}
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-700">
                <IoVideocamOffOutline
                  className="h-8 w-8 text-slate-400"
                  strokeWidth={1.5}
                />
              </div>

              {/* Permission text */}
              <h2 className="mb-2 lg:mb-3 text-base lg:text-xl font-semibold text-white">
                Camera permission required
              </h2>
              <p className="mb-4 lg:mb-8 text-center text-xs lg:text-sm text-secondary">
                You must enable camera access before joining the AI interview.
              </p>

              {/* Control buttons */}
              <div className="flex items-center gap-4">
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition-colors">
                  <IoMic className="h-6 w-6 text-white" />
                </button>
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                  <FiVideo className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>

            {/* Status indicators */}
            <div className="mb-3 grid grid-cols-3 gap-4 text-sm px-2">
              <div className="">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <span className="font-medium text-gray-600">
                    Permission required
                  </span>
                </div>
                <button className="text-primary font-medium cursor-pointer hover:underline">
                  Test your mic
                </button>
              </div>

              <div className="text-center">
                <p className="mb-2 font-medium text-gray-600">
                  No device selected
                </p>
                <button className="text-primary font-medium cursor-pointer hover:underline">
                  Play test sound
                </button>
              </div>

              <div className="text-right">
                <p className="mb-2 font-medium text-gray-600">
                  Permission required
                </p>
                <button className="text-primary font-medium cursor-pointer hover:underline">
                  Restart devices
                </button>
              </div>
            </div>

            {/* Troubleshooting link */}
            <div className="mb-8 text-center bg-bg-gray py-3 rounded-full">
              <span className=" text-text-gray font-medium">
                Troubleshooting help{" "}
              </span>
              <button className="text-sm font-medium text-gray-900 hover:underline">
                View tips
              </button>
            </div>

            {/* Bottom buttons */}
            <div className="flex items-center justify-between">
              <BorderButton
                className={"w-fit px-6 2xl:py-1.5 2xl:text-sm"}
                onClick={handleBack}
              >
                Back
              </BorderButton>
              <Button className={"w-fit px-6 2xl:py-2 2xl:text-sm"}>
                Test screenshare
              </Button>
            </div>
          </div>
        </Wrapper>

        {/* Right sidebar */}
        <Wrapper className="lg:col-span-1 h-full overflow-y-auto">
          <div className=" bg-white h-full">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Things to know before starting
            </h2>

            {/* Info items */}
            <div className="space-y-6">
              {/* Time expectation */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                  <FiClock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">
                    Expect to spend ~29 minutes
                  </h3>
                  <p className="text-sm text-gray-600">
                    Very short interviews may not be considered complete. Please
                    answer thoughtfully.
                  </p>
                </div>
              </div>

              {/* Assistance */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                  <IoMdHelpCircleOutline className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">
                    Need assistance? Just ask
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tell the AI if you need a question repeated or more time.
                  </p>
                </div>
              </div>

              {/* Retakes */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                  <LuRotateCcw className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">
                    3 of 3 interview retakes remaining
                  </h3>
                  <p className="text-sm text-gray-600">
                    Reserve retakes for technical issues. Keep in mind that
                    hiring managers can see your retake count.
                  </p>
                </div>
              </div>

              {/* Data privacy */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                  <IoShieldOutline className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">
                    Your data is in your control
                  </h3>
                  <p className="text-sm text-gray-600">
                    Your responses are used only to assess your candidacy and
                    are never used to train AI models.
                  </p>
                </div>
              </div>
            </div>

            {/* Test screen share button */}
            {/* <button className="mt-8 w-full rounded-lg bg-slate-700 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
              Test screen share
            </button> */}
            <Button className={"mt-8 w-full 2xl:py-2"} onClick={handleNext}>
              Test screen share
            </Button>
            <p className="mt-3 text-center text-xs text-gray-500">
              Screenshare is required for this interview
            </p>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
