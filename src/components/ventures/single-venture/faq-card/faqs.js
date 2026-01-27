"use client";

import InnerDivHeader from "@/components/shared/inner-div-header";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import BorderButton from "@/components/ui/buttons/border-button";
import Button from "@/components/ui/buttons/button";
import TextAreaInput from "@/components/ui/inputs/text-area-input";
import TextInput from "@/components/ui/inputs/text-input";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useState } from "react";
import toast from "react-hot-toast";
import { CgClose } from "react-icons/cg";
import { FiHelpCircle, FiPlus } from "react-icons/fi";
import FAQCard from "./components/faq-card";
import SelectBox from "@/components/ui/inputs/select-box";

export default function FAQs({ data, fetchVenture }) {
  const [mode, setMode] = useState("show");
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [order, setOrder] = useState(null);
  const [type, setType] = useState("text");
  const [flow, setFlow] = useState(null);
  const axios = useAuthAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/admin/questions", {
        flow_id: flow,
        question_text: question,
        question_type: type,
        order_no: order,
      });
      toast.success("Admin assigned successfully!");
      fetchVenture();
      setQuestion("");
      setOrder("");
      setMode("show");
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };
  return (
    <InnerWrapper>
      <InnerDivHeader
        Icon={FiHelpCircle}
        title="FAQs"
        description="Venture-specific questions candidates can search."
        badgeLabel="18 items"
        containerClassName={"mb-6 md:mb-0"}
      />

      {mode === "show" ? (
        <div className="space-y-4 my-6">
          {data?.flows?.map((flow, index) =>
            flow.faqs?.map((faq, index) => (
              <FAQCard
                key={index}
                title={faq.question_text}
                description={faq.question_text}
                category={faq.question_type}
              />
            )),
          )}
        </div>
      ) : (
        <div
          className="space-y-4 h-full flex flex-col mt-6"
          onSubmit={handleSubmit}
        >
          <TextInput
            placeholder="Question"
            label="Question"
            required
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            size="sm"
          />
          <SelectBox
            options={data?.flows?.map((flow) => ({
              label: flow.name,
              value: flow.id,
            }))}
            value={flow}
            onChange={(e) => setFlow(e.target.value)}
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
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Select type"
            label={"Type"}
            required
            size="sm"
          />
          <TextInput
            placeholder="Order"
            label="Order"
            required
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            size="sm"
            inputClassName={"h-32 resize-none"}
            type="number"
          />
        </div>
      )}

      <div className="flex justify-between md:gap-4 items-center mt-6">
        <BorderButton
          onClick={() => (mode === "show" ? setMode("add") : setMode("show"))}
          className="flex w-fit items-center gap-2 text-text-gray font-medium px-4 py-2 rounded-full hover:bg-gray-50 transition-colors !text-[13px]"
        >
          {mode === "show" ? (
            <>
              <FiPlus className="w-4 h-4 text-text-gray" />
              Add FAQ
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
              onClick={handleSubmit}
              className={
                "w-fit ml-auto px-6 mt-auto text-xs md:text-sm 2xl:text-base"
              }
              loading={loading}
              disabled={loading}
            >
              Add FAQ
            </Button>
          ) : (
            <button className="text-primary text-xs md:text-sm font-semibold hover:underline cursor-pointer">
              Manage categories
            </button>
          )}
        </div>
      </div>
    </InnerWrapper>
  );
}
