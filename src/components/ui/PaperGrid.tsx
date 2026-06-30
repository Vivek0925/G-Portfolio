export default function PaperGrid() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-20"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="paper-grid"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          {/* Vertical */}
          <path
            d="
              M2 0
              C0 40,4 80,2 120
            "
            stroke="#222"
            strokeWidth="1"
            fill="none"
          />

          {/* Horizontal */}
          <path
            d="
              M0 2
              C40 0,80 4,120 2
            "
            stroke="#222"
            strokeWidth="1"
            fill="none"
          />
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill="url(#paper-grid)"
      />
    </svg>
  );
}