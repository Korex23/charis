"use client";

import React, { useEffect, useRef, useState } from "react";
import { sidebarNav, othersNav } from "./sidebar.config";
import { SidebarItem } from "./SidebarItem";
import { SidebarPanel } from "./SidebarPanel";
import Logo from "../common/Logo";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type SidebarProps = {
  mobileOpen: boolean;
  onMobileOpenChange: (open: boolean) => void;
};

export function Sidebar({ mobileOpen, onMobileOpenChange }: SidebarProps) {
  // Desktop hover panel state
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const sidebarRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);

  const activeItem = activeIndex !== null ? sidebarNav[activeIndex] : null;
  const hasSubmenu = Boolean(activeItem?.children?.length);

  const handleSidebarMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const to = e.relatedTarget as Node | null;
    if (to && panelRef.current?.contains(to)) return;
    setActiveIndex(null);
  };

  // Close drawer on Esc
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onMobileOpenChange(false);
    };
    if (mobileOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, onMobileOpenChange]);

  return (
    <>
      <aside
        ref={sidebarRef}
        className="
          hidden lg:flex
          fixed left-0 top-0 z-40 h-dvh overflow-y-scroll no-scrollbar
          w-24 bg-[#5A1E95] flex-col items-center py-6
        "
        onMouseLeave={handleSidebarMouseLeave}
      >
        <Logo width={60} height={60} />

        <div className="my-6 h-px w-[80%] bg-white/30" />

        <h3 className="text-[#DCDCDC] text-[14px] mb-3">MAIN</h3>

        <div className="flex flex-col justify-center items-center">
          {sidebarNav.map((item, index) => (
            <SidebarItem
              key={item.label}
              item={item}
              index={index}
              active={activeIndex === index}
              onHover={(i) => {
                if (sidebarNav[i]?.children?.length) setActiveIndex(i);
                else setActiveIndex(null);
              }}
            />
          ))}
        </div>

        <div className="pt-24 flex flex-col justify-center items-center">
          <h3 className="text-[#DCDCDC] text-[14px] mb-3">OTHERS</h3>
          <div className="gap-3">
            {othersNav.map((item, index) => (
              <SidebarItem
                key={item.label}
                item={item}
                index={index}
                active={false}
                onHover={(i) => {
                  if (othersNav[i]?.children?.length) setActiveIndex(i);
                  else setActiveIndex(null);
                }}
              />
            ))}
          </div>
        </div>
      </aside>

      {/* Desktop blur overlay only when panel open */}
      {hasSubmenu && (
        <div className="hidden lg:block fixed inset-0 z-30 bg-black/30 backdrop-blur-sm" />
      )}

      {/* Desktop hover panel */}
      <div className="hidden lg:block">
        <SidebarPanel
          ref={panelRef}
          sidebarRef={sidebarRef}
          item={hasSubmenu ? activeItem : null}
          onClose={() => setActiveIndex(null)}
        />
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              onClick={() => onMobileOpenChange(false)}
            />

            <motion.aside
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed left-0 top-0 z-50 h-dvh w-[300px] bg-[#5A1E95] overflow-y-auto no-scrollbar"
            >
              <div className="p-5 flex items-center justify-between">
                <Logo width={52} height={52} />
                <button
                  type="button"
                  onClick={() => onMobileOpenChange(false)}
                  aria-label="Close menu"
                  className="h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 transition grid place-items-center text-white"
                >
                  ✕
                </button>
              </div>

              <div className="px-5">
                <div className="my-4 h-px w-full bg-white/20" />
                <p className="text-[#DCDCDC] text-xs tracking-widest mb-3">
                  MAIN
                </p>

                <MobileNavSection
                  items={sidebarNav}
                  onNavigate={() => onMobileOpenChange(false)}
                />

                <div className="my-6 h-px w-full bg-white/20" />
                <p className="text-[#DCDCDC] text-xs tracking-widest mb-3">
                  OTHERS
                </p>

                <MobileNavSection
                  items={othersNav}
                  onNavigate={() => onMobileOpenChange(false)}
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavSection({
  items,
  onNavigate,
}: {
  items: Array<{
    label: string;
    icon: React.ElementType;
    href?: string;
    children?: { label: string; href: string }[];
  }>;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="space-y-1">
      {items.map((item) => {
        const Icon = item.icon;
        const isOpen = open === item.label;

        if (item.children?.length) {
          return (
            <div key={item.label} className="rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : item.label)}
                className="
                  w-full flex items-center justify-between
                  px-3 py-3 rounded-xl
                  text-white hover:bg-white/10 transition
                "
              >
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 grid place-items-center rounded-xl bg-white/10">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="font-heading font-semibold">
                    {item.label}
                  </span>
                </div>
                <span className="text-white/80">{isOpen ? "−" : "+"}</span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-14 pr-3 pb-2"
                  >
                    <div className="space-y-1">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={onNavigate}
                          className="
                            block rounded-lg px-3 py-2
                            text-white/90 hover:bg-white/10 transition
                          "
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href ?? "#"}
            onClick={onNavigate}
            className="
              w-full flex items-center gap-3
              px-3 py-3 rounded-xl
              text-white hover:bg-white/10 transition
            "
          >
            <span className="h-9 w-9 grid place-items-center rounded-xl bg-white/10">
              <Icon className="w-5 h-5" />
            </span>
            <span className="font-heading font-semibold">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
