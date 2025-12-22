import Button from "@/components/ui/buttons/button";
import FileInput from "@/components/ui/inputs/file-input";
import SelectBox from "@/components/ui/inputs/select-box";
import TextInput from "@/components/ui/inputs/text-input";
import { useState } from "react";
import { FiFileText } from "react-icons/fi";

export default function Resume() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "Example@gmail.com",
    country: "",
    city: "",
    linkedinUrl: "",
    noLinkedIn: false,
    summary: "",
  });

  const [errors, setErrors] = useState({
    fullName: true,
    city: true,
    linkedinUrl: true,
  });
  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-12 mt-8 md:mt-10 lg:mt-14">
      {/* Left Sidebar */}
      <div className="w-64 flex-shrink-0">
        <h2 className="mb-1 font-semibold text-gray-900 md:text-lg">Resume</h2>
        <p className="text-sm text-text-gray">
          This will be shown to companies to find you opportunities.
        </p>
      </div>
      <div className="flex-1 space-y-6">
        {/* Full Name and Phone Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <TextInput
            label={"Full name"}
            placeholder={"Enter your full name"}
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            size="sm"
            required
          />
          {/* <PhoneNumberInput /> */}
        </div>

        {/* Email and Country Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <TextInput
            label={"Email"}
            placeholder={"Example@gmail.com"}
            value={formData.email}
            type="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            size="sm"
          />

          <div>
            <SelectBox
              label={"Country"}
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              size="sm"
              required
              options={[
                { value: "us", label: "United States" },
                { value: "uk", label: "United Kingdom" },
                { value: "ca", label: "Canada" },
              ]}
            />
          </div>
        </div>

        {/* City */}
        <TextInput
          label={"City"}
          placeholder={"Enter your city"}
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          size="sm"
          containerClassName={"md:w-[49%]"}
          required
        />

        {/* LinkedIn URL */}
        <TextInput
          label={"LinkedIn URL"}
          placeholder={"https://www.linkedin.com/in/..."}
          value={formData.linkedinUrl}
          onChange={(e) =>
            setFormData({ ...formData, linkedinUrl: e.target.value })
          }
          size="sm"
          disabled={formData.noLinkedIn}
        />

        {/* Summary */}
        <TextInput
          label={"Summary"}
          placeholder={"Profile summary"}
          value={formData.summary}
          onChange={(e) =>
            setFormData({ ...formData, summary: e.target.value })
          }
          size="sm"
        />

        <FileInput
          file={file}
          setFile={setFile}
          containerClassName={"aspect-square lg:aspect-[3/1]"}
        />

        {/* Resume Not Found Section */}
        <div className="mt-3 md:mt-6 lg:mt-10 flex flex-col items-center justify-center rounded-lg bg-white py-5 md:py-8 lg:py-10">
          <div className="mb-2 md:mb-3 lg:mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
            <FiFileText className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-1 text-base md:text-lg lg:text-xl font-semibold text-gray-900">
            Resume not found
          </h3>
          <p className="mb-2 md:mb-4 text-[10px] md:text-xs lg:text-sm text-gray-600">
            Please upload a resume to access this page.
          </p>
          <Button className={"w-fit px-6 text-xs md:text-sm 2xl:text-base"}>
            Upload Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
