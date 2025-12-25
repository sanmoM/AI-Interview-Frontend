import React from 'react';
import CallDetailHeader from '@/components/call-detail/call-detail-header';
import CallInfoCard from '@/components/call-detail/call-info-card';
import TranscriptColumn from '@/components/call-detail/transcript-column';
import SummaryColumn from '@/components/call-detail/summary-column';
import SecondaryWrapper from '@/components/shared/wrapper/secondary-wrapper';

export default function CallDetailPage() {
    return (
        <SecondaryWrapper>
            <CallDetailHeader />
            <CallInfoCard />

            <div className="grid grid-cols-1 2xl:grid-cols-[60%_40%] gap-6 mt-6">
                <TranscriptColumn />
                <SummaryColumn />
            </div>
        </SecondaryWrapper>
    );
}
