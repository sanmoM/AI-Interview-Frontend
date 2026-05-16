"use client";

import useAxios from "@/hooks/useAxios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function PaymentSuccessPage() {
  const axios = useAxios();
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const sessionId = searchParams.get("session_id");
  useEffect(() => {
    axios.get(`/verify-payment/${user.id}/${sessionId}`).then((res) => {
      if (res.data.success) {
        router.push("/venture-profile");
      }
    });
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-green-100 overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-secondary p-8 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-white mt-6">
            Payment Successful
          </h1>

          <p className="text-green-100 mt-3 text-sm leading-relaxed max-w-xs">
            Your payment has been processed successfully. A confirmation email
            and receipt have been sent to your inbox.
          </p>
        </div>

        <div className="p-8 space-y-6">
          <div className="bg-secondary/50 border border-secondary rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Transaction ID</span>
              <span className="font-semibold text-gray-800">#TXN-948372</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Amount Paid</span>
              <span className="font-semibold text-green-600">$249.00</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Payment Method</span>
              <span className="font-semibold text-gray-800">
                Visa •••• 4242
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Date</span>
              <span className="font-semibold text-gray-800">May 16, 2026</span>
            </div>
          </div>

          <div className="text-center text-xs text-gray-400 pt-2">
            Need help? Contact support@example.com
          </div>
        </div>
      </div>
    </div>
  );
}
