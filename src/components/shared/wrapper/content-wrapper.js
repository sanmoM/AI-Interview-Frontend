import React from 'react'

export default function ContentWrapper({ children }) {
    return (
        <div className="border border-secondary rounded-xl md:rounded-4xl p-4 bg-bg-gray">{children}</div>
    )
}
