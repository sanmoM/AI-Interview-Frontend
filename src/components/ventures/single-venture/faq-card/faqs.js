// "use client";

// import InnerDivHeader from "@/components/shared/inner-div-header";
// import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
// import BorderButton from "@/components/ui/buttons/border-button";
// import Button from "@/components/ui/buttons/button";
// import TextAreaInput from "@/components/ui/inputs/text-area-input";
// import TextInput from "@/components/ui/inputs/text-input";
// import useAuthAxios from "@/hooks/useAuthAxios";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { CgClose } from "react-icons/cg";
// import { FiHelpCircle, FiPlus } from "react-icons/fi";
// import FAQCard from "./components/faq-card";
// import SelectBox from "@/components/ui/inputs/select-box";

// export default function FAQs({ data, fetchVenture }) {
//   const [mode, setMode] = useState("show");
//   const [loading, setLoading] = useState(false);
//   const [question, setQuestion] = useState("");
//   const [order, setOrder] = useState(null);
//   const [type, setType] = useState("text");
//   const [flow, setFlow] = useState(null);
//   const axios = useAuthAxios();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await axios.post("/admin/questions", {
//         flow_id: flow,
//         question_text: question,
//         question_type: type,
//         order_no: order,
//       });
//       toast.success("Admin assigned successfully!");
//       fetchVenture();
//       setQuestion("");
//       setOrder("");
//       setMode("show");
//     } catch (error) {
//       toast.error("Something went wrong!");
//     }
//     setLoading(false);
//   };
//   return (
//     <InnerWrapper>
//       <InnerDivHeader
//         Icon={FiHelpCircle}
//         title="FAQs"
//         description="Venture-specific questions candidates can search."
//         badgeLabel="18 items"
//         containerClassName={"mb-6 md:mb-0"}
//       />

//       {mode === "show" ? (
//         <div className="space-y-4 my-6">
//           {data?.flows?.map((flow, index) =>
//             flow.faqs?.map((faq, index) => (
//               <FAQCard
//                 key={index}
//                 title={faq.question_text}
//                 description={faq.question_text}
//                 category={faq.question_type}
//               />
//             )),
//           )}
//         </div>
//       ) : (
//         <div
//           className="space-y-4 h-full flex flex-col mt-6"
//           onSubmit={handleSubmit}
//         >
//           <TextInput
//             placeholder="Question"
//             label="Question"
//             required
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             size="sm"
//           />
//           <SelectBox
//             options={data?.flows?.map((flow) => ({
//               label: flow.name,
//               value: flow.id,
//             }))}
//             value={flow}
//             onChange={(e) => setFlow(e.target.value)}
//             placeholder="Select flow"
//             label={"Flow"}
//             required
//             size="sm"
//           />
//           <SelectBox
//             options={[
//               {
//                 value: "text",
//                 label: "Text",
//               },
//             ]}
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             placeholder="Select type"
//             label={"Type"}
//             required
//             size="sm"
//           />
//           <TextInput
//             placeholder="Order"
//             label="Order"
//             required
//             value={order}
//             onChange={(e) => setOrder(e.target.value)}
//             size="sm"
//             inputClassName={"h-32 resize-none"}
//             type="number"
//           />
//         </div>
//       )}

//       <div className="flex justify-between md:gap-4 items-center mt-6">
//         <BorderButton
//           onClick={() => (mode === "show" ? setMode("add") : setMode("show"))}
//           className="flex w-fit items-center gap-2 text-text-gray font-medium px-4 py-2 rounded-full hover:bg-gray-50 transition-colors !text-[13px]"
//         >
//           {mode === "show" ? (
//             <>
//               <FiPlus className="w-4 h-4 text-text-gray" />
//               Add FAQ
//             </>
//           ) : (
//             <>
//               <CgClose className="w-4 h-4 text-text-gray" />
//               Cancel
//             </>
//           )}
//         </BorderButton>

//         <div className="">
//           {mode === "add" ? (
//             <Button
//               onClick={handleSubmit}
//               className={
//                 "w-fit ml-auto px-6 mt-auto text-xs md:text-sm 2xl:text-base"
//               }
//               loading={loading}
//               disabled={loading}
//             >
//               Add FAQ
//             </Button>
//           ) : (
//             <button className="text-primary text-xs md:text-sm font-semibold hover:underline cursor-pointer">
//               Manage categories
//             </button>
//           )}
//         </div>
//       </div>
//     </InnerWrapper>
//   );
// }

"use client";

import FaqForm from "@/components/faqs/faq-form";
import InnerDivHeader from "@/components/shared/inner-div-header";
import ItemCard from "@/components/shared/item-card";
import InnerWrapper from "@/components/shared/wrapper/inner-wrapper";
import BorderButton from "@/components/ui/buttons/border-button";
import Button from "@/components/ui/buttons/button";
import useAuthAxios from "@/hooks/useAuthAxios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CgClose } from "react-icons/cg";
import { FiHelpCircle, FiPlus } from "react-icons/fi";

export default function FAQs({ data, fetchVenture }) {
  const axios = useAuthAxios();

  const [mode, setMode] = useState("show");
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);

  const [createData, setCreateData] = useState({
    flow_id: "",
    question_text: "",
    question_type: "text",
    order_no: "",
  });

  const [editData, setEditData] = useState({
    flow_id: "",
    question_text: "",
    question_type: "text",
    order_no: "",
  });

  const handleCreateData = (name, value) => {
    setCreateData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditData = (name, value) => {
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ---------------- CREATE ---------------- */

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("/admin/questions", createData);

      toast.success("FAQ created successfully!");
      fetchVenture();
      setCreateData({
        flow_id: "",
        question_text: "",
        question_type: "text",
        order_no: "",
      });
      setMode("show");
    } catch (err) {
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  /* ---------------- UPDATE ---------------- */

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.put(`/admin/questions/${editId}`, editData);

      toast.success("FAQ updated successfully!");
      fetchVenture();
      setEditId(null);
      setMode("show");
    } catch (err) {
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  /* ---------------- DELETE ---------------- */

  const handleDelete = async (id) => {
    setLoading(true);

    try {
      await axios.delete(`/admin/questions/${id}`);
      toast.success("FAQ deleted successfully!");
      fetchVenture();
    } catch (err) {
      toast.error("Something went wrong!");
    }

    setLoading(false);
  };

  /* ---------------- PREFILL EDIT ---------------- */

  useEffect(() => {
    if (!editId) return;

    const faq = data?.flows
      ?.flatMap((flow) => flow.faqs || [])
      .find((q) => q.id === editId);

    if (!faq) return;

    setEditData({
      flow_id: faq.flow_id,
      question_text: faq.question_text,
      question_type: faq.question_type,
      order_no: faq.order_no,
    });
  }, [editId, data?.flows]);

  /* ---------------- UI ---------------- */
  // console.log(data?.flows?.find((flow) => flow.id === faq.flow_id)?.name);

  return (
    <InnerWrapper>
      <InnerDivHeader
        Icon={FiHelpCircle}
        title="FAQs"
        description="Venture-specific questions candidates can search."
        containerClassName="mb-6 md:mb-0"
      />

      {mode === "show" ? (
        <div className="space-y-4 my-6">
          {data?.flows?.map((flow) =>
            flow.faqs?.map((faq) =>
              editId === faq.id ? (
                <div key={faq.id}>
                  <FaqForm
                    data={editData}
                    setData={handleEditData}
                    flows={data?.flows?.map((flow) => ({
                      label: flow.name,
                      value: flow.id,
                    }))}
                  />
                  <div className="flex justify-end gap-4 mt-2">
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
                <>
                  <ItemCard
                    key={faq.id}
                    data={{
                      title: faq.question_text,
                      description: `Flow: ${data?.flows?.find((flow) => parseInt(flow.id) === parseInt(faq.flow_id))?.name}`,
                      category: faq.question_type,
                      ...faq,
                    }}
                    handleEdit={() => setEditId(faq.id)}
                    handleDelete={() => handleDelete(faq.id)}
                  />
                </>
              ),
            ),
          )}
        </div>
      ) : (
        <FaqForm
          data={createData}
          setData={handleCreateData}
          flows={data?.flows?.map((flow) => ({
            label: flow.name,
            value: flow.id,
          }))}
        />
      )}

      <div className="flex justify-between items-center mt-6">
        <BorderButton
          onClick={() => (mode === "show" ? setMode("add") : setMode("show"))}
          className="flex w-fit items-center gap-2 text-text-gray font-medium px-4 py-2 rounded-full hover:bg-gray-50 transition-colors !text-[13px]"
        >
          {mode === "show" ? (
            <>
              <FiPlus /> Add FAQ
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
            Add FAQ
          </Button>
        )}
      </div>
    </InnerWrapper>
  );
}
