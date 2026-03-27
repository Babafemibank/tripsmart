// ============================================================
//  BarChart.jsx
//  A simple bar chart built with plain divs — no chart library!
//
//  PROPS:
//    data      (array)   — list of objects e.g. [{ label, value }]
//    dataKey   (string)  — which field in data to use as the bar height
//    labelKey  (string)  — which field to use as the label under each bar
//    color     (string)  — hex color for all bars e.g. "#2563eb"
//    height    (number)  — max height of the tallest bar in pixels
// ============================================================

function BarChart({ data, dataKey, labelKey, color = "#2563eb", height = 100 }) {
  // Find the biggest value so we can scale other bars relative to it
  const maxValue = Math.max(...data.map((item) => item[dataKey]));

  return (
    <div className="w-full overflow-x-auto">
      <div
        className="flex items-end gap-2"
        style={{ minWidth: "200px", height: `${height + 24}px` }}
      >
        {data.map((item, index) => {
          // How tall should this bar be? Scale it relative to the biggest value
          const barHeight = (item[dataKey] / maxValue) * height;

          return (
            <div
              key={index}
              className="flex flex-col items-center flex-1 min-w-[24px]"
            >
              {/* The bar itself */}
              <div
                className="w-full rounded-t-md transition-all duration-500"
                style={{
                  height: `${barHeight}px`,
                  backgroundColor: color,
                  minWidth: "12px",
                }}
              />
              {/* Label under the bar */}
              <p className="text-slate-500 text-[9px] mt-1 text-center leading-tight">
                {item[labelKey]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BarChart;
