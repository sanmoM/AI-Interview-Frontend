import React from 'react';

export default function QuestionsLayout({ sidebar, children }) {
    return (
        <div className="flex flex-col 2xl:flex-row gap-6">
            {sidebar}
            <div className="flex-1 min-w-0">
                {children}
            </div>
        </div>
    );
}
