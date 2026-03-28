"use client";

import BorderButton from "@/components/ui/buttons/border-button";
import Button from "@/components/ui/buttons/button";
import TextInput from "@/components/ui/inputs/text-input";
import useAxios from "@/hooks/useAxios";
import { login } from "@/store/features/auth-slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function page() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const axios = useAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("/auth/white-label-signup", {
        email,
        password,
        name,
      });
      dispatch(login(res?.data));
      document.cookie = `token=${res?.data?.token}; path=/; max-age=86400; SameSite=Lax`;
      toast.success("You have successfully signed in!");
    //   router.replace("/ventures/venture-profile");
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  };

  const handleGoogleSignIn = () => {
    console.log("[v0] Google sign-in clicked");
    // Add your Google OAuth logic here
  };

  return (
    <div className="rounded-2xl lg:rounded-3xl border border-secondary overflow-hidden max-w-[350px] md:max-w-[500px] lg:max-w-[600px] 2xl:max-w-[650px] w-full bg-white">
      <div className="py-3 lg:py-6 xl:py-7 px-4 md:px-6 lg:px-8 xl:px-10">
        {/* Welcome Section */}
        <div className="mb-5 lg:mb-8">
          <h1 className="text-xl lg:text-2xl 2xl:text-3xl text-text-primary font-medium mb-1 lg:mb-2">
            Welcome
          </h1>
          <p className="text-text-gray text-[10px] md:text-xs lg:text-sm 2xl:text-base font-medium leading-relaxed">
            Sign up to start managing your platform.
          </p>
        </div>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-3 lg:space-y-4 2xl:space-y-6"
        >
          <div>
            <TextInput
              id="ventureName"
              type="text"
              placeholder="Venture Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              containerClassName="mb-4"
              label={"Venture Name"}
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
              containerClassName="mb-4"
            />
            <TextInput
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              label={"Confirm Password"}
              required
            />
          </div>
          <Button loading={loading} disabled={loading}>
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}
