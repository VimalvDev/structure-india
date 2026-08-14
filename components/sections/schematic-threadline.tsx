/**
 * SchematicThreadline — decorative SVG motif for the hero background.
 *
 * Mimics the look of real technical schematics this company publishes:
 * thin 1px paths, small circular nodes, and micro-labels referencing
 * earthing diagrams, pipe cross-sections, and RO system schematics.
 *
 * Rendered at low opacity behind the hero text so it doesn't compete
 * with legibility. Uses ash-red (#E31E25) at ~8-12% opacity — this is
 * the one place red is used as a motif accent per DESIGN.md.
 */

export function HeroThreadline() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Main horizontal spine */}
      <path
        d="M 0 300 L 200 300 L 280 220 L 500 220 L 540 260 L 700 260 L 740 300 L 900 300 L 960 240 L 1200 240"
        stroke="#E31E25"
        strokeWidth="1"
        opacity="0.08"
        className="threadline-path"
        pathLength="1"
      />

      {/* Secondary horizontal line */}
      <path
        d="M 100 400 L 300 400 L 360 360 L 550 360 L 600 400 L 800 400 L 840 360 L 1100 360"
        stroke="#E31E25"
        strokeWidth="1"
        opacity="0.06"
        className="threadline-path"
        pathLength="1"
        style={{ animationDelay: "0.6s" }}
      />

      {/* Vertical connector — earthing rod reference */}
      <path
        d="M 280 220 L 280 140"
        stroke="#E31E25"
        strokeWidth="1"
        opacity="0.08"
        className="threadline-path"
        pathLength="1"
        style={{ animationDelay: "0.8s" }}
      />

      {/* Vertical connector — pipe section */}
      <path
        d="M 700 260 L 700 160"
        stroke="#E31E25"
        strokeWidth="1"
        opacity="0.07"
        className="threadline-path"
        pathLength="1"
        style={{ animationDelay: "0.9s" }}
      />

      {/* Vertical connector — down to lower register */}
      <path
        d="M 540 260 L 540 360"
        stroke="#E31E25"
        strokeWidth="1"
        opacity="0.06"
        className="threadline-path"
        pathLength="1"
        style={{ animationDelay: "1s" }}
      />

      {/* Branch line — schematic fork */}
      <path
        d="M 900 300 L 900 420 L 1050 420"
        stroke="#E31E25"
        strokeWidth="1"
        opacity="0.06"
        className="threadline-path"
        pathLength="1"
        style={{ animationDelay: "1.1s" }}
      />

      {/* Junction nodes — small circles at path intersections */}
      <g className="threadline-node">
        <circle cx="280" cy="220" r="3" fill="#E31E25" opacity="0.12" />
        <circle cx="540" cy="260" r="3" fill="#E31E25" opacity="0.12" />
        <circle cx="700" cy="260" r="3" fill="#E31E25" opacity="0.10" />
        <circle cx="900" cy="300" r="3" fill="#E31E25" opacity="0.10" />
        <circle cx="280" cy="140" r="2.5" fill="#E31E25" opacity="0.10" />
        <circle cx="700" cy="160" r="2.5" fill="#E31E25" opacity="0.10" />
        <circle cx="360" cy="360" r="2.5" fill="#E31E25" opacity="0.08" />
        <circle cx="1050" cy="420" r="2.5" fill="#E31E25" opacity="0.08" />
      </g>

      {/* Micro-labels — technical diagram style */}
      <g
        className="threadline-node"
        fill="#E31E25"
        opacity="0.08"
        fontSize="8"
        fontFamily="var(--font-mono), monospace"
      >
        <text x="285" y="138">GND-01</text>
        <text x="705" y="158">∅ 80mm</text>
        <text x="545" y="350">STP-IN</text>
        <text x="1055" y="418">CT-04</text>
        <text x="205" y="295">E-ROD</text>
        <text x="845" y="355">RO-SYS</text>
      </g>

      {/* Small right-angle markers at bends — technical drawing convention */}
      <g className="threadline-node" stroke="#E31E25" strokeWidth="0.5" opacity="0.06" fill="none">
        <rect x="275" y="215" width="8" height="8" />
        <rect x="535" y="255" width="8" height="8" />
        <rect x="735" y="295" width="8" height="8" />
        <rect x="955" y="235" width="8" height="8" />
      </g>
    </svg>
  );
}

/**
 * StatThreadline — connector line from icon to stat number in the
 * "Why us" section. Draws a thin line with a node at each end.
 */
export function StatThreadline() {
  return (
    <svg
      aria-hidden="true"
      className="mx-auto my-2 h-8 w-px"
      viewBox="0 0 2 32"
      fill="none"
    >
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="32"
        stroke="#E31E25"
        strokeWidth="1"
        opacity="0.15"
      />
      <circle cx="1" cy="0" r="1.5" fill="#E31E25" opacity="0.2" />
      <circle cx="1" cy="32" r="1.5" fill="#E31E25" opacity="0.2" />
    </svg>
  );
}
