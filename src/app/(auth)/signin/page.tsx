"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthShell from "@/components/common/AuthShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import AuthButton from "@/components/common/AuthButton";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);

    try {
      await new Promise((r) => setTimeout(r, 700));

      // Store for the OTP screen preview (self-contained flow)
      sessionStorage.setItem("auth_email", email);

      // Replace this with your real login API call
      if (!email.includes("@") || password.length < 4) {
        throw new Error("Invalid email or password.");
      }

      router.push("/verify");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setPending(false);
    }
  }

  return (
    <AuthShell>
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl font-semibold font-heading tracking-tight text-slate-900">
          Welcome Back
        </h1>
        <p className="mt-3 text-sm md:text-lg lg:text-xl text-slate-500">
          Access your account with the following
        </p>
      </div>

      <form className="mt-12 space-y-5">
        <div className="space-y-2">
          <Label className="text-slate-800">
            Email Address<span className="text-red-500">*</span>
          </Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jason@CharisOne.com"
            type="email"
            required
            className="py-6 rounded-md text-xl px-5 placeholder:text-sm"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-slate-800">
            Password<span className="text-red-500">*</span>
          </Label>

          <div className="relative">
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**** CharisOne"
              type={show ? "text" : "password"}
              required
              className="py-6 rounded-md text-xl px-5 placeholder:text-sm"
            />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>
        </div>

        <div className="text-right">
          <button
            type="button"
            onClick={() => router.push("/forgot-password")}
            className="text-sm md:text-base text-slate-800 hover:underline"
          >
            Forget Password?
          </button>
        </div>

        {error ? (
          <p className="text-center text-sm text-red-600">{error}</p>
        ) : null}

        <AuthButton
          onClick={() => onSubmit({} as React.FormEvent)}
          pending={pending}
          disabled={pending}
          className=""
          normalText="Access Account"
          pendingText="Signing in..."
        />

        <div className="mt-5 flex items-center gap-3 text-sm md:text-lg text-slate-600">
          <span className="h-px flex-1 bg-slate-300" />
          <span>
            Request a <span className="font-semibold text-slate-900">DEMO</span>
          </span>
          <span className="h-px flex-1 bg-slate-300" />
        </div>
      </form>
    </AuthShell>
  );
}
