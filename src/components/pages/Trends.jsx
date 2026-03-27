import LineChart from "../ui/LineChart";
import BarChart  from "../ui/BarChart";
import female from "../../asset/female.jpg"
import {
  summaryStats,
  revenueTrend,
  transportMix,
  peakPeriods,
} from "../../data/dummyData";


function ModeMixBar({ type, percent, color }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <p className="text-white text-xs w-14 flex-shrink-0">{type}</p>
      <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
      <p className="text-white text-xs w-8 text-right flex-shrink-0">
        {percent}%
      </p>
    </div>
  );
}


function Trends() {
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

     
      <div>
        <h1 className="text-black text-5xl w-8 font-black tracking-tight">
          Growth Metals.
        </h1>
        <div className="flex items-end  justify-end flex-col gap-2 mt-1">
          <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-widest">
            System Status
          </p>
          <span className="bg-emerald-950 text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
            OPTIMIZED
          </span>
        </div>
      </div>


  <div className="flex flex-col min-[900px]:flex-row w-full gap-3">

  
  <div className="bg-slate-800 rounded-xl p-4 flex flex-col flex-1">
    
    {/* Header */}
    <div className="flex justify-between items-start mb-1">
      <div>
        <p className="text-white text-sm font-bold">Revenue Trends</p>
        <p className="text-slate-500 text-xs mt-0.5">
          Daily fluctuations across all sectors
        </p>
      </div>

      <div className="flex gap-2">
        <span className="bg-emerald-950 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
          LIVE
        </span>

        <span className="bg-blue-950 text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
          7 DAYS
        </span>
      </div>
    </div>


    <p className="text-slate-400 text-[10px] text-right tracking-wide mb-1">
      PEAK REVENUE: ₦4.2M
    </p>

   
    <div className="flex-1">
      <LineChart
        data={revenueTrend}
        dataKey="revenue"
        color="#2563eb"
      />
    </div>

    
    <div className="flex gap-6 mt-3 pt-3 border-t border-slate-900">
      <div>
        <p className="text-slate-500 text-[10px] uppercase tracking-wide font-semibold">
          Efficiency
        </p>
        <p className="text-white text-lg font-black mt-0.5">
          +{summaryStats.efficiency}%
        </p>
      </div>

      <div>
        <p className="text-slate-500 text-[10px] uppercase tracking-wide font-semibold">
          Active Fleet
        </p>
        <p className="text-white text-lg font-black mt-0.5">
          {summaryStats.activeFleet}/{summaryStats.totalFleet}
        </p>
      </div>
    </div>

  </div>

  
  <div className="bg-blue-600 rounded-xl p-5 flex flex-col flex-1">

    <p className="text-white text-base font-black mb-4">
      Mode Mix
    </p>

    <div className="flex flex-col gap-2 flex-1">
      {transportMix.map((item) => (
        <ModeMixBar key={item.type} {...item} />
      ))}
    </div>

    
    <button className="mt-3 w-full bg-white text-blue-700 text-xs font-black py-2.5 rounded-lg tracking-wide hover:bg-blue-50 transition-colors">
      EXPORT SPLIT
    </button>

  </div>

</div>
     
      <div className="bg-white  rounded-xl p-">
        <p className="text-black text-sm font-bold">Peak Periods</p>
        <p className="text-slate-500 text-xs mt-0.5 mb-4">
          Passenger density across a 24-hour cycle
        </p>

   
        <div className="flex flex-col sm:flex-row gap-4 items-start">

         
          <div className="bg-amber-500 rounded-xl p-3 flex gap-2 sm:max-w-[180px]">
            <span className="text-lg flex-shrink-0">⚠️</span>
            <div>
              <p className="text-stone-900 text-xs font-black mb-1">
                Congestion Alert
              </p>
              <p className="text-stone-700 text-[10px] leading-relaxed">
                Lekki Phase 1 terminal expecting 20% surge at 17:30
              </p>
            </div>
          </div>

        
          <div className="flex-1 w-full">
            <p className="text-amber-500 text-[10px] font-bold tracking-widest text-right mb-1">
              ▲ PEAK AM
            </p>
            <BarChart
              data={peakPeriods}
              dataKey="passengers"
              labelKey="hour"
              color="#2563eb"
              height={90}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Trends;
