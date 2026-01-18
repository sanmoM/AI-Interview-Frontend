"use client";

import InnerDivHeader from "@/components/shared/inner-div-header";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import Button from "@/components/ui/buttons/button";
import TextAreaInput from "@/components/ui/inputs/text-area-input";
import TextInput from "@/components/ui/inputs/text-input";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonWorkspace, BsPlusLg } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Roles({ data, fetchVenture }) {
  const [mode, setMode] = useState("show");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const axios = useAuthAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/admin/roles", {
        name,
        description,
        venture_id: data?.id,
      });
      toast.success("Admin assigned successfully!");
      fetchVenture();
      setName("");
      setDescription("");
      setMode("show");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <InnerWrapper>
      <div className="flex justify-between items-center">
        <InnerDivHeader
          Icon={BsPersonWorkspace}
          title="Role"
          description="Add a new role to the venture."
          containerClassName={"mb-6 md:mb-0"}
        />
        <button
          onClick={() => (mode === "show" ? setMode("add") : setMode("show"))}
          className={
            "w-10 bg-primary flex justify-center items-center rounded-full !p-0 text-white aspect-square"
          }
        >
          {mode === "show" ? <BsPlusLg size={24} /> : <IoMdClose size={24} />}
        </button>
      </div>
      {mode === "show" ? (
        <div className="flex flex-col mt-6">
          {data?.roles.map((role, index) => (
            <div
              key={index}
              className="flex flex-col relative gap-1 mt-4 border border-primary py-2 px-4 rounded-lg"
            >
              <p className="text-black text-base md:text-lg font-medium">
                {role.name}
              </p>
              <p className="text-text-gray text-xs md:text-sm font-medium">
                {role.description}
              </p>
              <button className="absolute text-green-400 top-2 right-2">
                <FiEdit size={24} />
              </button>
            </div>
          ))}
        </div>
      ) : (
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
      )}
    </InnerWrapper>
  );
}
