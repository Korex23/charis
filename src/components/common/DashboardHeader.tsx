"use client";

import React from "react";

type HeaderAction = {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
};

type DashboardHeaderProps = {
  title?: string;
  placeholder?: string;
  value?: string;
  onChange?: (v: string) => void;
  actions?: HeaderAction[];
  avatar?: React.ReactNode;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function DefaultBellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.27515 16.3468C5.37317 17.2214 6.10627 17.9036 7.00704 17.9036C7.90766 17.9036 8.64089 17.2214 8.73893 16.3468H5.27515Z"
        fill="#951E95"
      />
      <path
        d="M13.6418 12.6103C13.1275 11.9242 12.8441 11.0742 12.8441 10.2167V7.00575C12.8441 4.4361 11.1644 2.18219 8.72631 1.43232C8.575 0.619579 7.85753 0 7.00587 0C6.15422 0 5.4366 0.619875 5.28544 1.43232C2.84767 2.18233 1.16764 4.43621 1.16764 7.00575V10.2167C1.16764 11.0742 0.884276 11.9242 0.36995 12.6103C0.131474 12.9282 0 13.3222 0 13.7195C0 14.7389 0.829231 15.5683 1.84873 15.5683H12.1627C13.182 15.5683 14.0114 14.739 14.0114 13.7195C14.0114 13.3222 13.8804 12.9282 13.6418 12.6103ZM3.89237 7.78412C3.89237 7.999 3.71804 8.17333 3.50317 8.17333C3.28829 8.17333 3.11396 7.999 3.11396 7.78412V7.39491C3.11396 7.18004 3.28829 7.00571 3.50317 7.00571C3.71804 7.00571 3.89237 7.18004 3.89237 7.39491V7.78412ZM5.4492 4.30936C5.13369 4.49137 4.85497 4.72537 4.62082 5.00437C4.38669 5.28353 4.20481 5.5986 4.08031 5.94091C4.02282 6.09903 3.87354 6.1972 3.71456 6.1972C3.67039 6.1972 3.62551 6.18953 3.58149 6.1736C3.37951 6.10019 3.27525 5.87677 3.34867 5.67479C3.50432 5.24677 3.73179 4.85278 4.02455 4.50398C4.31747 4.15503 4.6657 3.86253 5.06013 3.63494C5.24648 3.52736 5.48422 3.59136 5.59197 3.77756C5.69927 3.96377 5.63555 4.20161 5.4492 4.30936Z"
        fill="#951E95"
      />
    </svg>
  );
}

function DefaultSettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.8086 9.08632C18.0249 9.08632 17.2956 7.82487 18.1825 6.27763C18.695 5.38081 18.3895 4.23763 17.4927 3.72516L15.7878 2.74951C15.0092 2.28632 14.004 2.56226 13.5408 3.34081L13.4324 3.52806C12.5454 5.07531 11.0869 5.07531 10.1901 3.52806L10.0817 3.34081C9.63819 2.56226 8.63298 2.28632 7.85443 2.74951L6.1495 3.72516C5.25269 4.23763 4.94718 5.39067 5.45964 6.28748C6.35645 7.82487 5.62718 9.08632 3.84341 9.08632C2.81848 9.08632 1.97095 9.924 1.97095 10.9588V12.6933C1.97095 13.7182 2.80863 14.5657 3.84341 14.5657C5.62718 14.5657 6.35645 15.8272 5.45964 17.3744C4.94718 18.2712 5.25269 19.4144 6.1495 19.9269L7.85443 20.9026C8.63298 21.3657 9.63819 21.0898 10.1014 20.3112L10.2098 20.124C11.0967 18.5768 12.5553 18.5768 13.4521 20.124L13.5605 20.3112C14.0237 21.0898 15.0289 21.3657 15.8075 20.9026L17.5124 19.9269C18.4092 19.4144 18.7147 18.2614 18.2023 17.3744C17.3054 15.8272 18.0347 14.5657 19.8185 14.5657C20.8434 14.5657 21.6909 13.7281 21.6909 12.6933V10.9588C21.6811 9.93386 20.8434 9.08632 19.8086 9.08632ZM11.826 15.0289C10.062 15.0289 8.62312 13.5901 8.62312 11.826C8.62312 10.062 10.062 8.62313 11.826 8.62313C13.5901 8.62313 15.0289 10.062 15.0289 11.826C15.0289 13.5901 13.5901 15.0289 11.826 15.0289Z"
        fill="#097BBF"
      />
    </svg>
  );
}

export default function DashboardHeader({
  title = "Dashboard",
  placeholder = "",
  value,
  onChange,
  actions,
  avatar,
}: DashboardHeaderProps) {
  const defaultActions: HeaderAction[] = [
    {
      id: "notifications",
      label: "Notifications",
      icon: <DefaultBellIcon className="h-4.5 w-4.5" />,
    },
    {
      id: "settings",
      label: "Settings",
      icon: <DefaultSettingsIcon className="h-4.5 w-4.5" />,
    },
  ];

  const rightActions = actions?.length ? actions : defaultActions;

  return (
    <header className="w-full">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Title */}
        <div className="min-w-0">
          <h1 className="text-lg sm:text-xl font-semibold text-slate-700">
            {title}
          </h1>
        </div>

        {/* Search */}
        <div className="w-full lg:flex lg:justify-center lg:flex-1 lg:px-2">
          <div
            className={cx(
              "h-10 w-full",
              "lg:max-w-[520px] xl:max-w-[600px]",
              "rounded-full bg-white",
              "ring-1 ring-slate-200 shadow-sm",
              "flex items-center gap-2 px-4",
            )}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M2 11C2 6.03 6.03 2 11 2"
                stroke="#097BBF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.9999 11C19.9999 15.97 15.9699 20 10.9999 20C7.45992 20 4.38992 17.95 2.91992 14.97"
                stroke="#097BBF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 5H20"
                stroke="#097BBF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 8H17"
                stroke="#097BBF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.07 20.97C19.6 22.57 20.81 22.73 21.74 21.33C22.6 20.05 22.04 19 20.5 19C19.35 19 18.71 19.89 19.07 20.97Z"
                stroke="#097BBF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
              placeholder={placeholder}
              className={cx(
                "w-full bg-transparent outline-none",
                "text-sm text-slate-700 placeholder:text-slate-400",
              )}
            />
          </div>
        </div>

        {/* Actions + Avatar */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <div className="flex items-center gap-3">
            <div className="hidden sm:block h-8 w-px bg-slate-200" />
            {rightActions.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={a.onClick}
                aria-label={a.label}
                className={cx(
                  "h-9 w-9 rounded-full bg-[#FFF7ED]",
                  "ring-1 ring-slate-200 shadow-sm",
                  "grid place-items-center",
                  "text-slate-600 hover:text-slate-900",
                  "hover:ring-slate-300 transition",
                )}
              >
                {a.icon}
              </button>
            ))}
          </div>

          <div
            className={cx(
              "h-9 w-9 rounded-full bg-white",
              "ring-1 ring-slate-200 shadow-sm",
              "overflow-hidden grid place-items-center",
              "shrink-0",
            )}
          >
            {avatar ?? (
              <div className="h-full w-full bg-slate-200" aria-hidden />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
