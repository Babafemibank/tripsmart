import { useState } from "react";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";

function Layout({ children }) {
  const [activePage, setActivePage] = useState("overview");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-white font-sans">

      <MobileHeader activePage={activePage} setActivePage={setActivePage} />
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-1 overflow-y-auto">
        {children(activePage)}
      </main>

    </div>
  );
}

export default Layout;