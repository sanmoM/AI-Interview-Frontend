"use client";

import InnerDivHeader from "@/components/shared/inner-div-header";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import ItemCard from "@/components/shared/item-card";
import BorderButton from "@/components/ui/buttons/border-button";
import Button from "@/components/ui/buttons/button";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsPersonWorkspace } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";
import FlowForm from "@/components/flows/flow-form";

export default function Flows({ data, fetchVenture }) {
  const axios = useAuthAxios();

  const [mode, setMode] = useState("show");
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  // const [updateLoading, setUpdateLoading] = useState(false);

  const [createData, setCreateData] = useState({
    name: "",
    role_id: "",
    status: "active",
  });

  const [editData, setEditData] = useState({
    name: "",
    role_id: "",
    status: "active",
  });

  const handleEditData = (name, value) => {
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateData = (name, value) => {
    setCreateData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ---------------- CREATE ---------------- */

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("/admin/flows", {
        ...createData,
        venture_id: data?.id,
      });

      toast.success("Flow created successfully!");
      fetchVenture();
      setCreateData({ name: "", role_id: "", status: "active" });
      setMode("show");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  /* ---------------- UPDATE ---------------- */

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(`/admin/flows/${editId}`, editData);

      toast.success("Flow updated successfully!");
      fetchVenture();
      setEditId(null);
      setEditData({
        name: "",
        role_id: "",
        status: "active",
      });
      setMode("show");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  /* ---------------- DELETE ---------------- */

  const handleDelete = async (id) => {
    setLoading(true);

    try {
      await axios.delete(`/admin/flows/${id}`);
      toast.success("Flow deleted successfully!");
      fetchVenture();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  /* ---------------- PREFILL EDIT ---------------- */

  useEffect(() => {
    if (editId) {
      const flow = data?.flows?.find((f) => f.id === editId);
      if (!flow) return;

      setEditData({
        name: flow.name,
        role_id: flow.role_id,
        status: flow.status,
      });
    }
  }, [editId, data?.flows]);

  /* ---------------- UI ---------------- */

  return (
    <InnerWrapper>
      <InnerDivHeader
        Icon={BsPersonWorkspace}
        title="Flows"
        description="Add a new flow to the venture."
        containerClassName="mb-6 md:mb-0"
      />

      {mode === "show" ? (
        <div className="flex flex-col mt-6 space-y-3">
          {data?.flows?.map((flow) =>
            editId === flow.id ? (
              <div key={flow.id}>
                <FlowForm
                  data={editData}
                  setData={handleEditData}
                  roles={data?.roles?.map((role) => ({
                    label: role.name,
                    value: role.id,
                  }))}
                  status={[
                    { label: "Active", value: "active" },
                    { label: "Inactive", value: "inactive" },
                  ]}
                />
                <div className="flex justify-end gap-4">
                  <BorderButton
                    onClick={() => setEditId(null)}
                    className={
                      "w-fit ml-auto px-5 lg:py-1.5 text-xs lg:text-xs xl:text-sm 2xl:text-base mt-2"
                    }
                  >
                    Cancel
                  </BorderButton>
                  <Button
                    onClick={handleEdit}
                    loading={loading}
                    className={
                      "w-fit px-5 lg:py-1.5 text-xs lg:text-xs xl:text-sm 2xl:text-base mt-2"
                    }
                  >
                    Update
                  </Button>
                </div>
              </div>
            ) : (
              <ItemCard
                key={flow.id}
                data={{
                  title: flow.name,
                  description: `Role: ${flow.role?.name ?? "—"}`,
                  category: flow.status,
                  ...flow,
                }}
                handleEdit={() => setEditId(flow.id)}
                handleDelete={() => handleDelete(flow.id)}
              />
            ),
          )}
        </div>
      ) : (
        <FlowForm
          data={createData}
          roles={data?.roles?.map((role) => ({
            label: role.name,
            value: role.id,
          }))}
          status={[{ label: "Active", value: "active" }]}
          setData={handleCreateData}
        />
      )}

      <div className="flex justify-between items-center mt-6">
        <BorderButton
          onClick={() => (mode === "show" ? setMode("add") : setMode("show"))}
          className="flex w-fit items-center gap-2 text-text-gray font-medium px-4 py-2 rounded-full hover:bg-gray-50 transition-colors !text-[13px]"
        >
          {mode === "show" ? (
            <>
              <FiPlus /> Add Flow
            </>
          ) : (
            <>
              <CgClose /> Cancel
            </>
          )}
        </BorderButton>

        {mode === "add" && (
          <Button
            onClick={handleCreate}
            loading={loading}
            className={
              "w-fit ml-auto px-6 mt-auto text-xs md:text-sm 2xl:text-base"
            }
          >
            Add Flow
          </Button>
        )}
      </div>
    </InnerWrapper>
  );
}
