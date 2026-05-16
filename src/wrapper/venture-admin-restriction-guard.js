"use client";

import { BASE_URL } from "@/config";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminRestrictionGuard({ children }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const axios = useAuthAxios();

  useEffect(() => {
    const checkRestriction = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/admin-restriction-policy`,
        );
        const data = res?.data;

        if (data?.is_restricted) {
          router.replace("/pricing");
        } else {
          setLoading(false);
        }
      } catch (error) {
        router.replace("/not-found");
      }
    };

    checkRestriction();
  }, [router, axios]);

  return <>{loading ? null : children}</>;
}
