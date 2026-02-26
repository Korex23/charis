"use client";

import React from "react";

type Tone = "success" | "warning" | "muted" | "info";

type Variant = "green" | "amber" | "blue" | "neutral";

type KpiCardProps = {
  title: string;
  value: React.ReactNode;
  subtitle?: string;
  subtitleTone?: Tone;
  icon: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const stylesByVariant: Record<
  Variant,
  { bg: string; ring: string; iconBg: string; accent: string; border: string }
> = {
  green: {
    bg: "bg-[#EFFEF5]",
    ring: "ring-1 ring-emerald-200/60",
    iconBg: "bg-white",
    accent: "bg-[#EFFEF5]",
    border: "border-r-[#10A957] border-r-3 border-tl-emerald-50/70",
  },
  amber: {
    bg: "bg-[#FFF7ED]",
    ring: "ring-1 ring-amber-200/60",
    iconBg: "bg-white",
    accent: "bg-amber-400",
    border: "border-r-[#FFA412] border-r-3",
  },
  blue: {
    bg: "bg-[#E8F9FF]",
    ring: "ring-1 ring-sky-200/60",
    iconBg: "bg-white",
    accent: "bg-sky-400",
    border: "border-r-[#1886FE] border-r-3 border-tl-emerald-50/70",
  },
  neutral: {
    bg: "bg-[#FFF0F0]",
    ring: "ring-1 ring-slate-200/70",
    iconBg: "bg-white",
    accent: "bg-slate-300",
    border: "border-r-[#5D727C] border-r-3 border-tl-emerald-50/70",
  },
};

const subtitleByTone: Record<Tone, string> = {
  success: "text-emerald-600",
  warning: "text-amber-600",
  muted: "text-slate-500",
  info: "text-sky-600",
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function KpiCard({
  title,
  value,
  subtitle,
  subtitleTone = "muted",
  icon,
  variant = "neutral",
  className,
}: KpiCardProps) {
  const v = stylesByVariant[variant];

  return (
    <div
      className={cx(
        "relative isolate min-w-80 h-33 shadow-xs rounded-lg",
        "px-4 py-3 grid grid-cols-2 place-items-center gap-3",
        v.bg,
        v.border,
        className,
      )}
    >
      <div
        className={cx(
          "grid place-items-center w-20 h-20 rounded-full",
          v.iconBg,
          "ring-1 ring-black/5",
        )}
        aria-hidden
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1 text-center font-heading space-y-3">
        <div className="text-[11px] font-medium text-slate-500 truncate">
          {title}
        </div>

        <div className="mt-0.5 text-[40px] leading-[1.05] font-bold text-[#181612] truncate">
          {value}
        </div>

        {subtitle ? (
          <div
            className={cx(
              "mt-1 text-[14px] font-semibold",
              subtitleByTone[subtitleTone],
            )}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}

type KpiCardRowProps = {
  items: Array<KpiCardProps & { id: string }>;
  className?: string;
};

export function KpiCardRow({ items, className }: KpiCardRowProps) {
  return (
    <div className={cx("w-full", className)}>
      <div
        className={cx(
          "flex gap-4",
          "overflow-x-auto no-scrollbar",
          "scroll-smooth snap-x snap-mandatory",
          "py-2",
        )}
      >
        {items.map((it) => (
          <div key={it.id} className="snap-start">
            <KpiCard {...it} />
          </div>
        ))}
      </div>
    </div>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cx(props.className)}
    >
      <path
        d="M18.3191 23.24C18.2591 23.24 18.2191 23.24 18.1591 23.24C18.0591 23.22 17.9191 23.22 17.7991 23.24C11.9991 23.06 7.61914 18.5 7.61914 12.88C7.61914 7.16 12.2791 2.5 17.9991 2.5C23.7191 2.5 28.3791 7.16 28.3791 12.88C28.3591 18.5 23.9591 23.06 18.3791 23.24C18.3591 23.24 18.3391 23.24 18.3191 23.24ZM17.9991 5.5C13.9391 5.5 10.6191 8.82 10.6191 12.88C10.6191 16.88 13.7391 20.1 17.7191 20.24C17.8391 20.22 18.0991 20.22 18.3591 20.24C22.2791 20.06 25.3591 16.84 25.3791 12.88C25.3791 8.82 22.0591 5.5 17.9991 5.5Z"
        fill="#5D727C"
      />
      <path
        d="M33.0792 23.5C33.0192 23.5 32.9592 23.5 32.8992 23.48C32.0792 23.56 31.2392 22.98 31.1592 22.16C31.0792 21.34 31.5792 20.6 32.3992 20.5C32.6392 20.48 32.8992 20.48 33.1192 20.48C36.0392 20.32 38.3192 17.92 38.3192 14.98C38.3192 11.94 35.8592 9.48 32.8192 9.48C31.9992 9.5 31.3192 8.82 31.3192 8C31.3192 7.18 31.9992 6.5 32.8192 6.5C37.4992 6.5 41.3192 10.32 41.3192 15C41.3192 19.6 37.7192 23.32 33.1392 23.5C33.1192 23.5 33.0992 23.5 33.0792 23.5Z"
        fill="#5D727C"
      />
      <path
        d="M18.3392 45.1C14.4192 45.1 10.4792 44.1 7.49922 42.1C4.71922 40.26 3.19922 37.74 3.19922 35C3.19922 32.26 4.71922 29.72 7.49922 27.86C13.4992 23.88 23.2192 23.88 29.1792 27.86C31.9392 29.7 33.4792 32.22 33.4792 34.96C33.4792 37.7 31.9592 40.24 29.1792 42.1C26.1792 44.1 22.2592 45.1 18.3392 45.1ZM9.15922 30.38C7.23922 31.66 6.19922 33.3 6.19922 35.02C6.19922 36.72 7.25922 38.36 9.15922 39.62C14.1392 42.96 22.5392 42.96 27.5192 39.62C29.4392 38.34 30.4792 36.7 30.4792 34.98C30.4792 33.28 29.4192 31.64 27.5192 30.38C22.5392 27.06 14.1392 27.06 9.15922 30.38Z"
        fill="#5D727C"
      />
      <path
        d="M36.6791 41.5C35.9791 41.5 35.3591 41.02 35.2191 40.3C35.0591 39.48 35.5791 38.7 36.3791 38.52C37.6391 38.26 38.7991 37.76 39.6991 37.06C40.8391 36.2 41.4591 35.12 41.4591 33.98C41.4591 32.84 40.8391 31.76 39.7191 30.92C38.8391 30.24 37.7391 29.76 36.4391 29.46C35.6391 29.28 35.1191 28.48 35.2991 27.66C35.4791 26.86 36.2791 26.34 37.0991 26.52C38.8191 26.9 40.3191 27.58 41.5391 28.52C43.3991 29.92 44.4591 31.9 44.4591 33.98C44.4591 36.06 43.3791 38.04 41.5191 39.46C40.2791 40.42 38.7191 41.12 36.9991 41.46C36.8791 41.5 36.7791 41.5 36.6791 41.5Z"
        fill="#5D727C"
      />
    </svg>
  );
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cx(props.className)}
    >
      <path
        d="M37 39H29"
        stroke="#5D727C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M33 43V35"
        stroke="#5D727C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.3199 21.74C24.1199 21.72 23.8799 21.72 23.6599 21.74C18.8999 21.58 15.1199 17.68 15.1199 12.88C15.0999 7.98 19.0799 4 23.9799 4C28.8799 4 32.8599 7.98 32.8599 12.88C32.8599 17.68 29.0599 21.58 24.3199 21.74Z"
        stroke="#5D727C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.9801 43.62C20.3401 43.62 16.7201 42.7 13.9601 40.86C9.12008 37.62 9.12008 32.34 13.9601 29.12C19.4601 25.44 28.4801 25.44 33.9801 29.12"
        stroke="#5D727C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function ReceiptIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cx(props.className)}
    >
      <path
        d="M6 14.08C6 11.04 6.28 8.88 7 7.34C7 7.32 7.00004 7.3 7.04004 7.28C8.18004 5.82 10.2 6.18 12.46 8.6L12.48 8.62C14.12 10.36 16.62 10.22 18.04 8.32L20.08 5.62C20.88 4.54 21.94 4 23 4C24.06 4 25.12 4.54 25.92 5.62L27.9399 8.3C29.3799 10.22 31.9 10.36 33.54 8.6C34.92 7.12 36.2 6.42 37.26 6.42C37.94 6.42 38.52 6.72 38.96 7.28C39 7.3 39 7.32 39 7.34C39.72 8.88 40 11.04 40 14.08V33.92C40 36.96 39.72 39.12 39 40.66C39 40.68 38.98 40.72 38.96 40.74C38.52 41.3 37.94 41.58 37.26 41.58C36.2 41.58 34.92 40.88 33.54 39.4C31.9 37.64 29.3799 37.78 27.9399 39.7L25.92 42.38C25.12 43.46 24.06 44 23 44C21.94 44 20.88 43.46 20.08 42.38L18.04 39.68C16.62 37.78 14.12 37.64 12.48 39.38L12.46 39.4C10.2 41.82 8.20004 42.18 7.04004 40.74C7.02004 40.72 7 40.68 7 40.66C6.28 39.12 6 36.96 6 33.92V21.94"
        stroke="#5D727C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30 20.5H32"
        stroke="#5D727C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 20.5H24"
        stroke="#5D727C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16 27.5H28"
        stroke="#5D727C"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function CapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={cx(props.className)}
    >
      <path
        d="M24.0206 34.0001C22.3206 34.0001 20.6006 33.5601 19.2606 32.7001L7.22062 24.8401C4.98062 23.3801 3.64062 20.9201 3.64062 18.2401C3.64062 15.5601 4.98062 13.1001 7.22062 11.6401L19.2806 3.80007C21.9606 2.06007 26.1406 2.06007 28.8006 3.82007L40.7806 11.6801C43.0006 13.1401 44.3406 15.6001 44.3406 18.2601C44.3406 20.9201 43.0006 23.3801 40.7806 24.8401L28.8006 32.7001C27.4606 33.5801 25.7406 34.0001 24.0206 34.0001ZM24.0206 5.50007C22.8806 5.50007 21.7406 5.76007 20.9206 6.32007L8.88062 14.1601C7.48062 15.0801 6.66062 16.5601 6.66062 18.2401C6.66062 19.9201 7.46062 21.4001 8.88062 22.3201L20.9206 30.1801C22.5806 31.2601 25.5006 31.2601 27.1606 30.1801L39.1406 22.3201C40.5406 21.4001 41.3406 19.9201 41.3406 18.2401C41.3406 16.5601 40.5406 15.0801 39.1406 14.1601L27.1606 6.30007C26.3206 5.78007 25.1806 5.50007 24.0206 5.50007Z"
        fill="#5D727C"
      />
      <path
        d="M23.9984 45.5002C23.1184 45.5002 22.2184 45.3802 21.4984 45.1402L15.1184 43.0202C12.0984 42.0202 9.71841 38.7202 9.73841 35.5402L9.75841 26.1602C9.75841 25.3402 10.4384 24.6602 11.2584 24.6602C12.0784 24.6602 12.7584 25.3402 12.7584 26.1602L12.7384 35.5402C12.7384 37.4202 14.2984 39.5802 16.0784 40.1802L22.4584 42.3002C23.2584 42.5602 24.7384 42.5602 25.5384 42.3002L31.9184 40.1802C33.6984 39.5802 35.2584 37.4202 35.2584 35.5602V26.2802C35.2584 25.4602 35.9384 24.7802 36.7584 24.7802C37.5784 24.7802 38.2584 25.4602 38.2584 26.2802V35.5602C38.2584 38.7402 35.8984 42.0202 32.8784 43.0402L26.4984 45.1602C25.7784 45.3802 24.8784 45.5002 23.9984 45.5002Z"
        fill="#5D727C"
      />
      <path
        d="M42.8008 31.5C41.9808 31.5 41.3008 30.82 41.3008 30V18C41.3008 17.18 41.9808 16.5 42.8008 16.5C43.6208 16.5 44.3008 17.18 44.3008 18V30C44.3008 30.82 43.6208 31.5 42.8008 31.5Z"
        fill="#5D727C"
      />
    </svg>
  );
}

// Drop this component anywhere to render the row like your screenshot.
export default function AnalyticsDashboardCard() {
  const cards: Array<KpiCardProps & { id: string }> = [
    {
      id: "employees",
      title: "#Total Employees",
      value: "167",
      subtitle: "+2.6% this week",
      subtitleTone: "success",
      variant: "green",
      icon: <UsersIcon className="text-slate-500" />,
    },
    {
      id: "recruitments",
      title: "#Recruitments",
      value: "32",
      subtitle: "Open Positions",
      subtitleTone: "muted",
      variant: "amber",
      icon: <BriefcaseIcon className="text-slate-500" />,
    },
    {
      id: "payroll",
      title: "Payroll (Mo)",
      value: "₦84.5M",
      subtitle: "Processing",
      subtitleTone: "warning",
      variant: "blue",
      icon: <ReceiptIcon className="text-slate-500" />,
    },
    {
      id: "training",
      title: "Training",
      value: "14",
      subtitle: "In progress",
      subtitleTone: "info",
      variant: "neutral",
      icon: <CapIcon className="text-slate-500" />,
    },
  ];

  return (
    <section className="w-full">
      <KpiCardRow items={cards} />
    </section>
  );
}
