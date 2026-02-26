// src/app/(auth)/verify/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import AuthShell from "@/components/common/AuthShell";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import AuthButton from "@/components/common/AuthButton";

export default function VerifyPage() {
  const router = useRouter();

  const [email, setEmail] = useState("jason@CharisOne.co");
  const [code, setCode] = useState("");
  const [pending, setPending] = useState(false);
  const isComplete = code.length === 6;

  useEffect(() => {
    const saved = sessionStorage.getItem("auth_email");
    if (saved) setEmail(saved);
  }, []);

  const maskedEmail = useMemo(() => email, [email]);

  async function onSubmit() {
    if (!isComplete) return;
    setPending(true);

    try {
      await new Promise((r) => setTimeout(r, 700));

      // Replace this with your real verify API call
      if (code !== "123456") {
        throw new Error("Invalid verification code.");
      }

      sessionStorage.setItem("auth_verified", "true");
      router.push("/dashboard");
    } catch (err) {
      alert(err instanceof Error ? err.message : "Verification failed.");
    } finally {
      setPending(false);
    }
  }

  return (
    <AuthShell>
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl font-semibold font-heading tracking-tight text-slate-900">
          Verification Code
        </h1>
        <p className="mt-4 text-sm md:text-lg lg:text-xl text-slate-500">
          We’ve sent a 6-digit code to
          <br />
          <span className="font-medium text-blue-600">{maskedEmail}</span>
        </p>
      </div>

      <div className="mt-14 flex justify-center">
        <InputOTP
          value={code}
          onChange={setCode}
          maxLength={6}
          inputMode="numeric"
          className="gap-3 md:gap-5"
        >
          <InputOTPGroup className="gap-3 md:gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <InputOTPSlot
                key={i}
                index={i}
                className="md:h-12 md:w-12 h-10 w-10 rounded-md border text-lg md:text-2xl"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>

      <AuthButton
        onClick={onSubmit}
        disabled={!isComplete || pending}
        pending={pending}
        className="mt-12"
      />
    </AuthShell>
  );
}
