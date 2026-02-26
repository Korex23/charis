"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Hamburger, Menu } from "lucide-react";

export default function DashboradLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-[#F2F5FA]">
      <Sidebar mobileOpen={mobileOpen} onMobileOpenChange={setMobileOpen} />

      <main className="pl-0 lg:pl-25">
        <div className="lg:hidden sticky top-0 z-40 bg-[#F2F5FA]/80 backdrop-blur border-b border-slate-200">
          <div className="h-14 px-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="h-10 w-10 rounded-md bg-white ring-1 ring-slate-200 shadow-sm grid place-items-center"
            >
              {/* simple hamburger */}
              <Menu />
            </button>

            <div className="text-slate-700 font-semibold">Dashboard</div>

            <div className="h-10 w-10" />
          </div>
        </div>

        {children}
      </main>
    </div>
  );
}
