"use client";

import Loader from "@/components/shared/loader";
import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import Badge from "@/components/ui/badge";
import BorderButton from "@/components/ui/buttons/border-button";
import Button from "@/components/ui/buttons/button";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import Searchbox from "@/components/ui/inputs/searchbox";
import Roles from "@/components/ventures/single-venture/roles";
import AssignAdmin from "@/components/ventures/single-venture/assign-admin";
import BrandingCard from "@/components/ventures/single-venture/brand-card/branding-card";
import FAQs from "@/components/ventures/single-venture/faq-card/faqs";
import Knowledge from "@/components/ventures/single-venture/knowledge/knowledge";
import SystemPromptCard from "@/components/ventures/single-venture/system-prompt-card";
import ToneCard from "@/components/ventures/single-venture/tone-card";
import useAuthAxios from "@/hooks/useAuthAxios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

export default function VentureDetailPage() {
  const [initialLoad, setInitialLoad] = useState(true);
  const [venture, setVenture] = useState({});
  const { id } = useParams();
  const axios = useAuthAxios();

  useEffect(() => {
    const fetchVenture = async () => {
      const res = await axios.get(`/super/single-venture/${id}`);
      const venture = res?.data?.venture;
      venture.branding = JSON.parse(venture.branding_json);
      delete venture.branding_json;
      setVenture(venture);
      setInitialLoad(false);
    };
    fetchVenture();
  }, []);
  return (
    <SecondaryWrapper loading={initialLoad}>
      {initialLoad ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-1 flex-col 2xl:flex-row justify-between gap-6 mb-8">
            <div className="">
              <p className="text-text-gray text-xs md:text-sm font-medium mb-3 flex items-center gap-1.5">
                <span className="text-text-gray">Venture profiles b7</span>
                <span className="text-text-primary font-semibold">
                  {venture.name}
                </span>
              </p>
              <div className="flex flex-col md:flex-row items-start gap-5">
                <div className="w-14 h-14 rounded-3xl bg-secondary flex items-center justify-center shrink-0 text-xl text-primary">
                  AM
                </div>
                <div>
                  <SectionHeading className="!mb-1 text-text-primary tracking-tight">
                    {venture.name}
                  </SectionHeading>
                  <SubHeading className="max-w-2xl text-text-gray font-normal leading-relaxed">
                    {venture.branding.description}
                  </SubHeading>

                  <div className="flex flex-wrap gap-2.5 mt-4">
                    <Badge status="green" className={"text-[13px] px-3 py-0.5"}>
                      {venture.status}
                    </Badge>
                    <Badge status="blue" className={"text-[13px] px-3 py-0.5"}>
                      Stage: Fit testing
                    </Badge>
                    <Badge status="gray" className={"text-[13px] px-3 py-0.5"}>
                      Owner: D. Chen
                    </Badge>
                    <Badge status="gray" className={"text-[13px] px-3 py-0.5"}>
                      12 interviews
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between items-end">
              <div className="flex flex-col md:flex-row gap-3 mt-2 self-start xl:self-start items-center w-full 2xl:w-auto">
                <Searchbox
                  placeholder="Search within venture"
                  containerClassName="w-full 2xl:w-[270px] flex-1"
                />
                <BorderButton className="flex items-center justify-center gap-2 px-5 py-2 text-sm text-primary md:w-fit">
                  <FiExternalLink className="w-4 h-4" />
                  Live candidate link
                </BorderButton>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="column-no-break-container gap-6">
            {/* Left Column (Branding & Tone) */}
            <BrandingCard />
            <AssignAdmin data={venture.venture_admin} />
            <FAQs />

            {/* Right Column (FAQs, System Prompt, Knowledge) */}
            <ToneCard />
            <div className="flex flex-col gap-6">
              <SystemPromptCard />
              <Knowledge />
            </div>
          </div>

          {/* Floating Action Bar */}
          <div className="flex flex-col gap-5 xl:gap-8 2xl:flex-row justify-between items-center mt-8">
            <p className="text-gray-500 max-w-3xl font-medium flex flex-col md:flex-row md:items-center gap-2">
              <Badge className="text-[13px] py-1 w-fit mx-auto md:mx-0">
                Config on venture
              </Badge>
              <span className="text-[13px] text-center md:text-left">
                {" "}
                Branding, tone, FAQs, system prompt, and knowledge were
                initially set on creation and remain fully editable.
              </span>
            </p>
            <div className="flex flex-col md:flex-row gap-3">
              <BorderButton className="text-gray-600 hover:text-gray-900 !text-sm font-semibold px-4 py-2 hover:bg-gray-100 rounded-full transition-colors whitespace-nowrap">
                Discard unsaved changes
              </BorderButton>
              <Button className="!text-sm px-6">
                Save & open interview preview
              </Button>
            </div>
          </div>
        </>
      )}
    </SecondaryWrapper>
  );
}
