import {
  FaHome,
  FaProjectDiagram,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({
  desktopCollapsed,
  setDesktopCollapsed,
  mobileOpen,
  setMobileOpen,
}) {
  const navigate = useNavigate();

  const menu = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Projects",
      path: "/admin/dashboard/projects",
      icon: <FaProjectDiagram />,
    },
    {
      name: "Skills",
      path: "/admin/dashboard/skills",
      icon: <FaTools />,
    },
    {
      name: "Experience",
      path: "/admin/dashboard/experience",
      icon: <FaBriefcase />,
    },
    {
      name: "Education",
      path: "/admin/dashboard/education",
      icon: <FaGraduationCap />,
    },
    {
      name: "Messages",
      path: "/admin/dashboard/messages",
      icon: <FaEnvelope />,
    },
    {
      name: "Settings",
      path: "/admin/dashboard/settings",
      icon: <FaCog />,
    },
  ];

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin");
  };

  return (
    <>
      {/* Mobile Hamburger */}

      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-xl shadow-xl"
      >
        <FaBars size={18} />
      </button>

      {/* Overlay */}

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed top-0 left-0 h-screen
          bg-slate-900 border-r border-slate-800
          flex flex-col
          transition-all duration-300
          z-50

          ${mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
          }

          ${desktopCollapsed ? "lg:w-20" : "lg:w-64"}

          w-64
        `}
      >
        {/* Desktop Collapse */}

        <button
          onClick={() =>
            setDesktopCollapsed(!desktopCollapsed)
          }
          className="hidden lg:flex absolute -right-4 top-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-xl"
        >
          {desktopCollapsed ? (
            <FaAngleDoubleRight />
          ) : (
            <FaAngleDoubleLeft />
          )}
        </button>

        {/* Mobile Close */}

        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden absolute top-5 right-5 text-white text-2xl"
        >
          <FaTimes />
        </button>

        {/* Logo */}

        <div className="p-6 border-b border-slate-800">
          {desktopCollapsed ? (
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-xl font-bold">
                A
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-blue-400">
                Admin Panel
              </h1>

              <p className="text-slate-400 mt-2">
                Portfolio CMS
              </p>
            </>
          )}
        </div>

        {/* Menu */}

        <div className="flex-1 py-4 overflow-y-auto">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setMobileOpen(false);
                }
              }}
              className={({ isActive }) =>
                `
                flex items-center
                ${desktopCollapsed
                  ? "justify-center px-3"
                  : "justify-start gap-4 px-6"
                }
                py-3 transition-all duration-300
                ${isActive
                  ? "bg-blue-600 text-white border-r-4 border-cyan-300"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }
              `
              }
            >
              <span className="text-xl">
                {item.icon}
              </span>

              {!desktopCollapsed && (
                <span className="font-medium">
                  {item.name}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Logout */}

        <div className="border-t border-slate-800 p-4">
          <button
            onClick={logout}
            className={`w-full flex items-center ${desktopCollapsed
                ? "justify-center"
                : "justify-center gap-3"
              } bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition-all`}
          >
            <FaSignOutAlt className="text-lg" />

            {!desktopCollapsed && (
              <span className="font-medium">
                Logout
              </span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;