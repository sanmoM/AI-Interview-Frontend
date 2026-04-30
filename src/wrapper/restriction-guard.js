"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/config";

export default function RestrictionGuard({ children }) {
  const [loading, setLoading] = useState(true);
  const [restricted, setRestricted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkRestriction = async () => {
      try {
        const res = await fetch(`${BASE_URL}/restriction-policy`);
        const data = await res.json();

        if (data?.is_restricted) {
          setRestricted(true);
          router.replace("/no-venture");
        }
      } catch (error) {
        console.error("Error fetching restriction policy:", error);
      } finally {
        setLoading(false);
      }
    };

    checkRestriction();
  }, [router]);

  // if (loading) return null; // or a loader

  // if (restricted) return null;

  console.log(loading)

  return <>{loading ? null : children}</>;
}
