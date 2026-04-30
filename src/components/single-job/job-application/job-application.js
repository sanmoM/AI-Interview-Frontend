"use client";

import useAxios from "@/hooks/useAxios";
import { useEffect, useMemo, useState } from "react";
import Loader from "../../shared/loader";
import Wrapper from "../../shared/wrapper/wrapper";
import SectionHeading from "../../ui/headings/section-heading";
import SubHeading from "../../ui/headings/sub-heading";
import RoleCard from "./components/role-card";
import NoData from "@/components/shared/no-data";

export default function JobApplication() {
  const [initialLoad, setInitialLoad] = useState(true);
  const [venture, setVenture] = useState(null);
  const [flows, setFlows] = useState([]);
  const [roles, setRoles] = useState([]);
  const axios = useAxios();

  const fetchSingleVenture = useMemo(() => {
    return async () => {
      const res = await axios.get(`/single-venture`);
      const venture = res?.data?.venture;
      if (venture) {
        venture.branding = JSON?.parse(venture?.branding_json || "{}");
        delete venture?.branding_json;
        setVenture(venture);
        setFlows(res?.data?.flows);
        setRoles(res?.data?.roles);
      }
      setInitialLoad(false);
    };
  }, [axios]);

  useEffect(() => {
    fetchSingleVenture();
  }, [fetchSingleVenture]);
  return (
    <div className={"lg:flex-1 flex flex-col gap-4 h-full"}>
      <Wrapper>
        {initialLoad ? (
          <Loader />
        ) : (
          <>
            {venture ? (
              <div className="mx-auto">
                {/* Job title and badges */}
                <div className="mb-6">
                  <SectionHeading className={"mb-3"}>
                    {venture.name}
                  </SectionHeading>
                  <SubHeading className="text-text-gray font-normal leading-relaxed">
                    {venture?.branding?.description}
                  </SubHeading>
                </div>

                {roles?.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 2xl:grid-cols-3">
                      {roles?.map((role) => {
                        return <RoleCard item={role} key={role.id} />;
                      })}
                    </div>
                  </>
                ) : (
                  <div className="h-full flex justify-center items-center lg:mt-36">
                    <NoData />
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex justify-center items-center">
                <NoData />
              </div>
            )}
          </>
        )}
      </Wrapper>
    </div>
  );
}
