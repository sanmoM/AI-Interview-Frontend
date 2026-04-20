import React from "react";
import TextInput from "../ui/inputs/text-input";
import SelectBox from "../ui/inputs/select-box";

export default function FaqForm({ data, setData, flows }) {
  return (
    <div className="space-y-4 h-full flex flex-col mt-6">
      <TextInput
        placeholder="Question"
        label="Question"
        required
        value={data.question_text}
        onChange={(e) => setData('question_text', e.target.value)}
        size="sm"
      />
      <SelectBox
        options={flows}
        value={data.flow_id}
        onChange={(e) => setData('flow_id', e.target.value)}
        placeholder="Select flow"
        label={"Flow"}
        required
        size="sm"
      />
      <SelectBox
        options={[
          {
            value: "text",
            label: "Text",
          },
        ]}
        value={data.question_type}
        onChange={(e) => setData('question_type', e.target.value)}
        placeholder="Select type"
        label={"Type"}
        required
        size="sm"
      />
      <TextInput
        placeholder="Order"
        label="Order"
        required
        value={data.order_no}
        onChange={(e) => setData('order_no', e.target.value)}
        size="sm"
        inputClassName={"h-32 resize-none"}
        type="number"
      />
    </div>
  );
}
