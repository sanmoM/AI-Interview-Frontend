"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { BASE_URL } from "@/config";

export default function RestrictionGuard({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathName = usePathname();
  // console.log(pathName);

  useEffect(() => {
    const checkRestriction = async () => {
      if (pathName === "/not-found") {
        setLoading(false);
        return;
      }
      try {
        const res = await fetch(`${BASE_URL}/restriction-policy`);
        const data = await res.json();

        if (data?.is_restricted) {
          router.replace("/not-found");
        } else {
          setLoading(false);
        }
      } catch (error) {
        router.replace("/not-found");
      }
    };

    checkRestriction();
  }, [router, pathName]);

  return <>{loading ? null : children}</>;
}
