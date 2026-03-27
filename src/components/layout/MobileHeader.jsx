

import { useState } from "react";

function HamburgerIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <line x1="3"  y1="6"  x2="21" y2="6"  />
      <line x1="3"  y1="12" x2="21" y2="12" />
      <line x1="3"  y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <line x1="18" y1="6"  x2="6"  y2="18" />
      <line x1="6"  y1="6"  x2="18" y2="18" />
    </svg>
  );
}


const NAV_ITEMS = [
  { id: "overview", label: "Overview", emoji: "⊞" },
  { id: "analytics", label: "Analytics", emoji: "📊" },
  { id: "trends", label: "Trends", emoji: "📈" },
];

function MobileHeader({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  
    <div className="md:hidden">

      <div className="flex justify-between items-center px-4 py-3 bg-[#0b1120] border-b border-slate-800">

   
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[11px] font-bold">
            LT
          </div>
          <div>
            <p className="text-blue-500 font-black text-base leading-none">TripSmart</p>
            <p className="text-slate-500 text-[10px]">Lagos Transit</p>
          </div>
        </div>

     
   <button onClick={() => setMenuOpen(prev => !prev)}>
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      
      {menuOpen && (
        <div className="bg-[#0b1120] border-b border-slate-800 px-4 pb-3 pt-1">
          {NAV_ITEMS.map(({ id, label, emoji }) => (
            <button
              key={id}
             onClick={() => { setActivePage(id); setMenuOpen(false); }}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm
                         bg-blue-950 text-blue-400"
            >
              <span>{emoji}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}

    </div>
  );
}

export default MobileHeader;
