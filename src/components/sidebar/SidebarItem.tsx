"use client";

import React from "react";
import { cn } from "@/lib/utils";

type Item = {
  label: string;
  icon: React.ElementType;
  href?: string;
  children?: { label: string; href: string }[];
};

export function SidebarItem({
  item,
  index,
  active,
  onHover,
}: {
  item: Item;
  index: number;
  active: boolean;
  onHover: (i: number) => void;
}) {
  const Icon = item.icon;

  return (
    <button
      onMouseEnter={() => onHover(index)}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-xl transition",
        "text-white/80 hover:bg-white/20 hover:w-full",
      )}
      aria-label={item.label}
    >
      <Icon className="w-5.5 h-5.5" />
    </button>
  );
}
