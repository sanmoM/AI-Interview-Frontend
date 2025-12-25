import React from 'react'
import BadgeWithText from './badge-with-text'

export default function ContentFooterLayout({
    badgeLabel,
    badgeText,
    children
}) {
    return (
        <div className="flex flex-col gap-5 xl:gap-8 2xl:flex-row justify-between items-center mt-8">
            <BadgeWithText
                badgeLabel={badgeLabel}
                text={badgeText}
            />

            <div className="flex flex-col md:flex-row md:items-center gap-3 w-full md:w-auto">
                {children}
            </div>
        </div>
    )
}
