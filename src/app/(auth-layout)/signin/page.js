"use client";

import BorderButton from "@/components/ui/buttons/border-button";
import Button from "@/components/ui/buttons/button";
import TextInput from "@/components/ui/inputs/text-input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function page() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("[v0] Email submitted:", email);
    document.cookie = "token=token; path=/; max-age=86400; SameSite=Lax";
    toast.success("You have successfully signed up!");
    router.push("/explore");
  };

  const handleGoogleSignIn = () => {
    console.log("[v0] Google sign-in clicked");
    // Add your Google OAuth logic here
  };

  return (
    <div className="rounded-2xl lg:rounded-3xl border border-secondary overflow-hidden max-w-[350px] md:max-w-[500px] lg:max-w-[600px] 2xl:max-w-[650px] w-full bg-white">
      {/* Header */}
      <div className="text-center py-3 lg:py-4 bg-bg-gray">
        <p className="text-text-gray text-[10px] md:text-xs lg:text-sm 2xl:text-base font-medium">
          Sign up to continue to your interview workspace.
        </p>
      </div>

      <div className="py-3 lg:py-6 xl:py-7 px-4 md:px-6 lg:px-8 xl:px-10">
        {/* Logo and Need Help */}
        <div className="flex items-center justify-between mb-5 lg:mb-8 2xl:mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 rounded-full bg-sky-200 flex items-center justify-center">
              <span className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-white">
                Ai
              </span>
            </div>
            <div>
              <h2 className="text-lg text-text-primary font-semibold">Ai</h2>
              <p className="text-[10px] md:text-xs lg:text-sm text-text-gray font-medium">
                AI-powered interviews
              </p>
            </div>
          </div>
          <button className="text-xs md:text-sm 2xl:text-base text-primary font-medium transition-colors">
            Need help?
          </button>
        </div>

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
        <form
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
          <Button>Continue</Button>
          <Link href="/signup" className="block">
            <BorderButton>Create Account</BorderButton>
          </Link>
        </form>

        {/* Divider */}
        <div className="relative my-4 lg:my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-spacing-1.5 border-t border-text-gray"></div>
          </div>
          <div className="relative flex justify-center text-xs lg:text-sm 2xl:text-base">
            <span className="px-2 md:px-3 lg:px-4 bg-white text-text-gray font-medium">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Sign In */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          variant="outline"
          className="w-full h-10 lg:h-12 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 bg-transparent"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="text-gray-700 font-medium">Google</span>
        </button>

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
