import {
  CalendarDays,
  Users,
  Globe2,
  Award,
  type LucideIcon,
} from "lucide-react";

export interface CompanyStat {
  label: string;
  value: string;
  suffix?: string;
  icon: LucideIcon;
}

export const companyStats: CompanyStat[] = [
  {
    label: "FOUNDED IN",
    value: "2005",
    icon: CalendarDays,
  },
  {
    label: "NETWORK CLIENTS",
    value: "100", // TODO: insert verified figure, do not invent
    suffix: "+",
    icon: Users,
  },
  {
    label: "MARKETS SERVED",
    value: "10", // TODO: count of states/UTs actually supplied to
    suffix: "+",
    icon: Globe2,
  },
  {
    label: "CERTIFICATION MARKS",
    value: "4", // ISO 9001:2015, MSME/UDYAM, NSIC, GST
    suffix: "+",
    icon: Award,
  },
];

export interface StateEntry {
  name: string;
  code: string;
  status: "hq" | "served" | "unserved";
}

// TODO: mark "served" only for states with confirmed completed/ongoing supply.
// Do not mark states just because a tender was bid on. Cross-check against project records before publishing.
export const panIndiaStates: StateEntry[] = [
  { name: "Andaman and Nicobar Islands", code: "AN", status: "unserved" },
  { name: "Andhra Pradesh", code: "AP", status: "unserved" },
  { name: "Arunachal Pradesh", code: "AR", status: "unserved" },
  { name: "Assam", code: "AS", status: "unserved" },
  { name: "Bihar", code: "BR", status: "unserved" },
  { name: "Chandigarh", code: "CH", status: "unserved" },
  { name: "Chhattisgarh", code: "CT", status: "unserved" },
  { name: "Dadra and Nagar Haveli and Daman and Diu", code: "DN", status: "unserved" },
  { name: "Delhi", code: "DL", status: "unserved" },
  { name: "Goa", code: "GA", status: "unserved" },
  { name: "Gujarat", code: "GJ", status: "unserved" },
  { name: "Haryana", code: "HR", status: "unserved" },
  { name: "Himachal Pradesh", code: "HP", status: "unserved" },
  { name: "Jammu and Kashmir", code: "JK", status: "unserved" },
  { name: "Jharkhand", code: "JH", status: "unserved" },
  { name: "Karnataka", code: "KA", status: "unserved" },
  { name: "Kerala", code: "KL", status: "unserved" },
  { name: "Ladakh", code: "LA", status: "unserved" },
  { name: "Lakshadweep", code: "LD", status: "unserved" },
  { name: "Madhya Pradesh", code: "MP", status: "unserved" },
  { name: "Maharashtra", code: "MH", status: "unserved" },
  { name: "Manipur", code: "MN", status: "unserved" },
  { name: "Meghalaya", code: "ML", status: "unserved" },
  { name: "Mizoram", code: "MZ", status: "unserved" },
  { name: "Nagaland", code: "NL", status: "unserved" },
  { name: "Odisha", code: "OR", status: "unserved" },
  { name: "Puducherry", code: "PY", status: "unserved" },
  { name: "Punjab", code: "PB", status: "unserved" },
  { name: "Rajasthan", code: "RJ", status: "unserved" },
  { name: "Sikkim", code: "SK", status: "unserved" },
  { name: "Tamil Nadu", code: "TN", status: "unserved" },
  { name: "Telangana", code: "TG", status: "unserved" },
  { name: "Tripura", code: "TR", status: "unserved" },
  { name: "Uttar Pradesh", code: "UP", status: "hq" },
  { name: "Uttarakhand", code: "UT", status: "unserved" },
  { name: "West Bengal", code: "WB", status: "unserved" },
];
