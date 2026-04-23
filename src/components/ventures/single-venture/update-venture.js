import InnerDivHeader from "@/components/shared/inner-div-header";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import Button from "@/components/ui/buttons/button";
import ImageInput from "@/components/ui/inputs/image-input";
import SelectBox from "@/components/ui/inputs/select-box";
import TextAreaInput from "@/components/ui/inputs/text-area-input";
import TextInput from "@/components/ui/inputs/text-input";
import useAuthAxios from "@/hooks/useAuthAxios";
import { cn } from "@/utils/cn";
import { isValidUrl } from "@/utils/url";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaStore } from "react-icons/fa";

export default function UpdateVenture({
  name,
  status,
  description,
  websiteLink,
  logo,
  setName,
  setStatus,
  setDescription,
  setWebsiteLink,
  setLogo,
  id,
  redirectUrl,
  nameReadOnly,
  descriptionReadOnly,
  websiteLinkReadOnly,
  logoReadOnly,
  fetchVenture,
  domain,
  admin,
}) {
  const [loading, setLoading] = useState(false);
  const axios = useAuthAxios();
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
          websiteLink,
        }),
      );

      const res = await axios.put("/ventures/" + id, formData);

      toast.success("Venture updated successfully!");
      if (redirectUrl) {
        router.push(redirectUrl);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  const handleBan = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put("/ventures/" + id, {
        status: status ? 0 : 1,
      });
      toast.success("Venture banned successfully!");
      fetchVenture();
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  console.log(admin);
  return (
    <InnerWrapper className={"break-inside-avoid"}>
      <div className="flex justify-between items-center">
        <InnerDivHeader
          Icon={FaStore}
          title="Update Venture"
          description="Update your Venture details."
          //   badgeLabel="Set on creation"
          containerClassName={"mb-6 md:mb-0"}
        />
        <Button
          className={cn(
            "w-fit px-6 py-1.5! text-sm!",
            status
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600",
          )}
          onClick={handleBan}
          loading={loading}
          disabled={loading}
        >
          {status ? "Banned" : "Unbanned"}
        </Button>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <ImageInput
          placeholder="Venue logo"
          image={logo}
          setImage={setLogo}
          containerClassName={" w-40 h-40 ml-0 mt-6"}
          readOnly={logoReadOnly}
        />
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            placeholder="Venue name"
            label="Venue name"
            required
            value={name || "N/A"}
            onChange={(e) => setName(e.target.value)}
            readOnly={nameReadOnly}
          />
          <TextInput
            placeholder="Website link"
            label="Website link"
            required
            value={websiteLink || "N/A"}
            onChange={(e) => setWebsiteLink(e.target.value)}
            readOnly={websiteLinkReadOnly}
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <TextInput
            placeholder="Domain"
            label="Domain"
            required
            value={domain || "N/A"}
            // onChange={(e) => setDescription(e.target.value)}
            inputClassName={"h-40 resize-none"}
            readOnly={true}
          />
        </div>
        <TextAreaInput
          placeholder="Venue description"
          label="Venue description"
          required
          value={description || "N/A"}
          onChange={(e) => setDescription(e.target.value)}
          inputClassName={"h-40 resize-none"}
          readOnly={descriptionReadOnly}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <TextInput
            placeholder="Admin Name"
            label="Admin Name"
            required
            value={admin?.name || "N/A"}
            readOnly={true}
          />
          <TextInput
            placeholder="Admin Email"
            label="Admin Email"
            required
            value={admin?.email || "N/A"}
            readOnly={true}
          />
        </div>
      </form>
    </InnerWrapper>
  );
}
