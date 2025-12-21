import React from "react";

export default function RadioInput({ option, selected, setSelected }) {
  return (
    <label className="flex items-center rounded-lg cursor-pointer transition-colors group">
      <div className="relative flex items-center justify-center">
        <input
          type="radio"
          name="theme"
          //   value={selected}
          checked={selected}
          onChange={() => setSelected(true)}
          className="absolute opacity-0 w-full h-full cursor-pointer peer z-10"
        />

        {/* Custom Checkmark using Tailwind only:
                  - 'after:' handles the inner dot
                  - 'peer-checked:after:scale-100' handles the pop-in animation
                */}
        <div
          className={`
                    relative h-6 w-6 rounded-full border-2 border-slate-300 
                    flex items-center justify-center transition-all duration-200 ease-in-out
                    after:content-[''] after:absolute after:rounded-full after:bg-secondary 
                    after:scale-0 after:opacity-0 after:transition-all after:duration-200 
                    after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
                    peer-checked:after:scale-100 peer-checked:after:opacity-100 peer-checked:after:w-[0.8rem] peer-checked:after:h-[0.8rem]
                    peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2
                    peer-focus-visible:ring-secondary peer-checked:border-secondary group-hover:border-secondary
                  `}
        ></div>
      </div>
      {option.label && (
        <span className="text-text-gray text-[10px] md:text-base ml-2">
          {option.label}
        </span>
      )}
    </label>
  );
}
