import { cn } from '@/utils/cn'

export default function Color({ color, selectedColor, setSelectedColor }) {
    return (
        <button
            onClick={() => setSelectedColor(color)}
            className={cn(
                "flex flex-col gap-1 items-start md:p-1.5 md:pr-4 p-1 pr-4 rounded-full bg-bg-gray border transition-all md:min-w-[140px] border-secondary",
                selectedColor === "primary" ? "" : ""
            )}
        >
            <div className="flex items-center gap-3">
                <span className="w-6 h-6 md:w-8 md:h-8 rounded-full shrink-0 block border border-black/5" style={{ backgroundColor: color }}></span>
                <div className="flex flex-col text-left">
                    <span className="text-[11px] md:text-sm font-semibold text-gray-900">Primary</span>
                    <span className="text-[9px] md:text-[11px] text-gray-500 font-mono">#3E63DD</span>
                </div>
            </div>
        </button>
    )
}
