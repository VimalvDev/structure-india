import {
  Shield,
  Droplets,
  Wind,
  Cable,
  Gauge,
  Zap,
  Sun,
  type LucideIcon
} from "lucide-react";

export type Category = {
  name: string;
  slug: string;
  icon: LucideIcon;
  description: string;
};

export const categories: Category[] = [
  {
    name: "Earthing & Lightning Protection",
    slug: "earthing-lightning-protection",
    icon: Shield,
    description:
      "Gel, pipe, and strip earthing electrodes with maintenance-free chemical compounds for reliable grounding in any soil condition.",
  },
  {
    name: "Water & Wastewater Treatment",
    slug: "water-wastewater-treatment",
    icon: Droplets,
    description:
      "STP, ETP, WTP, RO systems, softeners, DM plants, and mineral water plants — from 100 LPH domestic units to industrial-scale installations.",
  },
  {
    name: "Cooling Towers",
    slug: "cooling-towers",
    icon: Wind,
    description:
      "FRP and timber cooling towers for HVAC, process cooling, and industrial applications, manufactured in-house at our Ghaziabad facility.",
  },
  {
    name: "OFC / Fiber Infrastructure",
    slug: "ofc-fiber-infrastructure",
    icon: Cable,
    description:
      "End-to-end optical fiber cable installation — trenching, blowing, splicing, and OTDR testing for telecom and enterprise networks.",
  },
  {
    name: "Smart Metering",
    slug: "smart-metering",
    icon: Gauge,
    description:
      "AMI/AMR smart meter deployment, MDMS integration, and field installation for utility modernization and government smart-grid tenders.",
  },
  {
    name: "Electrical Installation",
    slug: "electrical-installation",
    icon: Zap,
    description:
      "HT/LT panel installation, transformer commissioning, cable laying, and complete electrical infrastructure for industrial and commercial projects.",
  },
  // {
  //   name: "Solar Power Solutions",
  //   slug: "solar-power-solutions",
  //   icon: Sun,
  //   description:
  //     "Rooftop and ground-mounted solar PV systems — design, procurement, installation, and net metering for commercial and government buildings.",
  // },
];
