import InnerDivHeader from "@/components/shared/inner-div-header";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import Button from "@/components/ui/buttons/button";
import ImageInput from "@/components/ui/inputs/image-input";
import TextAreaInput from "@/components/ui/inputs/text-area-input";
import TextInput from "@/components/ui/inputs/text-input";
import { IMAGE_BASE_URL } from "@/config";
import useAuthAxios from "@/hooks/useAuthAxios";
import { cn } from "@/utils/cn";
import { isValidUrl } from "@/utils/url";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaStore } from "react-icons/fa";

export default function UpdateVenture({
  venture,
  fetchVenture,
  setVenture,
  hasBannedButton = true,
  hasAdminDetails = true,
  hasDomain = true,
}) {
  const [loading, setLoading] = useState(false);
  const axios = useAuthAxios();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      venture?.branding?.websiteLink &&
      !isValidUrl(venture?.branding?.websiteLink.trim())
    ) {
      toast.error("Please enter a valid website link!");
      return;
    }
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", venture?.name);
      formData.append("domain", venture?.domain);

      if (venture?.branding?.logo instanceof File) {
        formData.append("logo", venture?.branding?.logo);
      }

      formData.append("branding_json", JSON.stringify(venture?.branding));
      formData.append("venture_admin", JSON.stringify(venture?.venture_admin));

      await axios.put("/ventures/" + venture?.id, formData);
      toast.success("Venture updated successfully!");
      router.back();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  console.log(venture, "Venture");

  const handleBan = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put("/ventures/" + venture?.id, {
        status: venture?.status ? 0 : 1,
      });
      toast.success("Venture banned successfully!");
      fetchVenture();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

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
        {hasBannedButton && (
          <Button
            className={cn(
              "w-fit px-6 py-1.5! text-sm!",
              venture?.status
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600",
            )}
            onClick={handleBan}
            loading={loading}
            disabled={loading}
          >
            {venture?.status ? "Ban" : "Unban"}
          </Button>
        )}
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <ImageInput
          placeholder="Venue logo"
          image={
            typeof venture?.branding?.logo === "string"
              ? IMAGE_BASE_URL + venture?.branding?.logo
              : venture?.branding?.logo
          }
          setImage={(e) =>
            setVenture((prev) => ({
              ...prev,
              branding: {
                ...prev.branding,
                logo: e,
              },
            }))
          }
          containerClassName={" w-40 h-40 ml-0 mt-6"}
        />
        <div className="grid grid-cols-2 gap-4">
          <TextInput
            placeholder="Venue name"
            label="Venue name"
            value={venture?.name}
            onChange={(e) =>
              setVenture((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <TextInput
            placeholder="Website link"
            label="Website link"
            value={venture?.branding?.websiteLink}
            onChange={(e) =>
              setVenture((prev) => ({
                ...prev,
                branding: {
                  ...prev.branding,
                  websiteLink: e.target.value,
                },
              }))
            }
          />
        </div>
        {hasDomain && (
          <TextInput
            placeholder="Domain"
            label="Domain"
            value={venture?.domain}
            onChange={(e) =>
              setVenture((prev) => ({ ...prev, domain: e.target.value }))
            }
            inputClassName={"h-40 resize-none"}
          />
        )}
        <TextAreaInput
          placeholder="Venue description"
          label="Venue description"
          value={venture?.branding?.description}
          onChange={(e) =>
            setVenture((prev) => ({
              ...prev,
              branding: {
                ...prev.branding,
                description: e.target.value,
              },
            }))
          }
          inputClassName={"h-40 resize-none"}
        />
        {hasAdminDetails && (
          <>
            <h1 className="text-2xl font-bold mt-10 text-text-primary">
              Venture Admin
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <TextInput
                placeholder="Admin Name"
                label="Admin Name"
                value={venture?.venture_admin?.name}
                onChange={(e) =>
                  setVenture((prev) => ({
                    ...prev,
                    venture_admin: {
                      ...prev.venture_admin,
                      name: e.target.value,
                    },
                  }))
                }
              />
              <TextInput
                placeholder="Admin Email"
                label="Admin Email"
                value={venture?.venture_admin?.email}
                onChange={(e) =>
                  setVenture((prev) => ({
                    ...prev,
                    venture_admin: {
                      ...prev.venture_admin,
                      email: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <TextInput
              placeholder={"New Password"}
              label={"New Password"}
              type={"password"}
              value={venture?.venture_admin?.password || ""}
              onChange={(e) =>
                setVenture((prev) => ({
                  ...prev,
                  venture_admin: {
                    ...prev.venture_admin,
                    password: e.target.value,
                  },
                }))
              }
            />
          </>
        )}
        <Button
          type="submit"
          className="px-6 py-2 mt-4 w-fit"
          loading={loading}
          disabled={loading}
        >
          Update Venture
        </Button>
      </form>
    </InnerWrapper>
  );
}
