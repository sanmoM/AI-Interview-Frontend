import React from "react";
import CallDetailHeader from "@/components/call-detail/call-detail-header";
import CallInfoCard from "@/components/call-detail/call-info-card";
import TranscriptColumn from "@/components/call-detail/transcript-column";
import SummaryColumn from "@/components/call-detail/summary-column";
import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import CallHistory from "@/components/call-detail/chat-history";

export default function CallDetailPage() {
  return (
    <SecondaryWrapper>
      <CallDetailHeader />
      <CallInfoCard />

      <div className="column-no-break-container mt-6">
        <CallHistory />
        <TranscriptColumn />
        <SummaryColumn />
      </div>
    </SecondaryWrapper>
  );
}
