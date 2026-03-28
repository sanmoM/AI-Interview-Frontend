"use client";

import InnerDivHeader from "@/components/shared/inner-div-header";
import Loader from "@/components/shared/loader";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import Button from "@/components/ui/buttons/button";
import SectionHeading from "@/components/ui/headings/section-heading";
import SubHeading from "@/components/ui/headings/sub-heading";
import ImageInput from "@/components/ui/inputs/image-input";
import SelectBox from "@/components/ui/inputs/select-box";
import TextAreaInput from "@/components/ui/inputs/text-area-input";
import TextInput from "@/components/ui/inputs/text-input";
import AssignAdmin from "@/components/ventures/single-venture/assign-admin";
import UpdateVenture from "@/components/ventures/single-venture/update-venture";
import { IMAGE_BASE_URL } from "@/config";
import useAuthAxios from "@/hooks/useAuthAxios";
import { isValidUrl } from "@/utils/url";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStore } from "react-icons/fa";

export default function VentureDetailPage() {
  const [initialLoad, setInitialLoad] = useState(true);
  const [venture, setVenture] = useState({});
  const { id } = useParams();
  const axios = useAuthAxios();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [logo, setLogo] = useState(null);
  // const router = useRouter();

  useEffect(() => {
    const fetchVenture = async () => {
      const res = await axios.get(`/super/single-venture/${id}`);
      const venture = res?.data?.venture;
      venture.branding = JSON.parse(venture?.branding_json);
      delete venture.branding_json;
      setVenture(venture);
      setName(venture?.name);
      setStatus(venture?.status);
      setDescription(venture?.branding?.description);
      setWebsiteLink(venture?.branding?.websiteLink);
      if (venture?.branding?.logo) {
        setLogo(IMAGE_BASE_URL + venture?.branding?.logo);
      }
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
              <div className="flex flex-col md:flex-row items-start gap-5">
                <div className="w-14 h-14 rounded-3xl bg-secondary flex items-center justify-center shrink-0 text-xl text-primary">
                  {venture?.name?.[0]}
                </div>
                <div className="flex-1">
                  <SectionHeading className="!mb-1 text-text-primary tracking-tight">
                    {venture?.name}
                  </SectionHeading>
                  <SubHeading className=" text-text-gray font-normal leading-relaxed">
                    {venture?.branding?.description}
                  </SubHeading>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="items-start">
            <UpdateVenture
              name={name}
              status={status}
              description={description}
              websiteLink={websiteLink}
              logo={logo}
              loading={loading}
              setLoading={setLoading}
              setName={setName}
              setStatus={setStatus}
              setDescription={setDescription}
              setWebsiteLink={setWebsiteLink}
              setLogo={setLogo}
              hasStatus={true}
              id={id}
              nameReadOnly={true}
              descriptionReadOnly={true}
              websiteLinkReadOnly={true}
              logoReadOnly={true}
            />
            {/* <AssignAdmin data={venture.venture_admin} /> */}
          </div>
        </>
      )}
    </SecondaryWrapper>
  );
}
