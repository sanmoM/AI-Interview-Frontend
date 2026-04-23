import { BASE_URL } from "@/config";
import { notFound } from "next/navigation";
import React from "react";

export default async function RestrictionGuard({ children }) {
  const res = await fetch(BASE_URL + "/restriction-policy");
  const data = await res.json();
  if (data?.is_restricted) {
    return notFound();
  }
  return <>{children}</>;
}
