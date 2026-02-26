// src/app/(auth)/_components/AuthShell.tsx
import Image from "next/image";
import backgroundImg from "@/assets/authBg.webp";
import logo from "@/assets/logo.webp";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "./Logo";

export default function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
      className="min-h-dvh w-full bg-cover flex items-center justify-center md:justify-end p-6"
    >
      <div className="w-full flex items-end justify-between gap-12">
        <div className="hidden md:block max-w-md  pb-10">
          <h2 className="text-5xl font-semibold font-heading leading-tight text-white">
            Structure your <br /> teams effortlessly.
          </h2>
        </div>

        <Card className="w-full max-w-lg rounded-3xl border-none shadow-none mt-10 bg-white/95">
          <CardContent className="px-5 py-6 md:px-10 md:py-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 flex items-center justify-center">
                <div className="flex items-center justify-center shadow md:scale-100 scale-80">
                  <Logo />
                </div>
              </div>
            </div>

            {children}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
