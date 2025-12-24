import React from 'react'

export default function Color({ title, color }) {
    return (
        <div className="flex-1 bg-[#F9FAFB] border border-secondary rounded-2xl p-3 relative group">
            <div className="flex justify-between items-center mb-2 md:mb-4 gap-4">
                <label className="text-xs md:text-sm font-bold text-gray-700">{title}</label>
                <div className="w-8 h-4 rounded-full" style={{ backgroundColor: color }}></div>
            </div>
            <div className="bg-white border border-secondary rounded-full px-3 py-2 flex gap-4">
                <span className="text-gray-400 text-xs mr-1">#</span>
                <input type="text" defaultValue="304E77" className="w-full text-xs font-medium text-gray-600 focus:outline-none uppercase" />
            </div>
        </div>
    )
}
