import officer from "../../asset/officer.jpg"
function OverviewIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="3"  y="3"  width="7" height="7" rx="1" />
      <rect x="14" y="3"  width="7" height="7" rx="1" />
      <rect x="3"  y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function AnalyticsIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </svg>
  );
}

function TrendsIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="14 7 21 7 21 14" />
    </svg>
  );
}

const NAV_ITEMS = [
    { id: "overview", label: "Overview", Icon: OverviewIcon },
  { id: "analytics", label: "Analytics", Icon: AnalyticsIcon },
  { id: "trends", label: "Trends", Icon: TrendsIcon },
];

function Sidebar({ activePage, setActivePage }) {


  return (
    <aside className="hidden md:flex flex-col w-65 flex-shrink-0 bg-yellow-50 border-r border-slate-800 min-h-screen">

    
      <div className="flex items-center gap-3 px-5 py-5 border-b border-slate-800">
        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
        <img src={officer}  className='w-full h-full object-cover object-center' alt="" />
        </div>
        <div>
          <p className="text-blue-700 font-black text-lg leading-none">Lagos Transit Ops</p>
          <p className="text-slate-500 text-[10px] mt-0.5 tracking-wide">Zone 1 Terminal</p>
        </div>
      </div>

    
      <nav className="flex flex-col gap-1 p-3 flex-1">
        {NAV_ITEMS.map(({ id, label, Icon }) => {
          const isActive = activePage === id;
          return (
            <button
  key={id}
  onClick={() => setActivePage(id)}
  className={`
    flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left
    border-l-2 transition-colors duration-150
    ${activePage === id
      ? "bg-blue-950 text-blue-400 border-blue-500"
      : "text-slate-400 border-transparent hover:bg-slate-800 hover:text-white"
    }
  `}
>
              <Icon />
              <span className="text-sm font-medium">{label}</span>
            </button>
          );
        })}
      </nav>

      

    </aside>
  );
}

export default Sidebar;
