"use client";

import Button from "@/components/ui/buttons/button";
import TextInput from "@/components/ui/inputs/text-input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("[v0] Email submitted:", email);
    document.cookie = "token=token; path=/; max-age=86400; SameSite=Lax";
    toast.success("You have successfully signed up!");
    router.push("/ventures");
    // Add your sign-up logic here
  };

  return (
    <div className="rounded-2xl lg:rounded-3xl border border-secondary overflow-hidden max-w-[350px] md:max-w-[500px] lg:max-w-[600px] 2xl:max-w-[550px] w-full bg-white">
      <div className="py-3 lg:py-6 xl:py-7 px-4 md:px-6 lg:px-8 xl:px-10">
        {/* Logo and Need Help */}
        <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-14 2xl:h-14 rounded-full bg-sky-200 flex items-center justify-center mx-auto">
          <span className="text-sm md:text-base lg:text-lg 2xl:text-xl text-white">
            Ai
          </span>
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
            id="username"
            placeholder="admin@company.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label={"username"}
          />
          <TextInput
            id="email"
            type="password"
            placeholder="XXXXXXXX"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label={"password"}
          />
          <Button>Login</Button>
        </form>
        <div className="flex justify-between items-center mt-4 font-medium">
          <p className="text-text-gray">Secured admin access</p>
          <Link href={"#"} className="text-primary">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}
