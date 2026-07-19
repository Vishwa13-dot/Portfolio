import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import Sidebar from "./Sidebar";

function Dashboard() {
  const isLoggedIn = localStorage.getItem("adminLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }

  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="h-screen flex bg-slate-950 text-white">
      <Sidebar
        desktopCollapsed={desktopCollapsed}
        setDesktopCollapsed={setDesktopCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          desktopCollapsed ? "lg:ml-20" : "lg:ml-64"
        }`}
      >
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 z-30 h-16 bg-slate-900 border-b border-slate-800 flex items-center px-4 flex-shrink-0">
          <button
            onClick={() => setMobileOpen(true)}
            className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center"
          >
            <FaBars />
          </button>

          <h1 className="ml-4 text-lg font-semibold">
            Admin Dashboard
          </h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;