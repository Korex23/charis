"use client";

import Link from "next/link";
import React, { forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
  label: string;
  children?: { label: string; href: string }[];
};

export const SidebarPanel = forwardRef<
  HTMLElement,
  {
    item: Item | null;
    onClose: () => void;
    sidebarRef: React.RefObject<HTMLElement | null>;
  }
>(function SidebarPanel({ item, onClose, sidebarRef }, ref) {
  const handlePanelMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const to = e.relatedTarget as Node | null;
    if (to && sidebarRef.current?.contains(to)) return;
    onClose();
  };

  return (
    <AnimatePresence>
      {item?.children && (
        <motion.aside
          ref={ref}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseLeave={handlePanelMouseLeave}
          className="
            fixed left-24 top-0 z-40 h-dvh w-70
            bg-white shadow-xl border-r
            px-0 py-20 
          "
        >
          <h3 className="px-8 font-semibold text-[#171717] capitalize font-heading text-2xl">
            {item.label}
          </h3>
          <svg
            width="100"
            height="1"
            viewBox="0 0 67 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-6 pl-8 mt-2"
          >
            <line y1="0.5" x2="67" y2="0.5" stroke="#5D727C" />
          </svg>

          <nav className="">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="
                  block px-8 py-4 text-[16px]
                  text-[#171717] hover:bg-[#951E95] hover:text-white hover:font-bold
                "
              >
                {child.label}
              </Link>
            ))}
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
});
