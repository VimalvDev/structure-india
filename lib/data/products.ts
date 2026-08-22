export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductVariant {
  model: string;
  specs: Record<string, string>; // column label -> value, for spec tables
}

export interface Product {
  slug: string;
  name: string;
  categorySlug: string;
  shortDescription: string; // 1-2 lines, for card view
  fullDescription: string;  // paragraph(s), for detail page
  image: string; // placeholder path, e.g. /img/catalogue/placeholder.avif
  keySpecs?: ProductSpec[]; // simple spec list (product with no size variants)
  variantTableColumns?: string[]; // ordered column headers, for products with size tables
  variants?: ProductVariant[]; // rows matching variantTableColumns
}

export interface Category {
  slug: string;
  name: string;
  shortDescription: string; // 1 line, for sidebar/card
  fullDescription: string;  // 2-3 lines, shown at top of category page
  icon: string; // lucide-react icon name
}

export const categories: Category[] = [
  {
    slug: "ash-earthing",
    name: "Earthing & Lightning Protection",
    shortDescription: "Gel earthing electrodes, backfill compound, and lightning protection systems.",
    fullDescription: "CPRI-tested earthing and lightning protection solutions engineered for industrial and commercial installations, including maintenance-free Ash Gel Earthing Electrodes and Faraday cage lightning protection.",
    icon: "Zap",
  },
  {
    slug: "ash-water-treatment",
    name: "Water & Wastewater Treatment",
    shortDescription: "STP, ETP, RO systems, softeners, and DM plants for industrial and municipal use.",
    fullDescription: "Turnkey water and wastewater treatment systems covering reverse osmosis, softening, demineralization, and sewage/effluent treatment — engineered for industries, municipalities, and residential complexes.",
    icon: "Droplets",
  },
  {
    slug: "ash-cooling-towers",
    name: "Cooling Towers",
    shortDescription: "FRP bottle-shape and rectangular/wooden cooling towers for industrial heat rejection.",
    fullDescription: "Corrosion-resistant FRP and rectangular/wooden cooling towers built for minimal maintenance and long service life across a wide capacity range.",
    icon: "Wind",
  },
  {
    slug: "ash-ofc-fiber",
    name: "OFC & Fiber Infrastructure",
    shortDescription: "Optical fiber cable laying and fiber infrastructure deployment.",
    fullDescription: "End-to-end OFC laying and fiber infrastructure services for telecom and enterprise network rollouts.",
    icon: "Cable",
  },
  {
    slug: "ash-smart-metering",
    name: "Smart Metering",
    shortDescription: "Smart electricity and water metering solutions.",
    fullDescription: "Smart metering systems for accurate, remote-readable consumption monitoring across utilities.",
    icon: "Gauge",
  },
  {
    slug: "ash-electrical",
    name: "Electrical Installation",
    shortDescription: "End-to-end electrical installation and infrastructure works.",
    fullDescription: "Complete electrical installation services from design to commissioning for industrial and commercial sites.",
    icon: "Plug",
  },
  {
    slug: "ash-solar",
    name: "Solar Power",
    shortDescription: "Solar PV modules, rooftop/ground-mounted systems, street lights, and geysers.",
    fullDescription: "Turnkey solar EPC covering PV modules, off-grid and grid-connect power plants, solar street lighting, and solar water heating.",
    icon: "Sun",
  },
];

export const products: Product[] = [
  {
    slug: "ash-gel-earthing-electrode",
    name: "Ash Gel Earthing Electrode",
    categorySlug: "ash-earthing",
    shortDescription: "Maintenance-free Gel Earthing Electrode using metal alloys and natural chemical compositions.",
    fullDescription: "Maintenance-free Gel Earthing Electrode using metal alloys and natural chemical compositions for a multifaceted, proactive earthing protection strategy. Manufactured from custom I.S.I. tube for maximum conductivity and prolonged service life. Ash-19 is recommended for LT applications, Ash-39 for HT applications, and Ash-50 where only copper earthing is required.",
    image: "/img/products/placeholder.avif",
    variantTableColumns: ["Code", "Length (L) mm", "Outer Dia (D2) mm approx", "Internal Dia (D1) mm approx", "Internal Copper Strips", "Terminal (T1 & T2) Point (Dia mm)", "Inner Pipe (SWG)", "Outer Pipe (SWG)", "Pipe"],
    variants: [
      { model: "Ash-19 (2000mm)", specs: { "Code": "Ash-19", "Length (L) mm": "2000", "Outer Dia (D2) mm approx": "45-50", "Internal Dia (D1) mm approx": "22-25", "Internal Copper Strips": "—", "Terminal (T1 & T2) Point (Dia mm)": "12", "Inner Pipe (SWG)": "18", "Outer Pipe (SWG)": "14", "Pipe": "G.I." } },
      { model: "Ash-19 (3000mm)", specs: { "Code": "Ash-19", "Length (L) mm": "3000", "Outer Dia (D2) mm approx": "45-50", "Internal Dia (D1) mm approx": "22-25", "Internal Copper Strips": "—", "Terminal (T1 & T2) Point (Dia mm)": "12", "Inner Pipe (SWG)": "18", "Outer Pipe (SWG)": "14", "Pipe": "G.I." } },
      { model: "Ash-39 (2000mm)", specs: { "Code": "Ash-39", "Length (L) mm": "2000", "Outer Dia (D2) mm approx": "76-80", "Internal Dia (D1) mm approx": "37-40", "Internal Copper Strips": "—", "Terminal (T1 & T2) Point (Dia mm)": "14", "Inner Pipe (SWG)": "16", "Outer Pipe (SWG)": "12", "Pipe": "G.I." } },
      { model: "Ash-39 (3000mm)", specs: { "Code": "Ash-39", "Length (L) mm": "3000", "Outer Dia (D2) mm approx": "76-80", "Internal Dia (D1) mm approx": "37-40", "Internal Copper Strips": "—", "Terminal (T1 & T2) Point (Dia mm)": "14", "Inner Pipe (SWG)": "16", "Outer Pipe (SWG)": "12", "Pipe": "G.I." } },
      { model: "Ash-50 (2000mm)", specs: { "Code": "Ash-50", "Length (L) mm": "2000", "Outer Dia (D2) mm approx": "60-63", "Internal Dia (D1) mm approx": "—", "Internal Copper Strips": "50×3", "Terminal (T1 & T2) Point (Dia mm)": "12", "Inner Pipe (SWG)": "—", "Outer Pipe (SWG)": "—", "Pipe": "Copper" } },
      { model: "Ash-50 (3000mm)", specs: { "Code": "Ash-50", "Length (L) mm": "3000", "Outer Dia (D2) mm approx": "60-63", "Internal Dia (D1) mm approx": "—", "Internal Copper Strips": "50×3", "Terminal (T1 & T2) Point (Dia mm)": "12", "Inner Pipe (SWG)": "—", "Outer Pipe (SWG)": "—", "Pipe": "Copper" } },
    ]
  },
  {
    slug: "faraday-cage-octopus-earthing-solution",
    name: "Faraday Cage / Octopus Earthing Solution",
    categorySlug: "ash-earthing",
    shortDescription: "Faraday cages block electric fields and electromagnetic radiation.",
    fullDescription: "Faraday cages block electric fields and electromagnetic radiation (RF shielding). Best understood as an approximation to an ideal hollow conductor — the applied electric field generates a current that cancels the field inside.",
    image: "/img/products/placeholder.avif",
    keySpecs: [
      { label: "Plate", value: "450mm dia, 3mm thick copper" },
      { label: "Rods", value: "8 rods, 16mm dia, 1 metre length, copper" },
      { label: "Washer", value: "Copper washer with copper bond" }
    ]
  },
  {
    slug: "earthing-backfill-compound",
    name: "Earthing Backfill Compound",
    categorySlug: "ash-earthing",
    shortDescription: "Conductive backfill compound for enhanced earthing performance.",
    fullDescription: "",
    image: "/img/products/placeholder.avif",
    keySpecs: []
  },
  {
    slug: "lightning-conductor",
    name: "Lightning Conductor",
    categorySlug: "ash-earthing",
    shortDescription: "Lightning protection conductor system.",
    fullDescription: "",
    image: "/img/products/placeholder.avif",
    keySpecs: []
  },
  {
    slug: "industrial-package-softener",
    name: "Industrial Package Softener",
    categorySlug: "ash-water-treatment",
    shortDescription: "Industrial softeners providing soft water for all water requirements.",
    fullDescription: "Calcium and magnesium in water cause hardness, which affects skin, hair, and is undesirable for bathing, laundry, and dishwashing. These softeners provide soft water for all water requirements.",
    image: "/img/products/placeholder.avif",
    variantTableColumns: ["Model", "Type", "M.O.C.", "Valve (NB)", "Dia × H.O.S. (mm)", "Resin Qty (Lt)", "Flow Rate (M3/Hr)"],
    variants: [
      { model: "SI-101/U", specs: { "Model": "SI-101/U", "Type": "UF", "M.O.C.": "FRP", "Valve (NB)": "15 Top Mounted", "Dia × H.O.S. (mm)": "160×800", "Resin Qty (Lt)": "15", "Flow Rate (M3/Hr)": "1.0" } },
      { model: "SI-201/U", specs: { "Model": "SI-201/U", "Type": "UF", "M.O.C.": "FRP", "Valve (NB)": "15 Top Mounted", "Dia × H.O.S. (mm)": "229×950", "Resin Qty (Lt)": "30", "Flow Rate (M3/Hr)": "1.5" } },
      { model: "SI-202/U", specs: { "Model": "SI-202/U", "Type": "UF", "M.O.C.": "FRP", "Valve (NB)": "15 Top Mounted", "Dia × H.O.S. (mm)": "260×1200", "Resin Qty (Lt)": "55", "Flow Rate (M3/Hr)": "2.0" } },
      { model: "SI-301/U", specs: { "Model": "SI-301/U", "Type": "UF", "M.O.C.": "FRP", "Valve (NB)": "15 Top Mounted", "Dia × H.O.S. (mm)": "310×1200", "Resin Qty (Lt)": "80", "Flow Rate (M3/Hr)": "2.0" } },
      { model: "SI-401/U", specs: { "Model": "SI-401/U", "Type": "UF", "M.O.C.": "FRP/MS", "Valve (NB)": "40", "Dia × H.O.S. (mm)": "400×1100", "Resin Qty (Lt)": "135", "Flow Rate (M3/Hr)": "6.0" } },
      { model: "SI-512/U", specs: { "Model": "SI-512/U", "Type": "UF", "M.O.C.": "MS", "Valve (NB)": "40", "Dia × H.O.S. (mm)": "500×1200", "Resin Qty (Lt)": "260", "Flow Rate (M3/Hr)": "10" } },
      { model: "SI-515/U", specs: { "Model": "SI-515/U", "Type": "UF", "M.O.C.": "MS", "Valve (NB)": "40", "Dia × H.O.S. (mm)": "500×1500", "Resin Qty (Lt)": "260", "Flow Rate (M3/Hr)": "10" } },
      { model: "SI-615/U", specs: { "Model": "SI-615/U", "Type": "DF", "M.O.C.": "MS", "Valve (NB)": "40", "Dia × H.O.S. (mm)": "600×1500", "Resin Qty (Lt)": "350", "Flow Rate (M3/Hr)": "10" } },
      { model: "SI-622/D", specs: { "Model": "SI-622/D", "Type": "DF", "M.O.C.": "MS", "Valve (NB)": "70", "Dia × H.O.S. (mm)": "600×2200", "Resin Qty (Lt)": "300-425", "Flow Rate (M3/Hr)": "10" } },
      { model: "SI-722/D", specs: { "Model": "SI-722/D", "Type": "DF", "M.O.C.": "MS", "Valve (NB)": "40", "Dia × H.O.S. (mm)": "700×2200", "Resin Qty (Lt)": "400-550", "Flow Rate (M3/Hr)": "10/15" } },
      { model: "SI-822/D", specs: { "Model": "SI-822/D", "Type": "DF", "M.O.C.": "MS", "Valve (NB)": "40/50", "Dia × H.O.S. (mm)": "800×2200", "Resin Qty (Lt)": "500-700", "Flow Rate (M3/Hr)": "10/15" } },
      { model: "SI-922/D", specs: { "Model": "SI-922/D", "Type": "DF", "M.O.C.": "MS", "Valve (NB)": "50/80", "Dia × H.O.S. (mm)": "900×2200", "Resin Qty (Lt)": "600-700", "Flow Rate (M3/Hr)": "15/35" } },
      { model: "SI-1022/D", specs: { "Model": "SI-1022/D", "Type": "DF", "M.O.C.": "MS", "Valve (NB)": "80/100", "Dia × H.O.S. (mm)": "1000×2200", "Resin Qty (Lt)": "750-1060", "Flow Rate (M3/Hr)": "35/50" } },
      { model: "SI-1222/D", specs: { "Model": "SI-1222/D", "Type": "DF", "M.O.C.": "MS", "Valve (NB)": "80/100", "Dia × H.O.S. (mm)": "1200×2200", "Resin Qty (Lt)": "1075-1500", "Flow Rate (M3/Hr)": "30/50" } },
      { model: "SI-1422/D", specs: { "Model": "SI-1422/D", "Type": "DF", "M.O.C.": "MS", "Valve (NB)": "80/100/150", "Dia × H.O.S. (mm)": "1400×2200", "Resin Qty (Lt)": "1450-2100", "Flow Rate (M3/Hr)": "30/50/90" } },
    ]
  },
  {
    slug: "dm-plant",
    name: "DM Plant",
    categorySlug: "ash-water-treatment",
    shortDescription: "Demineralisation plant for removing minerals from water.",
    fullDescription: "The demineralisation process utilises acid-regenerated cation resin and caustic-regenerated anion resin to remove minerals from water. Available in sizes to suit customer requirement; trolley-mounted automatic units available for small industries and laboratories.",
    image: "/img/products/placeholder.avif",
    keySpecs: [
      { label: "Ion Exchange Unit", value: "Cation Column + Anion Column" },
      { label: "Normal Flow", value: "1.5–2.5 M3/Hr per column" },
      { label: "Resin Type", value: "Strong Acid Cation (H+) / Strong Base Anion (OH-)" },
      { label: "Control Valve", value: "Single Multi Port Valve" },
      { label: "M.O.C.", value: "FRP/SS" },
      { label: "Regeneration Chemical", value: "HCl (cation) / NaOH (anion)" },
      { label: "Resin Qty", value: "30 Lt or more per column" },
      { label: "Regeneration Tank Capacity", value: "50 Lt or more" }
    ]
  },
  {
    slug: "industrial-reverse-osmosis-system",
    name: "Industrial Reverse Osmosis System",
    categorySlug: "ash-water-treatment",
    shortDescription: "Industrial-scale RO systems for boiler feed, industrial complexes, and municipal use.",
    fullDescription: "",
    image: "/img/products/placeholder.avif",
    keySpecs: []
  },
  {
    slug: "commercial-reverse-osmosis-system",
    name: "Commercial Reverse Osmosis System",
    categorySlug: "ash-water-treatment",
    shortDescription: "Commercial-grade RO systems.",
    fullDescription: "",
    image: "/img/products/placeholder.avif",
    keySpecs: []
  },
  {
    slug: "domestic-reverse-osmosis-system",
    name: "Domestic Reverse Osmosis System",
    categorySlug: "ash-water-treatment",
    shortDescription: "Residential RO systems.",
    fullDescription: "",
    image: "/img/products/placeholder.avif",
    keySpecs: []
  },
  {
    slug: "mineral-water-plant",
    name: "Mineral Water Plant with Packaging/Bottling Unit",
    categorySlug: "ash-water-treatment",
    shortDescription: "Complete mineral water production and bottling line.",
    fullDescription: "",
    image: "/img/products/placeholder.avif",
    keySpecs: []
  },
  {
    slug: "frp-bottle-shape-cooling-tower",
    name: "FRP Bottle Shape Cooling Tower",
    categorySlug: "ash-cooling-towers",
    shortDescription: "Fiber Glass Reinforced Plastic (FRP) cooling tower for minimal maintenance.",
    fullDescription: "Cooling tower body cast in Fiber Glass Reinforced Plastic (FRP) for minimum maintenance and long lasting operation in aggressive environments. Includes PVC fill for maximum heat transfer, drift eliminator, self-propelled sprinkler, and an aero-dynamically balanced axial-flow fan. Design parameters: max flow rate per model, inlet temperature 42°C, outlet temperature 32°C.",
    image: "/img/products/placeholder.avif",
    variantTableColumns: ["Model", "Capacity (TR)", "Heat Rejection (Kcal/hr ×1000)", "Dia (mm)", "Height (mm)", "Fan Dia (mm)", "Motor HP/RPM", "Inlet Outlet Size (mm)", "Operating Weight (Kg)", "Pump Head (MM WC)"],
    variants: [
      { model: "SI-FB-81", specs: { "Model": "SI-FB-81", "Capacity (TR)": "7.5", "Heat Rejection (Kcal/hr ×1000)": "28", "Dia (mm)": "900", "Height (mm)": "2000", "Fan Dia (mm)": "600", "Motor HP/RPM": "0.75/960", "Inlet Outlet Size (mm)": "40", "Operating Weight (Kg)": "210", "Pump Head (MM WC)": "180" } },
      { model: "SI-FB-101", specs: { "Model": "SI-FB-101", "Capacity (TR)": "10", "Heat Rejection (Kcal/hr ×1000)": "38", "Dia (mm)": "900", "Height (mm)": "2000", "Fan Dia (mm)": "600", "Motor HP/RPM": "1/960", "Inlet Outlet Size (mm)": "40", "Operating Weight (Kg)": "250", "Pump Head (MM WC)": "200" } },
      { model: "SI-FB-151", specs: { "Model": "SI-FB-151", "Capacity (TR)": "15", "Heat Rejection (Kcal/hr ×1000)": "56", "Dia (mm)": "1100", "Height (mm)": "2000", "Fan Dia (mm)": "700", "Motor HP/RPM": "1/960", "Inlet Outlet Size (mm)": "40", "Operating Weight (Kg)": "350", "Pump Head (MM WC)": "200" } },
      { model: "SI-FB-251", specs: { "Model": "SI-FB-251", "Capacity (TR)": "25", "Heat Rejection (Kcal/hr ×1000)": "98", "Dia (mm)": "1900", "Height (mm)": "2300", "Fan Dia (mm)": "900", "Motor HP/RPM": "2/960", "Inlet Outlet Size (mm)": "50", "Operating Weight (Kg)": "520", "Pump Head (MM WC)": "2500" } },
      { model: "SI-FB-301", specs: { "Model": "SI-FB-301", "Capacity (TR)": "30", "Heat Rejection (Kcal/hr ×1000)": "115", "Dia (mm)": "1900", "Height (mm)": "2300", "Fan Dia (mm)": "900", "Motor HP/RPM": "2/960", "Inlet Outlet Size (mm)": "50", "Operating Weight (Kg)": "600", "Pump Head (MM WC)": "2500" } },
      { model: "SI-FB-401", specs: { "Model": "SI-FB-401", "Capacity (TR)": "40", "Heat Rejection (Kcal/hr ×1000)": "160", "Dia (mm)": "2200", "Height (mm)": "2900", "Fan Dia (mm)": "1200", "Motor HP/RPM": "2/960", "Inlet Outlet Size (mm)": "50", "Operating Weight (Kg)": "800", "Pump Head (MM WC)": "3000" } },
      { model: "SI-FB-501", specs: { "Model": "SI-FB-501", "Capacity (TR)": "50", "Heat Rejection (Kcal/hr ×1000)": "190", "Dia (mm)": "2200", "Height (mm)": "2900", "Fan Dia (mm)": "1200", "Motor HP/RPM": "2/960", "Inlet Outlet Size (mm)": "80", "Operating Weight (Kg)": "900", "Pump Head (MM WC)": "3000" } },
      { model: "SI-FB-601", specs: { "Model": "SI-FB-601", "Capacity (TR)": "60", "Heat Rejection (Kcal/hr ×1000)": "225", "Dia (mm)": "2200", "Height (mm)": "2900", "Fan Dia (mm)": "1200", "Motor HP/RPM": "3/960", "Inlet Outlet Size (mm)": "80", "Operating Weight (Kg)": "1200", "Pump Head (MM WC)": "3000" } },
      { model: "SI-FB-801", specs: { "Model": "SI-FB-801", "Capacity (TR)": "80", "Heat Rejection (Kcal/hr ×1000)": "320", "Dia (mm)": "2900", "Height (mm)": "3100", "Fan Dia (mm)": "1450", "Motor HP/RPM": "3/960", "Inlet Outlet Size (mm)": "80", "Operating Weight (Kg)": "1500", "Pump Head (MM WC)": "3000" } },
      { model: "SI-FB-1002", specs: { "Model": "SI-FB-1002", "Capacity (TR)": "100", "Heat Rejection (Kcal/hr ×1000)": "380", "Dia (mm)": "2900", "Height (mm)": "3100", "Fan Dia (mm)": "1450", "Motor HP/RPM": "5/960", "Inlet Outlet Size (mm)": "100", "Operating Weight (Kg)": "1650", "Pump Head (MM WC)": "3200" } },
      { model: "SI-FB-1252", specs: { "Model": "SI-FB-1252", "Capacity (TR)": "125", "Heat Rejection (Kcal/hr ×1000)": "477", "Dia (mm)": "3250", "Height (mm)": "3100", "Fan Dia (mm)": "1500", "Motor HP/RPM": "5/960", "Inlet Outlet Size (mm)": "100", "Operating Weight (Kg)": "1850", "Pump Head (MM WC)": "3200" } },
      { model: "SI-FB-1502", specs: { "Model": "SI-FB-1502", "Capacity (TR)": "150", "Heat Rejection (Kcal/hr ×1000)": "568", "Dia (mm)": "3250", "Height (mm)": "3100", "Fan Dia (mm)": "1500", "Motor HP/RPM": "7.5/960", "Inlet Outlet Size (mm)": "100", "Operating Weight (Kg)": "1950", "Pump Head (MM WC)": "3400" } },
      { model: "SI-FB-1752", specs: { "Model": "SI-FB-1752", "Capacity (TR)": "175", "Heat Rejection (Kcal/hr ×1000)": "645", "Dia (mm)": "3700", "Height (mm)": "3300", "Fan Dia (mm)": "1800", "Motor HP/RPM": "7.5/960", "Inlet Outlet Size (mm)": "150", "Operating Weight (Kg)": "2200", "Pump Head (MM WC)": "3400" } },
      { model: "SI-FB-2002", specs: { "Model": "SI-FB-2002", "Capacity (TR)": "200", "Heat Rejection (Kcal/hr ×1000)": "775", "Dia (mm)": "3700", "Height (mm)": "3300", "Fan Dia (mm)": "1800", "Motor HP/RPM": "10/720", "Inlet Outlet Size (mm)": "150", "Operating Weight (Kg)": "2300", "Pump Head (MM WC)": "3500" } },
      { model: "SI-FB-2502", specs: { "Model": "SI-FB-2502", "Capacity (TR)": "250", "Heat Rejection (Kcal/hr ×1000)": "940", "Dia (mm)": "4200", "Height (mm)": "3600", "Fan Dia (mm)": "1800", "Motor HP/RPM": "10/720", "Inlet Outlet Size (mm)": "150", "Operating Weight (Kg)": "3400", "Pump Head (MM WC)": "3800" } },
      { model: "SI-FB-3002", specs: { "Model": "SI-FB-3002", "Capacity (TR)": "300", "Heat Rejection (Kcal/hr ×1000)": "1128", "Dia (mm)": "4200", "Height (mm)": "3600", "Fan Dia (mm)": "1800", "Motor HP/RPM": "10/720", "Inlet Outlet Size (mm)": "150", "Operating Weight (Kg)": "3700", "Pump Head (MM WC)": "3800" } },
      { model: "SI-FB-4002", specs: { "Model": "SI-FB-4002", "Capacity (TR)": "400", "Heat Rejection (Kcal/hr ×1000)": "1550", "Dia (mm)": "6000", "Height (mm)": "3800", "Fan Dia (mm)": "3000", "Motor HP/RPM": "15/560", "Inlet Outlet Size (mm)": "200", "Operating Weight (Kg)": "6000", "Pump Head (MM WC)": "4200" } },
      { model: "SI-FB-5002", specs: { "Model": "SI-FB-5002", "Capacity (TR)": "500", "Heat Rejection (Kcal/hr ×1000)": "1890", "Dia (mm)": "6000", "Height (mm)": "4100", "Fan Dia (mm)": "3000", "Motor HP/RPM": "15/560", "Inlet Outlet Size (mm)": "200", "Operating Weight (Kg)": "6500", "Pump Head (MM WC)": "4500" } }
    ]
  },
  {
    slug: "rectangular-wooden-cooling-tower",
    name: "Rectangular / Wooden Cooling Tower",
    categorySlug: "ash-cooling-towers",
    shortDescription: "Complete range of wooden and FRP cooling towers.",
    fullDescription: "Complete range of wooden and FRP cooling towers, including spare parts and maintenance support for air compressors, injection moulding machines, induction furnaces, air conditioning, refrigeration, and diesel engine generating sets.",
    image: "/img/products/placeholder.avif",
    keySpecs: [
      { label: "Construction", value: "Wooden and FRP options" },
      { label: "Components", value: "PVC Fills, Ring-type PVC Eliminator, Sprinkler, Motor, Fan, PVC Files" }
    ]
  },
  {
    slug: "mono-poly-crystalline-silicon-pv-modules",
    name: "Mono & Poly-crystalline Silicon PV Modules",
    categorySlug: "ash-solar",
    shortDescription: "High power PV modules using mono/poly-crystal silicon solar cells.",
    fullDescription: "High power PV modules using mono/poly-crystal silicon solar cells with anti-reflection coating for improved cell conversion efficiency.",
    image: "/img/products/placeholder.avif",
    keySpecs: [
      { label: "Power Range", value: "3Wp to 300Wp" },
      { label: "Cell Type", value: "Mono/poly-crystalline silicon" },
      { label: "Frame", value: "Aluminium" },
      { label: "Features", value: "Bypass diode to minimize shade power drop, anti-reflection coating, weatherproof connector" }
    ]
  },
  {
    slug: "thin-film-photovoltaic-modules",
    name: "Thin-Film Photovoltaic Modules",
    categorySlug: "ash-solar",
    shortDescription: "Thin-film PV panels for specific shading and cost profiles.",
    fullDescription: "Thin-film PV panels offering an alternative to crystalline silicon for specific shading and cost profiles.",
    image: "/img/products/placeholder.avif",
    keySpecs: [
      { label: "Panel Types", value: "A-Si, Cd·Te, CIS" },
      { label: "Features", value: "Bypass diode, weatherproof connector" }
    ]
  },
  {
    slug: "solar-street-light",
    name: "Solar Street Light (LED/CFL)",
    categorySlug: "ash-solar",
    shortDescription: "Solar street lighting engineered for reliable operation.",
    fullDescription: "Solar street lighting with high lumen efficiency and long-life battery/luminaire casing, engineered for reliable operation during non-sunny days.",
    image: "/img/products/placeholder.avif",
    keySpecs: [
      { label: "Lamp", value: "Single/Double LED or CFL" },
      { label: "Module", value: "High-efficiency poly-crystalline" },
      { label: "Battery", value: "Lead acid, 2-3 days backup" },
      { label: "Operation", value: "Auto dusk-to-dawn" }
    ]
  },
  {
    slug: "off-grid-solar-pv-power-plant",
    name: "Off-Grid Solar PV Power Plant",
    categorySlug: "ash-solar",
    shortDescription: "Off-grid solar power plants providing uninterrupted power.",
    fullDescription: "Off-grid solar power plants providing uninterrupted, stable power as per load requirement, with optional AC-mains/DG hybrid combination.",
    image: "/img/products/placeholder.avif",
    keySpecs: [
      { label: "Capacity Range", value: "500W to 25KW" },
      { label: "Configuration", value: "Standalone / Hybrid systems / Home lights" },
      { label: "Backup", value: "Battery back-up for night and non-sunny days" }
    ]
  },
  {
    slug: "grid-connect-solar-pv-power-plant",
    name: "Grid-Connect Solar PV Power Plant",
    categorySlug: "ash-solar",
    shortDescription: "Grid-connect PV power plants for direct utility grid feed.",
    fullDescription: "Grid-connect PV power plants that feed directly into the utility grid, generating power at the point of use to meet partial and peak load demand for captive consumption.",
    image: "/img/products/placeholder.avif",
    keySpecs: [
      { label: "Capacity Range", value: "1KW to 100MW" },
      { label: "Function", value: "Direct feed to utility grid, reduces T&D losses" }
    ]
  },
  {
    slug: "solar-geysers",
    name: "Solar Geysers",
    categorySlug: "ash-solar",
    shortDescription: "Solar water heaters offering reliable performance.",
    fullDescription: "Solar water heaters offering reliable performance even in winter and cloudy conditions.",
    image: "/img/products/placeholder.avif",
    keySpecs: [
      { label: "Savings", value: "Up to 70% on electricity bills" },
      { label: "Tank", value: "PUF-insulated stainless steel inner tank" },
      { label: "Operation", value: "No noise, no smoke, no electrical shocks, no fire hazards" }
    ]
  }
];
