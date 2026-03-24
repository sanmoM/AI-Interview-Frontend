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
import toast from "react-hot-toast";
import { FaStore } from "react-icons/fa";

export default function UpdateVenture({
  name,
  status,
  description,
  websiteLink,
  logo,
  loading,
  setLoading,
  setName,
  setStatus,
  setDescription,
  setWebsiteLink,
  setLogo,
  hasStatus,
  id,
  redirectUrl,
}) {
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
      console.log(error);
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };
  return (
    <InnerWrapper>
      <InnerDivHeader
        Icon={FaStore}
        title="Update Venture"
        description="Update your Venture details."
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
        <div
          className={cn(
            "grid lg:grid-cols-1 gap-4",
            hasStatus && "lg:grid-cols-2",
          )}
        >
          <TextInput
            placeholder="Website link"
            label="Website link"
            required
            value={websiteLink}
            onChange={(e) => setWebsiteLink(e.target.value)}
          />
          {hasStatus && (
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
          )}
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
          Update
        </Button>
      </form>
    </InnerWrapper>
  );
}
