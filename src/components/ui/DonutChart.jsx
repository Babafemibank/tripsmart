// ============================================================
//  DonutChart.jsx
//  SVG donut chart with a legend beside it
//
//  PROPS:
//    data  (array) — list of { method, percent, color }
//                    percent values should add up to 100
// ============================================================

function DonutChart({ data }) {
  const SIZE = 110;       // SVG width & height
  const CX   = SIZE / 2;  // center x
  const CY   = SIZE / 2;  // center y
  const R    = 40;        // radius of the donut ring
  const SW   = 16;        // stroke width = thickness of the ring

  // Circumference of the full circle
  const circumference = 2 * Math.PI * R;

  // We'll track how far around the circle we've drawn so far
  let cumulativePercent = 0;

  return (
    <div className="flex items-center gap-4 flex-wrap">

      {/* SVG donut */}
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="flex-shrink-0"
      >
        {data.map((item, i) => {
          // How long is this segment?
          const segmentLength = (item.percent / 100) * circumference;

          // strokeDasharray: "visible_part gap_part"
          const dashArray = `${segmentLength - 2} ${circumference - segmentLength + 2}`;

          // strokeDashoffset: rotate to start after the previous segment
          // The -circumference*0.25 rotates the start to the top of the circle
          const dashOffset =
            circumference * 0.25 - (cumulativePercent / 100) * circumference;

          cumulativePercent += item.percent;

          return (
            <circle
              key={i}
              cx={CX}
              cy={CY}
              r={R}
              fill="none"
              stroke={item.color}
              strokeWidth={SW}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
            />
          );
        })}

        {/* Center label */}
        <text
          x={CX}
          y={CY - 3}
          textAnchor="middle"
          fill="white"
          fontSize="9"
          fontWeight="800"
        >
          ₦806k
        </text>
        <text
          x={CX}
          y={CY + 10}
          textAnchor="middle"
          fill="#64748b"
          fontSize="7"
        >
          Total
        </text>
      </svg>

      {/* Legend */}
      <div className="flex flex-col gap-2">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            {/* Color dot */}
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <div>
              <p className="text-slate-200 text-xs font-medium">{item.method}</p>
              <p className="text-slate-500 text-[11px]">{item.percent}%</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default DonutChart;
