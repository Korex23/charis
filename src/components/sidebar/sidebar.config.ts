import { Users, Building2, Briefcase, GitBranch } from "lucide-react";
import {
  Home,
  Chart,
  Chart2,
  Profile,
  User,
  Docs,
  Teacher,
  Timer,
  Files,
  Coins,
  OthersHome,
  OthersProfile,
  OthersSecurity,
  OthersServers,
} from "./icons";

export const sidebarNav = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/dashboard",
  },
  {
    label: "Organization",
    icon: Profile,
    children: [
      { label: "Profile", href: "/organization/profile" },
      { label: "Business Unit", href: "/organization/business-unit" },
      { label: "Department", href: "/organization/department" },
      { label: "Position", href: "/organization/position" },
      { label: "Report Line", href: "/organization/report-line" },
      { label: "Employee", href: "/organization/employee" },
    ],
  },
  {
    label: "Recruitment",
    icon: User,
    children: [
      { label: "Pipeline", href: "/recruitment/pipeline" },
      { label: "Applicants", href: "/recruitment/applicants" },
    ],
  },
  {
    label: "Payroll",
    icon: Timer,
    href: "/payroll",
  },
  {
    label: "Reports",
    icon: Coins,
    href: "/reports",
  },
  {
    label: "Reports",
    icon: Files,
    href: "/reports",
  },
  {
    label: "Reports",
    icon: Chart,
    href: "/reports",
  },
  {
    label: "Reports",
    icon: Teacher,
    href: "/reports",
  },
  {
    label: "Reports",
    icon: Chart2,
    href: "/reports",
  },
  {
    label: "Reports",
    icon: Docs,
    href: "/reports",
  },
];

export const othersNav = [
  {
    label: "Organization",
    icon: OthersHome,
    href: "/reports",
    children: [
      { label: "Profile", href: "/organization/profile" },
      { label: "Business Unit", href: "/organization/business-unit" },
      { label: "Department", href: "/organization/department" },
      { label: "Position", href: "/organization/position" },
      { label: "Report Line", href: "/organization/report-line" },
      { label: "Employee", href: "/organization/employee" },
    ],
  },
  {
    label: "Organization",
    icon: OthersSecurity,
    href: "/reports",
    children: [
      { label: "Profile", href: "/organization/profile" },
      { label: "Business Unit", href: "/organization/business-unit" },
      { label: "Department", href: "/organization/department" },
      { label: "Position", href: "/organization/position" },
      { label: "Report Line", href: "/organization/report-line" },
      { label: "Employee", href: "/organization/employee" },
    ],
  },
  {
    label: "Organization",
    icon: OthersProfile,
    href: "/reports",
    children: [
      { label: "Profile", href: "/organization/profile" },
      { label: "Business Unit", href: "/organization/business-unit" },
      { label: "Department", href: "/organization/department" },
      { label: "Position", href: "/organization/position" },
      { label: "Report Line", href: "/organization/report-line" },
      { label: "Employee", href: "/organization/employee" },
    ],
  },
  {
    label: "Organization",
    icon: OthersServers,
    href: "/reports",
    children: [
      { label: "Profile", href: "/organization/profile" },
      { label: "Business Unit", href: "/organization/business-unit" },
      { label: "Department", href: "/organization/department" },
      { label: "Position", href: "/organization/position" },
      { label: "Report Line", href: "/organization/report-line" },
      { label: "Employee", href: "/organization/employee" },
    ],
  },
];
