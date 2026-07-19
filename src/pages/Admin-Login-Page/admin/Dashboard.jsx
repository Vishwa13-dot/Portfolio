import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

function Dashboard() {
  const isLoggedIn = localStorage.getItem("adminLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }

  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Sidebar
        desktopCollapsed={desktopCollapsed}
        setDesktopCollapsed={setDesktopCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div
        className={`transition-all duration-300 min-h-screen ${
          desktopCollapsed ? "lg:ml-20" : "lg:ml-64"
        }`}
      >
        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;