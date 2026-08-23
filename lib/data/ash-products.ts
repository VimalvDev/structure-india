export interface SpecTable {
  title?: string;
  columns: string[];
  rows: string[][];
}

export interface AshProduct {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  specTables: SpecTable[];
  installationNotes?: string[];
  certifications?: string[];
}

export const ashProducts: AshProduct[] = [
  {
    slug: "gel-earthing-electrode",
    name: "Ash Gel Earthing Electrode",
    shortDescription:
      "Maintenance-free dual-pipe electrode with conductive gel fill — available in Ash-19, Ash-39, Ash-50, and Ash-60.",
    fullDescription:
      "Ash Gel Earthing Electrode uses a dual-pipe protection design — an ISI-marked G.I. or copper pipe filled with Ash Back-Fill Compound, a hygroscopic conductive gel. This eliminates the two main failure points of traditional earthing: direct soil contact (which causes corrosion) and drifting ohmic resistance over time.",
    keyFeatures: [
      "Highly reliable for safety of human life",
      "High load carrying capacity and maximum fault current dissipation instantly",
      "Maintains low resistance value for a long period with bare minimum fluctuation",
      "Proper galvanization and highly conductive",
      "Corrosion-free, eco-friendly solution",
      "Can be used in grid form (3 or more electrodes in equilateral triangle configuration) for large surface-area or highly sensitive installations",
      "Manufactured as per IS: 3043-1987 requirement",
    ],
    specTables: [
      {
        title: "Technical Specification",
        columns: [
          "Code No.",
          "Length (L) mm",
          "Outer Dia (D2) mm approx",
          "Internal Dia (D1) mm approx",
          "Internal Copper Strips",
          "Terminal (T1 & T2) Point (Dia mm)",
          "M.O.C.",
        ],
        rows: [
          ["Ash-19/2", "2000", "46-50", "22-25", "—", "12", "G.I."],
          ["Ash-19/3", "3000", "46-50", "22-25", "—", "12", "G.I."],
          ["Ash-39/2", "2000", "76-80", "37-40", "—", "14", "G.I."],
          ["Ash-39/3", "3000", "76-80", "37-40", "—", "14", "G.I."],
          ["Ash-50/2", "2000", "47-50", "—", "40×3", "12", "Copper"],
          ["Ash-50/3", "3000", "47-50", "—", "40×3", "12", "Copper"],
          ["Ash-60/2", "2000", "60-63", "—", "50×3", "12", "Copper"],
          ["Ash-60/3", "3000", "60-63", "—", "50×3", "12", "Copper"],
          [
            "Ash Spl-2",
            "2000",
            "17.2",
            "NA",
            "NA",
            "NA",
            "Cu. Bonded (UL Certified)",
          ],
          [
            "Ash Spl-3",
            "3000",
            "17.2",
            "NA",
            "NA",
            "NA",
            "Cu. Bonded (UL Certified)",
          ],
        ],
      },
      {
        title: "Maximum Surface Area (approx.)",
        columns: ["Code", "Length 2000mm", "Length 3000mm"],
        rows: [
          ["Ash-19", "3,14,000 sq.mm", "4,71,000 sq.mm"],
          ["Ash-39", "5,02,400 sq.mm", "7,53,600 sq.mm"],
          ["Ash-60", "3,95,640 sq.mm", "5,93,460 sq.mm"],
          ["Ash-50", "3,14,000 sq.mm", "4,71,000 sq.mm"],
        ],
      },
    ],
    installationNotes: [
      "Recommended for installation in clay or highly humid soil.",
      "Make a pit 6-8 inch diameter, to the appropriate electrode length (2 or 3 metres).",
      "Position the electrode vertically with the terminal on top.",
      "Fill the pit with Ash back-fill compound around the electrode, with proper water pouring simultaneously.",
      "Normally 2 bags of back-fill compound are recommended per electrode (varies in rocky areas).",
      "Connect equipment earthing wire/strip to the terminal using a suitable copper joint.",
      "Fit the chamber cover, and apply petroleum jelly on the exposed terminal.",
      "Continue water pouring for 6-7 days after installation.",
    ],
    certifications: [
      "ISO 9001:2008 Certified",
      "CPRI Tested (Bhopal)",
      "RDSO Tested (Lucknow)",
    ],
  },
  {
    slug: "earthing-backfill-compound",
    name: "Earthing Backfill Compound (B-F-C)",
    shortDescription:
      "Hygroscopic mineral compound that retains moisture and conductivity around the electrode long-term.",
    fullDescription:
      "Ash Back-Fill Compound is a hygroscopic blend of natural earth minerals that surrounds the Gel Earthing Electrode. It retains moisture up to twenty times its dry volume, forming a conductive, non-corrosive gel layer between the electrode and the surrounding soil — maintaining stable resistance without the fluctuation traditional backfills (like salt or charcoal) suffer from.",
    keyFeatures: [
      "Retains moisture up to 20x its dry volume",
      "Totally corrosion-free, non-corrosive mineral composition",
      "Maintains conductivity around the electrode for years without replacement",
      "Not soluble in water, so it doesn't wash away during rainy seasons like salt-based backfills",
    ],
    specTables: [
      {
        title: "Packaging",
        columns: ["Pack Size"],
        rows: [["25 kg per bag"], ["15 kg per bag"], ["10 kg per bag"]],
      },
    ],
    certifications: ["ISO 9001:2008 Certified"],
  },
  {
    slug: "faraday-cage-octopus-earthing",
    name: "Faraday Cage / Octopus Earthing Solution",
    shortDescription:
      "Multi-rod grid earthing for high-rise buildings and large-surface-area protection requirements.",
    fullDescription:
      "Faraday cages block electric fields and electromagnetic radiation, providing RF shielding in addition to lightning and fault protection. Ash's Octopus Earthing configuration multiplies conductive surface area using multiple interconnected rods, suited to high-rise buildings and installations needing a large earthing surface area. Ash also offers GRID, MESH, and TRI-POD earthing configurations for equivalent large-surface-area requirements.",
    keyFeatures: [
      "Blocks electric fields and electromagnetic radiation (RF shielding)",
      "Multiplies conductive surface area versus a single electrode",
      "Suited to high-rise buildings and large or highly sensitive installations",
      "Available in GRID, MESH, and TRI-POD configurations depending on site requirement",
    ],
    specTables: [
      {
        title: "Standard Configuration",
        columns: ["Component", "Specification"],
        rows: [
          ["Plate", "450mm dia, 3mm thick, copper"],
          ["Rods", "8 rods, 16mm dia, 1 metre length, copper"],
          ["Washer", "Copper washer with copper bond"],
        ],
      },
    ],
  },
  {
    slug: "stormflash-15-ese-air-terminal",
    name: "Ash Stormflash 15 — ESE Air Terminal",
    shortDescription:
      "Early Streamer Emission lightning terminal, ΔT = 15µs, certified to NF C 17-102.",
    fullDescription:
      "The Ash Stormflash 15 is an Early Streamer Emission (ESE) air terminal that generates an early upward leader ahead of a natural lightning strike, intercepting it at a controlled point and guiding the current safely to the earth termination system. Fully passive — no battery or external power required.",
    keyFeatures: [
      "Early Streamer Emission (ESE) Air Terminal",
      "Certified to NF C 17-102 (edition 2011) and UNE 21186:2011 standards",
      "ΔT = 15 µSec (Triggering Time Advance)",
      "No battery or external power source required",
      "304L (Inox) stainless steel construction — suitable for any environmental condition",
      "Compatible with tape/strip, round conductor, isolated/insulated cable, and HVSC cable down-conductors",
      "20-year warranty",
    ],
    specTables: [
      {
        title: "Protection Radius (metres) per NF C 17-102 (2011)",
        columns: [
          "Mast Height h(m)",
          "Level I (Very High)",
          "Level II (High)",
          "Level III (Medium)",
          "Level IV (Standard)",
        ],
        rows: [
          ["2", "13", "15", "18", "20"],
          ["3", "19", "22", "27", "31"],
          ["4", "25", "30", "36", "41"],
          ["5", "32", "37", "45", "51"],
          ["6", "32", "38", "46", "52"],
          ["8", "33", "39", "47", "54"],
          ["10", "34", "40", "49", "56"],
          ["20", "35", "44", "55", "63"],
          ["30", "35", "44", "58", "69"],
          ["40", "35", "44", "60", "72"],
        ],
      },
    ],
    certifications: [
      "NF C 17-102 (2011) Certified",
      "UNE 21186:2011 Certified",
    ],
  },
  {
    slug: "stormflash-60-ese-air-terminal",
    name: "Ash Stormflash 60 — ESE Air Terminal",
    shortDescription:
      "Early Streamer Emission lightning terminal, ΔT = 60µs, CPRI-tested to 70kA impulse current.",
    fullDescription:
      "The Ash Stormflash 60 is a higher-triggering-advance Early Streamer Emission (ESE) air terminal, CPRI-tested to a 70kA impulse current rating. Like the Stormflash 15, it requires no battery or external power and is built in 304L stainless steel for long-term outdoor durability.",
    keyFeatures: [
      "Early Streamer Emission (ESE) Air Terminal",
      "Certified to NF C 17-102 (edition 2011) and UNE 21186:2011 standards",
      "ΔT = 60 µSec (Triggering Time Advance)",
      "70 kA (8/20 µSec) impulse current — CPRI (Government of India) tested",
      "No battery or external power source required",
      "304L (Inox) stainless steel construction — suitable for any environmental condition",
      "Compatible with tape/strip, round conductor, isolated/insulated cable, and HVSC cable down-conductors",
      "20-year warranty",
    ],
    specTables: [
      {
        title: "Protection Radius (metres) per NF C 17-102 (2011)",
        columns: [
          "Mast Height h(m)",
          "Level I (Very High)",
          "Level II (High)",
          "Level III (Medium)",
          "Level IV (Standard)",
        ],
        rows: [
          ["2", "31", "35", "39", "43"],
          ["3", "47", "52", "58", "63"],
          ["4", "63", "69", "78", "85"],
          ["5", "79", "86", "97", "107"],
          ["6", "79", "87", "97", "107"],
          ["8", "79", "88", "98", "108"],
          ["10", "79", "88", "99", "109"],
          ["15", "80", "89", "101", "111"],
          ["20", "80", "89", "102", "113"],
          ["45", "80", "89", "105", "119"],
          ["50", "80", "89", "105", "120"],
          ["80", "80", "89", "105", "120"],
          ["100", "80", "89", "105", "120"],
        ],
      },
    ],
    certifications: [
      "NF C 17-102 (2011) Certified",
      "UNE 21186:2011 Certified",
      "CPRI Tested",
    ],
  },
  {
    slug: "lightning-flash-counter",
    name: "Lightning Flash Counter",
    shortDescription:
      "Non-resettable electro-mechanical counter that logs every lightning strike captured by the system.",
    fullDescription:
      "The Lightning Flash Counter detects and logs every lightning strike captured by an ESE air terminal, simple capturing rod, or cage-method lightning protection system. Connected to the down conductor, it detects the electromagnetic field caused by each discharge and displays the running count — no external power required.",
    keyFeatures: [
      "Detects and counts every lightning strike captured by the protection system",
      "Non-resettable electro-mechanical counter — a permanent, tamper-proof record",
      "No external power supply needed",
      "Built-in testing jack — can be tested anytime in the field",
      "Retrofittable to any existing lightning protection system",
    ],
    specTables: [
      {
        title: "Technical Specification",
        columns: ["Attribute", "Value"],
        rows: [
          ["Model", "Leesas Flashcount"],
          ["Display Model", "Electro-mechanical display (non-resettable)"],
          ["Current Sensitive Mode", "Inductive Probe (Built-In)"],
          ["Operating Temperature", "-20°C to +85°C"],
          ["Current Sensitivity (8/20 µs)", ">250A"],
          ["Lightning Current (10/350 µs)", "100 KA"],
          ["Indicator", "6 Digits"],
          ["Degree of Protection", "IP 65 (IEC 529)"],
          ["Enclosure Material", "Plastic"],
          ["Dimensions", "16(L) × 9(W) × 6(H) cm"],
        ],
      },
    ],
  },
];
