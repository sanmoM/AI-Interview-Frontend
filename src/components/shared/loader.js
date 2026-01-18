import { cn } from "@/utils/cn";
import React from "react";

export default function Loader({ containerClassName, loaderClassName }) {
  return (
    <div
      className={cn(
        "w-full h-full flex justify-center items-center",
        containerClassName,
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className={cn("w-[10%]", loaderClassName)}
      >
        <circle
          fill="#304E77"
          stroke="#304E77"
          stroke-width="15"
          r="15"
          cx="40"
          cy="65"
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          ></animate>
        </circle>
        <circle
          fill="#304E77"
          stroke="#304E77"
          stroke-width="15"
          r="15"
          cx="100"
          cy="65"
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          ></animate>
        </circle>
        <circle
          fill="#304E77"
          stroke="#304E77"
          stroke-width="15"
          r="15"
          cx="160"
          cy="65"
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}
