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

export default function VentureCreatePage() {
  const [loading, setLoading] = useState(false);

  // venture fields
  const [name, setName] = useState("");
  const [status, setStatus] = useState(1);
  const [logo, setLogo] = useState(null);

  // branding
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");

  // admin
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const axios = useAuthAxios();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (websiteLink && !isValidUrl(websiteLink.trim())) {
      toast.error("Please enter a valid website link!");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();

      // ✅ main venture data
      formData.append("name", name);
      formData.append("status", status);

      // ✅ logo (same as update)
      if (logo) {
        formData.append("logo", logo);
      }

      // ✅ branding (same structure as update)
      formData.append(
        "branding_json",
        JSON.stringify({
          description,
          phone,
          websiteLink,
        }),
      );

      // ✅ admin (IMPORTANT — same as update)
      formData.append(
        "venture_admin",
        JSON.stringify({
          name: adminName,
          email: adminEmail,
          password: adminPassword,
        }),
      );

      await axios.post("/super/ventures", formData);

      toast.success("Venture created successfully!");
      router.push("/ventures");
    } catch (error) {
      console.log(error);
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
          containerClassName={"mb-6 md:mb-0"}
        />

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* LOGO */}
          <ImageInput
            placeholder="Venue logo"
            image={logo}
            setImage={setLogo}
            containerClassName={"w-40 h-40 ml-0 mt-6"}
          />

          {/* NAME */}
          <TextInput
            placeholder="Venue name"
            label="Venue name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* WEBSITE + STATUS */}
          <div className="grid lg:grid-cols-2 gap-4">
            <TextInput
              placeholder="Website link"
              label="Website link"
              value={websiteLink}
              onChange={(e) => setWebsiteLink(e.target.value)}
            />

            <SelectBox
              options={[
                { value: 1, label: "Active" },
                { value: 0, label: "Inactive" },
              ]}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <TextAreaInput
            placeholder="Venue description"
            label="Venue description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            inputClassName={"h-40 resize-none"}
          />

          {/* ADMIN SECTION */}
          <h1 className="text-2xl font-bold mt-10 text-text-primary">
            Venture Admin
          </h1>

          <div className="grid lg:grid-cols-2 gap-4">
            <TextInput
              placeholder="Admin Name"
              label="Admin Name"
              required
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
            />

            <TextInput
              placeholder="Admin Email"
              label="Admin Email"
              required
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
            />
          </div>

          <TextInput
            placeholder="Password"
            label="Password"
            type="password"
            required
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />

          {/* SUBMIT */}
          <Button className={"w-fit px-6"} loading={loading} disabled={loading}>
            Create Venture
          </Button>
        </form>
      </InnerWrapper>
    </SecondaryWrapper>
  );
}
