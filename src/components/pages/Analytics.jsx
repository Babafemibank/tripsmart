import { useState } from "react";
import BarChart from "../ui/BarChart";
import female from "../../asset/female.jpg"
import {
  revenueByLocation,
  topRoutes,
  transportMix,
} from "../../data/dummyData";

function formatNGN(amount) {
  if (amount >= 1_000_000) return "₦" + (amount / 1_000_000).toFixed(1) + "M";
  if (amount >= 1_000)     return "₦" + (amount / 1_000).toFixed(0) + "k";
  return "₦" + amount;
}

function TransportBar({ type, percent, color }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <p className="text-slate-200 text-xs w-14 flex-shrink-0">{type}</p>
      <div className="flex-1 h-2 bg-slate-900 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
      <p className="text-slate-400 text-xs w-8 text-right flex-shrink-0">
        {percent}%
      </p>
    </div>
  );
}

function RouteRow({ route, revenue, change, capacity }) {
  const isPositive = change >= 0;
  return (
    <div className="flex items-center gap-3 bg-slate-900 rounded-lg px-3 py-2.5 mb-2">
      <span>🛤️</span>
      <div className="flex-1">
        <p className="text-white text-xs font-semibold">{route}</p>
        <p className="text-slate-500 text-[10px] mt-0.5">{capacity}% capacity avg</p>
      </div>
      <div className="text-right">
        <p className="text-white text-sm font-bold">{formatNGN(revenue)}</p>
        <p
          className={`text-xs font-semibold mt-0.5 ${
            isPositive ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {isPositive ? "+" : ""}{change}%
        </p>
      </div>
    </div>
  );
}


function Analytics() {

  const [alertApplied, setAlertApplied] = useState(false);

  function handleAlertAction() {
    setAlertApplied(true);
    
    setTimeout(() => setAlertApplied(false), 3000);
  }

  return (
    <div className="p-4 md:p-6 flex flex-col gap-4 max-w-5xl mx-auto">

     <div className="flex flex-wrap justify-between items-center gap-2 pt-1">
     
             <div>
               <p className="text-blue-700 text-[16px] font-bold uppercase tracking-widest ">
                TripSmart
               </p>
             </div>
     
     
             <div className="flex items-center gap-1">
               <p className="text-blue-900 font-bold text-sm ">OPERATOR_Z1_ALPHA </p><img src={female} width={30} height={30} alt="" />
             </div>
             
           </div>
     <div className="flex flex-col min-[990px]:flex-row w-full h-full gap-3">


  <div className="flex flex-col flex-1 gap-3 bg-white  p-5">

    <div className="flex flex-wrap justify-between items-end gap-3">
      <div>
        <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest">
          Live Demand Heatmap
        </p>
        <h1 className="text-black text-2xl font-black tracking-tight mt-1">
          Lagos Island Peak Zone
        </h1>
      </div>

      <span className="bg-emerald-950 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full">
        ● HIGH LIQUIDITY
      </span>
    </div>

  
    <div
      className="relative rounded-xl overflow-hidden flex-1"
      style={{
        background: "radial-gradient(ellipse at 60% 50%, #1a2744, #0f172a)",
        minHeight: "200px"
      }}
    >
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 10 + 4}px`,
            height: `${Math.random() * 10 + 4}px`,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            opacity: Math.random() * 0.7 + 0.2,
            backgroundColor: Math.random() > 0.5 ? "#f59e0b" : "#10b981",
            filter: "blur(2px)",
          }}
        />
      ))}

      <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-2 rounded-lg leading-relaxed">
        🟠 Surge Zone: Lekki Phase 1 <br />
        <span className="text-slate-400 text-[10px]">
          Demand: +42% vs Yesterday
        </span>
      </div>
    </div>
  </div>

 
  <div className="flex flex-col flex-1 gap-3">

    {/* Strategic alert */}
    <div className="bg-amber-50 rounded-xl p-4 flex gap-3">
      <span className="text-xl flex-shrink-0">⚡</span>

      <div className="w-full">
        <p className="text-stone-900 text-sm font-black mb-1">
          Strategic Reallocation
        </p>

        <p className="text-stone-600 text-xs leading-relaxed mb-3">
          Demand in Lekki is exceeding capacity by 18%.
          Recommendation: Shift 4 units from Zone B (CMS)
          to Lekki Hub immediately.
        </p>

        <button
          onClick={handleAlertAction}
          className={`w-full py-2 rounded-lg text-xs font-bold transition-colors ${
            alertApplied
              ? "bg-emerald-500 text-white"
              : "bg-amber-500 text-stone-900 hover:bg-amber-400"
          }`}
        >
          {alertApplied
            ? "✓ Optimization Applied!"
            : "Apply Shift Optimization"}
        </button>
      </div>
    </div>

    {/* Revenue */}
    <div className="bg-slate-800 rounded-xl p-4 flex-1">
      <div className="flex justify-between items-center mb-3">
        <p className="text-white text-sm font-bold">
          Revenue by Location
        </p>

        <span className="text-blue-500 text-[10px] font-bold tracking-wide">
          WEEKLY VIEW
        </span>
      </div>

      <BarChart
        data={revenueByLocation}
        dataKey="revenue"
        labelKey="area"
        color="#2563eb"
        height={100}
      />
    </div>

  </div>

</div>




<div className="flex flex-col md:min-[900px]:flex-row w-full gap-3">

  <div className="flex flex-col flex-1 gap-3">

    
    <div className="bg-yellow-50 rounded-xl p-4 flex flex-col flex-1">
      <div className="flex justify-between items-center mb-3">
        <p className="text-white text-sm font-bold">
          Revenue by Location
        </p>

        <span className="text-blue-500 text-[10px] font-bold tracking-wide">
          WEEKLY VIEW
        </span>
      </div>

      <div className="flex-1">
        <BarChart
          data={revenueByLocation}
          dataKey="revenue"
          labelKey="area"
          color="#2563eb"
          height={100}
        />
      </div>
    </div>


    <div className="bg-slate-800 rounded-xl p-4 flex flex-col flex-1">
      <p className="text-white text-sm font-bold mb-4">
        Revenue by Transport Type
      </p>

      <div className="flex-1 flex flex-col gap-2">
        {transportMix.map((item) => (
          <TransportBar key={item.type} {...item} />
        ))}
      </div>
    </div>

  </div>


  <div className="flex flex-col flex-1 gap-3">

    
    <div className="bg-slate-800 rounded-xl p-4 flex flex-col flex-1">
      <div className="flex justify-between items-center mb-3">
        <p className="text-white text-sm font-bold">
          Top Profitable Routes
        </p>

        <button className="text-blue-500 text-xs font-semibold">
          View All →
        </button>
      </div>

      <div className="flex-1 flex flex-col gap-2">
        {topRoutes.map((route) => (
          <RouteRow key={route.route} {...route} />
        ))}
      </div>
    </div>

  </div>

</div>

    </div>
  );
}

export default Analytics;
