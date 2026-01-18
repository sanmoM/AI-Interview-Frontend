"use client";

import InnerDivHeader from "@/components/shared/inner-div-header";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import Button from "@/components/ui/buttons/button";
import TextAreaInput from "@/components/ui/inputs/text-area-input";
import TextInput from "@/components/ui/inputs/text-input";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonWorkspace } from "react-icons/bs";

export default function AddRole() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const axios = useAuthAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/admin/roles", {
        name,
        email: description,
        password,
        type,
      });
      toast.success("Admin assigned successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <InnerWrapper>
      <InnerDivHeader
        Icon={BsPersonWorkspace}
        title="Role"
        description="Add a new role to the venture."
        containerClassName={"mb-6 md:mb-0"}
      />
      <form
        className="space-y-4 h-full flex flex-col mt-6"
        onSubmit={handleSubmit}
      >
        <TextInput
          placeholder="Name"
          label="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="sm"
        />
        <TextAreaInput
          placeholder="Description"
          label="Description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          size="sm"
          inputClassName={"h-32 resize-none"}
        />
        <Button
          className={
            "w-fit ml-auto px-6 mt-auto text-xs md:text-sm 2xl:text-base"
          }
          loading={loading}
          disabled={loading}
        >
          Add Role
        </Button>
      </form>
    </InnerWrapper>
  );
}
