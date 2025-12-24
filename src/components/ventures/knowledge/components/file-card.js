import ContentWrapper from '@/components/shared/wrapper/content-wrapper'
import React from 'react'

export default function FIleCard({
    title,
    description,
    replace,
    remove
}) {
    return (
        <ContentWrapper className="md:rounded-full flex flex-col gap-3 md:flex-row justify-between md:items-center">
            <div>
                <h3 className="text-sm font-medium text-gray-900">{title}</h3>
                <p className="text-gray-500 text-xs mt-1">
                    {description}
                </p>
            </div>
            <div className="flex gap-4 text-xs font-medium">
                <button className="text-primary hover:underline transition-colors">{replace}</button>
                <button className="text-red-500 hover:underline transition-colors">{remove}</button>
            </div>
        </ContentWrapper>
    )
}
