import React from "react";
import TextInput from "../ui/inputs/text-input";
import TextAreaInput from "../ui/inputs/text-area-input";

export default function RoleForm({ data, setData }) {
  return (
    <div className="space-y-4 h-full flex flex-col mt-6">
      <TextInput
        placeholder="Name"
        label="Name"
        required
        value={data.name}
        onChange={(e) => setData("name", e.target.value)}
        size="sm"
      />
      <TextAreaInput
        placeholder="Description"
        label="Description"
        required
        value={data.description}
        onChange={(e) => setData("description", e.target.value)}
        size="sm"
        inputClassName={"h-32 resize-none"}
      />
      <TextAreaInput
        placeholder="System prompt"
        label="System prompt"
        required
        value={data.system_prompt}
        onChange={(e) => setData("system_prompt", e.target.value)}
        size="sm"
        inputClassName={"h-32 resize-none"}
      />
    </div>
  );
}
