// ============================================================
//  DUMMY DATA — Replace each export with a real API call later
//  e.g.  export const summaryStats = await fetch('/api/stats')
// ============================================================

// --- Summary numbers shown on the Overview stat cards ---
export const summaryStats = {
  totalRevenue: 806500,
  totalPassengers: 1471,
  activeRoutes: 14,
  totalRoutes: 16,
  avgWaitTime: 8.4,
  qrScans: 942,
  primaryPayment: "Mobile Wallet",
  paymentPercent: 76,
  efficiency: 14.2,
  activeFleet: 184,
  totalFleet: 200,
};

// --- Revenue trend line chart data (Overview + Trends page) ---
export const revenueTrend = [
  { day: "Jan 5",  revenue: 18000 },
  { day: "Jan 10", revenue: 31000 },
  { day: "Jan 14", revenue: 25000 },
  { day: "Jan 21", revenue: 28000 },
  { day: "Jan 28", revenue: 35000 },
  { day: "Feb 3",  revenue: 38000 },
  { day: "Feb 10", revenue: 41000 },
  { day: "Feb 17", revenue: 44000 },
  { day: "Feb 27", revenue: 48000 },
  { day: "Mar 13", revenue: 52000 },
  { day: "Mar 18", revenue: 47000 },
  { day: "Mar 23", revenue: 55000 },
  { day: "Mar 25", revenue: 58000 },
];

// --- Donut chart: revenue split by payment method ---
export const revenueByPayment = [
  { method: "Mobile Wallet", percent: 47, color: "#2563eb" },
  { method: "Card",          percent: 35, color: "#f59e0b" },
  { method: "Cash",          percent: 18, color: "#10b981" },
];

// --- Bar chart: passengers by time of day ---
export const passengersByTime = [
  { time: "Morning",   count: 280 },
  { time: "Afternoon", count: 420 },
  { time: "Evening",   count: 380 },
  { time: "Night",     count: 391 },
];

// --- Zone hotspot progress bars (Overview) ---
export const zoneHotspots = [
  { zone: "Lekki Phase 1",  percent: 42, color: "#f59e0b" },
  { zone: "Victoria Island", percent: 28, color: "#f97316" },
  { zone: "Ikoyi",           percent: 20, color: "#10b981" },
];

// --- Live fleet table rows (Overview) ---
export const liveFleet = [
  { id: "Bus #LG-042", route: "CMS → Ajah",       seats: "12/60", status: "On Time" },
  { id: "Bus #LG-108", route: "Obalende → Ikeja",  seats: "54/65", status: "Delayed"  },
  { id: "Bus #LG-017", route: "Lekki → CMS",       seats: "38/60", status: "On Time" },
];

// --- Bar chart: revenue by pickup location (Analytics) ---
export const revenueByLocation = [
  { area: "CMS",      revenue: 98000 },
  { area: "Obalende", revenue: 87000 },
  { area: "VI",       revenue: 82000 },
  { area: "Yaba",     revenue: 76000 },
  { area: "Surulere", revenue: 71000 },
  { area: "Ajah",     revenue: 68000 },
  { area: "Lekki",    revenue: 65000 },
  { area: "Oshodi",   revenue: 62000 },
  { area: "Ikeja",    revenue: 58000 },
];

// --- Top routes table (Analytics) ---
export const topRoutes = [
  { route: "Oshodi → Ajah",  revenue: 842000, change: 12.4,  capacity: 92 },
  { route: "Yaba → CMS",     revenue: 512500, change: 4.1,   capacity: 78 },
  { route: "Ikeja → Lekki",  revenue: 389000, change: -2.3,  capacity: 65 },
];

// --- Transport type mode mix (Analytics + Trends) ---
export const transportMix = [
  { type: "Bus",     percent: 42, color: "#2563eb" },
  { type: "Minibus", percent: 28, color: "#f59e0b" },
  { type: "BRT",     percent: 30, color: "#10b981" },
];

// --- Hourly peak periods bar chart (Trends) ---
export const peakPeriods = [
  { hour: "6AM",  passengers: 120 },
  { hour: "7AM",  passengers: 280 },
  { hour: "8AM",  passengers: 420 },
  { hour: "9AM",  passengers: 310 },
  { hour: "12PM", passengers: 250 },
  { hour: "1PM",  passengers: 290 },
  { hour: "5PM",  passengers: 480 },
  { hour: "6PM",  passengers: 460 },
  { hour: "7PM",  passengers: 350 },
];
