"use client";

import InnerDivHeader from "@/components/shared/inner-div-header";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/buttons/button";
import SelectBox from "@/components/ui/inputs/select-box";
import TextInput from "@/components/ui/inputs/text-input";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonWorkspace, BsPlusLg } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Flows({ data, fetchVenture }) {
  const [mode, setMode] = useState("show");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("active");
  const axios = useAuthAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/admin/flows", {
        name,
        role_id: role,
        status,
        venture_id: data?.id,
      });
      toast.success("Admin assigned successfully!");
      fetchVenture();
      setName("");
      setRole("");
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
          title="Flows"
          description="Add a new flow to the venture."
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
          {data?.flows?.map((flow, index) => (
            <div
              key={index}
              className="flex flex-col relative gap-1 mt-4 border border-primary py-2 px-4 rounded-lg"
            >
              <div className="flex gap-6 items-center mr-10">
                <p className="text-black text-base md:text-lg font-medium">
                  {flow.name}
                </p>
                <Badge status="green" className={"text-xs py-1"}>{flow?.status}</Badge>
              </div>

              <p className="text-text-gray text-xs md:text-sm font-medium">
                {flow.description}
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
          <SelectBox
            options={data?.roles?.map((role) => ({
              label: role.name,
              value: role.id,
            }))}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Select role"
            label={"Role"}
            required
            size="sm"
          />
          <SelectBox
            options={[
              {
                value: "active",
                label: "Active",
              },
            ]}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Select Status"
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
            Add Flow
          </Button>
        </form>
      )}
    </InnerWrapper>
  );
}
