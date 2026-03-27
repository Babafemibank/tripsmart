
import StatCard   from "../ui/StatCard";
import LineChart  from "../ui/LineChart";
import BarChart   from "../ui/BarChart";
import DonutChart from "../ui/DonutChart";
import female from "../../asset/female.jpg"
import {
  summaryStats,
  revenueTrend,
  revenueByPayment,
  passengersByTime,
  zoneHotspots,
  liveFleet,
} from "../../data/dummyData";


function formatNGN(amount) {
  return "₦" + amount.toLocaleString();
}


function ZoneBar({ zone, percent, color }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-slate-300 text-[11px] font-semibold uppercase tracking-wider">
          {zone}
        </span>
        <span className="text-slate-500 text-[11px]">{percent}%</span>
      </div>
      <div className="h-1.5 bg-[#0b1628] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}


function FleetRow({ id, route, seats, status }) {
  const isOnTime = status === "On Time";
  return (
    <div className="flex items-center gap-3 bg-[#0b1628] rounded-xl px-4 py-3 mb-2">
      <span className="text-xl">🚌</span>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-semibold">{id}</p>
        <p className="text-slate-500 text-[11px] mt-0.5 truncate">
          {route} · {seats} seats
        </p>
      </div>
      <span
        className={`px-3 py-1 rounded-full text-[10px] font-bold whitespace-nowrap ${
          isOnTime
            ? "bg-emerald-950 text-emerald-400"
            : "bg-orange-950 text-orange-400"
        }`}
      >
        {status}
      </span>
    </div>
  );
}


function Overview() {
  


  return (
    <div className="p-4 bg-white-50 md:p-6  flex flex-col gap-5 max-w-5xl mx-auto">

    
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

      
      <div className="flex flex-col sm:flex-row gap-4">

       
        <div
          className="flex-[2] rounded-2xl p-6"
          style={{
            background: "linear-gradient(135deg, #1a3a6e 0%, #1d4ed8 100%)",
          }}
        >
          <p className="text-blue-200 text-[10px] font-bold uppercase tracking-widest">
            Total Revenue
          </p>
          <p className="text-white text-4xl font-black tracking-tight mt-2">
            {formatNGN(summaryStats.totalRevenue)}
          </p>
          <p className="text-blue-200 text-xs mt-2">
            <span className="bg-blue-600 text-white rounded-xl mr-1 p-1">↑ +12.5%  </span>vs last 24 hours
          </p>
        </div>

       
        <div className="flex-1 items-center bg-amber-500 rounded-2xl p-6 flex flex-col gap-2">
          <p className="text-amber-900 text-[10px] font-bold uppercase tracking-wide">
            Primary Payment Method
          </p>
          <p className="text-stone-900 text-xl font-black">
            {summaryStats.primaryPayment}
          </p>
          <p className="text-amber-800 text-xs">
            {summaryStats.paymentPercent}% of all transactions
          </p>
          <p>  <button className="mt-1 self-start bg-[#0b1120] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-colors ">
            View Logs
          </button></p>
        
        </div>
      </div>

    
      <div className="flex flex-wrap gap-3">
        <StatCard
          title="Total Passengers"
          value={summaryStats.totalPassengers.toLocaleString()}
          subtitle="real-time load factor 84% "
          accent="border-blue-500"
          icon="👥"
        />
        <StatCard
          title="Active Routes"
          value={`${summaryStats.activeRoutes}/${summaryStats.totalRoutes}`}
          subtitle="2 routes on maintenance delay"
          accent="border-amber-500"
          icon="🛤️"
        />
        <StatCard
          title="Avg Wait Time"
          value={`${summaryStats.avgWaitTime} MIN`}
          subtitle="Improved by 2m since Monday"
          accent="border-emerald-500"
          icon="⏱️"
        />
        <StatCard
          title="QR Scans"
          value={summaryStats.qrScans.toLocaleString()}
          subtitle="Successful ticket validations"
          accent="border-violet-500"
          icon="📱"
        />
      </div>

    
   <div className="flex flex-col max-[450px]:flex-col md:flex-row w-full gap-2">
  

  <div className="bg-yellow-50 border rounded-2xl p-5 flex-1">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-black text-m font-bold">Daily Traffic Flow</p>
        <p className="text-slate-500 text-xs mt-0.5">
          Passenger volume throughout Lagos Island
        </p>
      </div>

      <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
        Live
      </span>
    </div>

    <LineChart data={revenueTrend} dataKey="revenue" color="#3b82f6" />
  </div>


  <div className="bg-[#0d1f3c] border border-slate-800 rounded-2xl p-5 flex-1">
    <p className="text-white text-sm font-bold mb-4">Zone Hotspots</p>

    {zoneHotspots.map((zone) => (
      <ZoneBar key={zone.zone} {...zone} />
    ))}

    <p className="text-slate-700 text-[10px] mt-1">
      Live tracking powered by GPS Kinetic Core
    </p>
  </div>

</div>

   
      <div className="flex flex-col sm:flex-row gap-4">

        <div className="flex-1 bg-[#0d1f3c] border border-slate-800 rounded-2xl p-5">
          <p className="text-white text-sm font-bold mb-4">
            Revenue by Payment Method
          </p>
          <DonutChart data={revenueByPayment} />
        </div>

        <div className="flex-1 bg-[#0d1f3c] border border-slate-800 rounded-2xl p-5">
          <p className="text-white text-sm font-bold mb-4">
            Passengers by Trip Time
          </p>
          <BarChart
            data={passengersByTime}
            dataKey="count"
            labelKey="time"
            color="#3b82f6"
            height={90}
          />
        </div>
      </div>

    </div>
  );
}

export default Overview;
