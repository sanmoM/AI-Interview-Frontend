"use client";

import useAxios from "@/hooks/useAxios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "../../shared/loader";
import Wrapper from "../../shared/wrapper/wrapper";
import Button from "../../ui/buttons/button";
import SectionHeading from "../../ui/headings/section-heading";
import SubHeading from "../../ui/headings/sub-heading";
import RadioInput from "../../ui/inputs/radio-input";
import RoleCard from "./components/role-card";

export default function JobApplication() {
  const [initialLoad, setInitialLoad] = useState(true);
  const [venture, setVenture] = useState({});
  const [flows, setFlows] = useState([]);
  const [roles, setRoles] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Best match");
  const [selected, setSelected] = useState("resume");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const { id } = useParams();
  const axios = useAxios();

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const fetchSingleVenture = async () => {
    const res = await axios.get(`/single-venture/${id}`);
    const venture = res?.data?.venture;
    venture.branding = JSON.parse(venture.branding_json);
    delete venture.branding_json;
    setVenture(venture);
    setFlows(res.data?.flows);
    setRoles(res.data?.roles);
    setInitialLoad(false);
  };

  useEffect(() => {
    fetchSingleVenture();
  }, []);

  return (
    <div className={"lg:flex-1 flex flex-col gap-4"}>
      {/* Breadcrumb header */}
      <div className="">
        <p className="text-sm text-gray-500 flex flex-col md:flex-row gap-1 md:justify-between">
          <span>Senior/Staff Code Review Experts • Application</span>
          <span className="">Hourly contract • Remote</span>
        </p>
      </div>
      <Wrapper>
        {initialLoad ? (
          <Loader />
        ) : (
          <div className="mx-auto">
            {/* Job title and badges */}
            <div className="mb-6">
              <SectionHeading className={"mb-3"}>{venture.name}</SectionHeading>
              <SubHeading className="text-text-gray font-normal leading-relaxed">
                {venture?.branding?.description}
              </SubHeading>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 2xl:grid-cols-3">
              {roles?.map((role) => {
                const flowId = flows?.find(
                  (flow) => parseInt(flow.role_id) === parseInt(role.id),
                )?.id;
                return (
                  <Link
                    href={
                      flowId
                        ? `/interview/${venture?.id}/${flowId}/${role?.id}`
                        : "#"
                    }
                    className="block h-full"
                  >
                    <RoleCard item={role} />
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
}
