import React from 'react'

export default function TitleSubtitle({ title, description }) {
    return (
        <div>
            {title && <label className="block text-sm md:text-lg font-medium text-text-primary mb-1">{title}</label>}
            {description && <p className="text-gray-500 text-xs md:text-base mb-3">{description}</p>}
        </div>
    )
}
