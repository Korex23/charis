// src/app/(auth)/reset/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthShell from "@/components/common/AuthShell";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthButton from "@/components/common/AuthButton";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setPending(true);
    try {
      await new Promise((r) => setTimeout(r, 700));

      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters.");
      }

      // If you want to persist it for the OTP step (optional):
      sessionStorage.setItem("pending_reset_password", password);

      // Navigate to OTP page
      router.push("/otp");
    } catch (err) {
      alert(err instanceof Error ? err.message : "Reset failed.");
    } finally {
      setPending(false);
    }
  }

  return (
    <AuthShell>
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl font-semibold font-heading tracking-tight text-slate-900">
          Reset Password
        </h1>
        <p className="mt-4 text-sm md:text-lg lg:text-xl text-slate-500">
          No worries. Enter your email and <br /> we&apos;ll help you reset it.
        </p>
      </div>

      <form className="mt-12 space-y-8" onSubmit={onSubmit}>
        <div className="space-y-3">
          <Label className="text-lg text-slate-800">New Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="md:py-6 rounded-md text-xl py-6 px-5 placeholder:text-sm"
          />
        </div>

        <AuthButton
          type="submit"
          pending={pending}
          disabled={pending || password.length === 0}
          className="w-full"
          normalText="Save Password"
          pendingText="Saving..."
        />
      </form>
    </AuthShell>
  );
}
