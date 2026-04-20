"use client";

import Loader from "@/components/shared/loader";
import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useEffect, useState } from "react";

export default function Page() {
  const [initialLoad, setInitialLoad] = useState(true);
  const axios = useAuthAxios();

  useEffect(() => {
    const fetchVenture = async () => {
      // const res = await axios.get(`/admin/domain-settings`);
    };
    fetchVenture();
  }, [axios]);

  return (
    <SecondaryWrapper loading={initialLoad}>
      {initialLoad ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-1 flex-col 2xl:flex-row justify-between gap-6 mb-8">
            <div>
              <SectionHeading className="!mb-1 text-text-primary tracking-tight">
                {venture?.name}
              </SectionHeading>
              <SubHeading className="text-text-gray font-normal leading-relaxed">
                {venture?.branding?.description}
              </SubHeading>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-[60%_40%] gap-6 items-start"></div>
        </>
      )}
    </SecondaryWrapper>
  );
}
