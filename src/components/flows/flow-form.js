import React from "react";
import TextInput from "../ui/inputs/text-input";
import SelectBox from "../ui/inputs/select-box";

export default function FlowForm({ data, setData, roles, status }) {
  return (
    <div className="space-y-4">
      <TextInput
        label="Name"
        placeholder="Name"
        value={data.name}
        onChange={(e) => setData("name", e.target.value)}
        size="sm"
      />

      <SelectBox
        label="Role"
        // options={data?.roles?.map((role) => ({
        //   label: role.name,
        //   value: role.id,
        // }))}
        options={roles}
        value={data.role_id}
        onChange={(e) => setData("role_id", e.target.value)}
        size="sm"
      />

      <SelectBox
        label="Status"
        // options={[
        //   { label: "Active", value: "active" },
        //   { label: "Inactive", value: "inactive" },
        // ]}
        options={status}
        value={data.status}
        onChange={(e) => setData("status", e.target.value)}
        size="sm"
      />
    </div>
  );
}
