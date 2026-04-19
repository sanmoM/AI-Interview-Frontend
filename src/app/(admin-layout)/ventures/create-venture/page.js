"use client";

import InnerDivHeader from "@/components/shared/inner-div-header";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import SecondaryWrapper from "@/components/shared/wrapper/secondary-wrapper";
import Button from "@/components/ui/buttons/button";
import ImageInput from "@/components/ui/inputs/image-input";
import SelectBox from "@/components/ui/inputs/select-box";
import TextAreaInput from "@/components/ui/inputs/text-area-input";
import TextInput from "@/components/ui/inputs/text-input";
import useAuthAxios from "@/hooks/useAuthAxios";
import { isValidUrl } from "@/utils/url";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaStore } from "react-icons/fa";

export default function VentureDetailPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [logo, setLogo] = useState(null);
  const axios = useAuthAxios();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidUrl(websiteLink.trim())) {
      toast.error("Please enter a valid website link!");
      return;
    }
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("status", status);
      // formData.append("slug", slug);

      // ✅ only append logo if it exists
      if (logo) {
        formData.append("logo", logo);
      }

      formData.append(
        "branding_json",
        JSON.stringify({
          description,
          phone,
          websiteLink,
        }),
      );

      const res = await axios.post("/super/ventures", formData);

      toast.success("Venture created successfully!");
      router.push("/ventures");
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <SecondaryWrapper>
      <InnerWrapper className={"h-fit"}>
        <InnerDivHeader
          Icon={FaStore}
          title="Create New Venture"
          description="Create a new venture to apply to Aurora."
          //   badgeLabel="Set on creation"
          containerClassName={"mb-6 md:mb-0"}
        />

        <form className="space-y-4" onSubmit={handleSubmit}>
          <ImageInput
            placeholder="Venue logo"
            image={logo}
            setImage={setLogo}
            containerClassName={" w-40 h-40 ml-0 mt-6"}
          />
          <TextInput
            placeholder="Venue name"
            label="Venue name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="grid lg:grid-cols-2 gap-4">
            <TextInput
              placeholder="Website link"
              label="Website link"
              required
              value={websiteLink}
              onChange={(e) => setWebsiteLink(e.target.value)}
            />
            <SelectBox
              options={[
                {
                  value: 1,
                  label: "Active",
                },
                {
                  value: 0,
                  label: "Inactive",
                },
              ]}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Select tone preset"
              label={"Status"}
              required
            />
          </div>
          <TextAreaInput
            placeholder="Venue description"
            label="Venue description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            inputClassName={"h-40 resize-none"}
          />
          <Button
            className={"w-fit ml-auto px-6"}
            loading={loading}
            disabled={loading}
          >
            Create Venture
          </Button>
        </form>
      </InnerWrapper>
    </SecondaryWrapper>
  );
}
