import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import AdminLogin from "./pages/Admin-Login-Page/AdminLogin";
import Dashboard from "./pages/Admin-Login-Page/admin/Dashboard";

import DashboardHome from "./pages/Admin-Login-Page/admin/DashboardHome";
import ProjectsAdmin from "./pages/Admin-Login-Page/admin/ProjectsAdmin";
import SkillsAdmin from "./pages/Admin-Login-Page/admin/SkillsAdmin";
import ExperienceAdmin from "./pages/Admin-Login-Page/admin/ExperienceAdmin";
import EducationAdmin from "./pages/Admin-Login-Page/admin/EducationAdmin";
import MessageAdmin from "./pages/Admin-Login-Page/admin/MessageAdmin";
import SettingsAdmin from "./pages/Admin-Login-Page/admin/SettingsAdmin";

function AppContent() {
  const location = useLocation();

  const isAdmin =
    location.pathname === "/admin" ||
    location.pathname.startsWith("/admin/");

  return (
    <>
      {!isAdmin && <Navbar />}

      <Routes>
        {/* Portfolio */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Dashboard */}
        <Route path="/admin/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="projects" element={<ProjectsAdmin />} />
          <Route path="skills" element={<SkillsAdmin />} />
          <Route path="experience" element={<ExperienceAdmin />} />
          <Route path="education" element={<EducationAdmin />} />
          <Route path="messages" element={<MessageAdmin />} />
          <Route path="settings" element={<SettingsAdmin />} />
        </Route>
      </Routes>

      {!isAdmin && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;