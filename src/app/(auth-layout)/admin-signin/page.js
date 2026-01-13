"use client";

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
  const router = useRouter();
  const axios = useAxios();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post("/auth/login", {
      email,
      password,
    });
    dispatch(login(res?.data));
    document.cookie = `token=${res?.data?.token}; path=/; max-age=86400; SameSite=Lax`;
    toast.success("You have successfully signed up!");
    router.push("/ventures");
    setLoading(false);
  };

  return (
    <div className="rounded-2xl lg:rounded-3xl border border-secondary overflow-hidden max-w-[350px] md:max-w-[500px] lg:max-w-[600px] 2xl:max-w-[550px] w-full bg-white">
      <div className="py-3 lg:py-6 xl:py-7 px-4 md:px-6 lg:px-8 xl:px-10">
        {/* Logo and Need Help */}
        <div className="w-14 h-14 rounded-full bg-sky-200 flex items-center justify-center mx-auto">
          <span className="text-xl text-white">Ai</span>
        </div>

        {/* Welcome Section */}
        <div className="mb-5 lg:mb-8 text-center mt-4">
          <h1 className="text-xl lg:text-2xl 2xl:text-3xl text-text-primary font-bold mb-1 lg:mb-2">
            Admin Login
          </h1>
          <p className="text-text-gray text-[10px] md:text-xs lg:text-sm 2xl:text-base font-medium leading-relaxed">
            Access your AI Voice Interview Bot dashboard
          </p>
        </div>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-3 lg:space-y-4 2xl:space-y-6"
        >
          <TextInput
            id="email"
            placeholder="admin@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label={"Email"}
            required
          />
          <TextInput
            id="email"
            type="password"
            placeholder="XXXXXXXX"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label={"password"}
            required
          />
          <Button loading={loading} disabled={loading}>
            Login
          </Button>
        </form>
        <div className="flex justify-between items-center mt-4 font-medium text-xs md:text-base">
          <p className="text-text-gray">Secured admin access</p>
          <Link href={"#"} className="text-primary">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}
