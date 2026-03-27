

function LineChart({ data, dataKey, labelKey, color = "#2563eb" }) {
  // SVG canvas size
  const W = 500;
  const H = 140;
  const PADDING = 20;

  // Extract values
  const values = data.map((d) => d[dataKey]);
  const maxVal = Math.max(...values);

  // Bar width
  const barWidth = (W - PADDING * 2) / data.length;

  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="w-full"
        style={{ height: "130px", display: "block" }}
      >
        {/* Bars */}
        {data.map((d, i) => {
          const x = PADDING + i * barWidth;
          const barHeight =
            ((d[dataKey] || 0) / (maxVal || 1)) * (H - PADDING * 2);
          const y = H - PADDING - barHeight;

          return (
            <g key={i}>
              {/* Bar */}
              <rect
                x={x + 5}
                y={y}
                width={barWidth - 10}
                height={barHeight}
                fill={color}
                rx="4"
              />

              {/* X Label */}
              <text
                x={x + barWidth / 2}
                y={H - 5}
                textAnchor="middle"
                fontSize="10"
                fill="#555"
              >
                {d[labelKey]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default LineChart;