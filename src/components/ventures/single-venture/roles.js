"use client";

import RoleForm from "@/components/roles/role-form";
import InnerDivHeader from "@/components/shared/inner-div-header";
import ItemCard from "@/components/shared/item-card";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import BorderButton from "@/components/ui/buttons/border-button";
import Button from "@/components/ui/buttons/button";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsPersonWorkspace } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";

export default function Roles({ data, fetchVenture }) {
  const [editId, setEditId] = useState(null);
  const [mode, setMode] = useState("show");
  const [loading, setLoading] = useState(false);

  const [createData, setCreateData] = useState({
    name: "",
    description: "",
    system_prompt: "",
  });

  const [editData, setEditData] = useState({
    name: "",
    description: "",
    system_prompt: "",
  });

  const handleCreateData = (name, value) => {
    setCreateData({
      ...createData,
      [name]: value,
    });
  };

  const handleEditData = (name, value) => {
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const axios = useAuthAxios();

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/admin/roles", {
        ...createData,
        venture_id: data?.id,
      });
      toast.success("Assistant created successfully!");
      fetchVenture();
      setCreateData({
        name: "",
        description: "",
        system_prompt: "",
      });
      setMode("show");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`/admin/roles/${editId}`, {
        ...editData,
        id: editId,
      });
      toast.success("Role updated successfully!");
      fetchVenture();
      setMode("show");
      setEditData({
        name: "",
        description: "",
        system_prompt: "",
      });
      setEditId(null);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/admin/roles/${id}`);
      toast.success("Role deleted successfully!");
      fetchVenture();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (editId) {
      const role = data?.roles.find((role) => role.id === editId);
      setEditData({
        name: role.name,
        description: role.description,
        system_prompt: role.system_prompt,
      });
    }
  }, [editId]);

  return (
    <InnerWrapper>
      <InnerDivHeader
        Icon={BsPersonWorkspace}
        title="Role"
        description="Add a new role to the venture."
        containerClassName={"mb-6 md:mb-0"}
      />
      {mode === "show" ? (
        <>
          {data?.roles.length > 0 && (
            <div className="flex flex-col mt-6 space-y-3">
              {data?.roles.map((role, index) =>
                editId === role.id ? (
                  <div>
                    <RoleForm data={editData} setData={handleEditData} />
                    <div className="flex justify-end gap-4">
                      <BorderButton
                        className={
                          "w-fit ml-auto px-5 lg:py-1.5 text-xs lg:text-xs xl:text-sm 2xl:text-base mt-2"
                        }
                        onClick={() => setEditId(null)}
                      >
                        Cancel
                      </BorderButton>
                      <Button
                        loading={loading}
                        className={
                          "w-fit px-5 lg:py-1.5 text-xs lg:text-xs xl:text-sm 2xl:text-base mt-2"
                        }
                        onClick={handleEdit}
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                ) : (
                  <ItemCard
                    data={{
                      title: role.name,
                      description: role.description,
                      category: role.category,
                      ...role,
                    }}
                    handleDelete={() => handleDelete(role.id)}
                    handleEdit={() => setEditId(role.id)}
                  />
                ),
              )}
            </div>
          )}
        </>
      ) : (
        <RoleForm data={createData} setData={handleCreateData} />
      )}

      <div className="flex justify-between md:gap-4 items-center mt-6">
        <BorderButton
          onClick={() => (mode === "show" ? setMode("add") : setMode("show"))}
          className="flex w-fit items-center gap-2 text-text-gray font-medium px-4 py-2 rounded-full hover:bg-gray-50 transition-colors !text-[13px]"
        >
          {mode === "show" ? (
            <>
              <FiPlus className="w-4 h-4 text-text-gray" />
              Add Role
            </>
          ) : (
            <>
              <CgClose className="w-4 h-4 text-text-gray" />
              Cancel
            </>
          )}
        </BorderButton>

        <div className="">
          {mode === "add" ? (
            <Button
              onClick={handleCreate}
              className={
                "w-fit ml-auto px-6 mt-auto text-xs md:text-sm 2xl:text-base"
              }
              loading={loading}
              disabled={loading}
            >
              Add Role
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </InnerWrapper>
  );
}
