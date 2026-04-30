"use client";

import Button from "@/components/ui/buttons/button";
import ImageInput from "@/components/ui/inputs/image-input";
import TextAreaInput from "@/components/ui/inputs/text-area-input";
import TextInput from "@/components/ui/inputs/text-input";
import useAuthAxios from "@/hooks/useAuthAxios";
import { login } from "@/store/features/auth-slice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const axios = useAuthAxios();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("status", status);
      if (logo) {
        formData.append("logo", logo);
      }
      formData.append("email", email);
      formData.append("password", password);
      formData.append("description", description);

      const res = await axios.post("/auth/white-label-signup", formData);
      dispatch(login(res?.data));
      document.cookie = `token=${res?.data?.token}; path=/; max-age=86400; SameSite=Lax`;
      toast.success("Venture created successfully!");
      router.push("/ventures/venture-profile");
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl lg:rounded-3xl border border-secondary overflow-hidden max-w-[350px] md:max-w-[500px] lg:max-w-[600px] 2xl:max-w-[650px] w-full bg-white max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="text-center py-3 lg:py-4 bg-bg-gray">
        <p className="text-text-gray text-[10px] md:text-xs lg:text-sm 2xl:text-base font-medium">
          Sign up to continue to your interview workspace.
        </p>
      </div>

      <div className="py-3 lg:py-6 xl:py-7 px-4 md:px-6 lg:px-8 xl:px-10">
        {/* Welcome Section */}
        <div className="mb-5 lg:mb-8">
          <h1 className="text-xl lg:text-2xl 2xl:text-3xl text-text-primary font-medium mb-1 lg:mb-2">
            Welcome
          </h1>
          <p className="text-text-gray text-[10px] md:text-xs lg:text-sm 2xl:text-base font-medium leading-relaxed">
            Sign up to access your interview dashboard and applications.
          </p>
        </div>

        {/* Email Form */}
        {/* <form
          onSubmit={handleSubmit}
          className="space-y-3 lg:space-y-4 2xl:space-y-6"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="email"
                className="text-sm 2xl:text-base text-text-primary font-medium"
              >
                Email address
              </label>
              <span className="text-[10px] md:text-xs 2xl:text-sm font-medium text-text-gray">
                Work email preferred
              </span>
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button>Create account</Button>
        </form> */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <ImageInput
            placeholder="Venue logo"
            image={logo}
            setImage={setLogo}
            containerClassName={" w-40 h-40 ml-0 mt-6"}
          />
          <TextInput
            placeholder="Venue name"
            label="Venue name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextAreaInput
            placeholder="Short description about your venue"
            label="Description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="email"
              className="text-sm md:text-base 2xl:text-lg text-text-primary font-medium flex gap-1"
            >
              <span>Email address</span>
              <span className="text-red-600">*</span>
            </label>
            <span className="text-[10px] md:text-xs 2xl:text-sm font-medium text-text-gray">
              Work email preferred
            </span>
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            containerClassName="mb-4"
          />
          <TextInput
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label={"Password"}
            required
          />
          <Button loading={loading} disabled={loading}>
            Sign Up
          </Button>
        </form>

        {/* Footer */}
        <p className="text-center text-[10px] md:text-xs 2xl:text-sm font-medium text-text-gray mt-4 md:mt-6 lg:mt-8 2xl:mt-10 leading-relaxed">
          By continuing, you agree to our{" "}
          <a href="#" className="text-primary hover:underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
