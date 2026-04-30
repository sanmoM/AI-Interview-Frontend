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
      try {
        const res = await fetch(`${BASE_URL}/restriction-policy`);
        const data = await res.json();

        if (data?.is_restricted) {
          router.replace("/no-venture");
        } else {
          setLoading(false);
        }
      } catch (error) {
      }
    };

    checkRestriction();
  }, [router]);

  useEffect(() => {
    if (pathName === "/no-venture") {
      setLoading(false);
    }
  }, [pathName]);


  return <>{loading ? null : children}</>;
}
