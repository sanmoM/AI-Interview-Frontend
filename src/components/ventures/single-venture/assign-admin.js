"use client";

import InnerDivHeader from "@/components/shared/inner-div-header";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import Button from "@/components/ui/buttons/button";
import SelectBox from "@/components/ui/inputs/select-box";
import TextInput from "@/components/ui/inputs/text-input";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { LuUserRound } from "react-icons/lu";

export default function AssignAdmin({ data }) {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(data?.type || "venture_admin");
  const [name, setName] = useState(data?.name || "");
  const [email, setEmail] = useState(data?.email || "");
  const [password, setPassword] = useState("");
  const axios = useAuthAxios();
  const id = useParams().id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/super/venture-admins", {
        name,
        email,
        password,
        type,
        venture_id: id,
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
        Icon={LuUserRound}
        title="Venture Admin"
        description="Venture Admins can manage the venture, interview questions, and interviewers."
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
        <TextInput
          placeholder="Email"
          label="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="sm"
        />
        <TextInput
          placeholder="Password"
          label="Password"
          required
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          size="sm"
        />
        <SelectBox
          options={[
            {
              value: "venture_admin",
              label: "Venture Admin",
            },
          ]}
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Select tone preset"
          label={"Status"}
          required
          size="sm"
        />
        <Button
          className={
            "w-fit ml-auto px-6 mt-auto text-xs md:text-sm 2xl:text-base"
          }
          loading={loading}
          disabled={loading}
        >
          Assign Admin
        </Button>
      </form>
    </InnerWrapper>
  );
}
