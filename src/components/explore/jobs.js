"use client";

import Link from "next/link";
import VentureCard from "../shared/venture-card";
export default function Jobs({ ventures }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 2xl:grid-cols-3">
      {ventures?.map((opportunity) => (
        <Link
          href={`/explore/${opportunity?.id}`}
          className="block"
          key={opportunity?.id}
        >
          <VentureCard
            item={opportunity}
            detailsLink={`/explore/${opportunity?.id}`}
          />
        </Link>
      ))}
    </div>
  );
}
