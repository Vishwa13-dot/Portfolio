import { useState } from "react";
import { FaSave, FaUserCog } from "react-icons/fa";

function SettingsAdmin() {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("adminSettings");

    return saved
      ? JSON.parse(saved)
      : {
          name: "Vishwa Parmar",
          email: "admin@gmail.com",
          password: "123456",
        };
  });

  const handleSave = () => {
    const oldSettings = JSON.parse(
      localStorage.getItem("adminSettings")
    );

    const updatedSettings = {
      ...settings,
      password:
        settings.password ||
        oldSettings?.password ||
        "123456",
    };

    localStorage.setItem(
      "adminSettings",
      JSON.stringify(updatedSettings)
    );

    setSettings(updatedSettings);

    alert("Settings Saved Successfully!");
  };

  return (
    <div className="space-y-6 md:space-y-8 px-2 sm:px-4 lg:px-0">
      {/* Heading */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Settings
        </h1>

        <p className="text-sm sm:text-base text-slate-400 mt-2">
          Manage your admin account settings.
        </p>
      </div>

      {/* Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 lg:mb-8">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl sm:text-3xl shrink-0">
            <FaUserCog />
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Admin Profile
            </h2>

            <p className="text-sm sm:text-base text-slate-400">
              Update your account information.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm sm:text-base text-slate-300 font-medium">
              Full Name
            </label>

            <input
              type="text"
              value={settings.name}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  name: e.target.value,
                })
              }
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm sm:text-base text-slate-300 font-medium">
              Email
            </label>

            <input
              type="email"
              value={settings.email}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  email: e.target.value,
                })
              }
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm sm:text-base text-slate-300 font-medium">
              Change Password
            </label>

            <input
              type="password"
              placeholder="Enter new password"
              value={settings.password}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  password: e.target.value,
                })
              }
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 lg:mt-8">
          <button
            onClick={handleSave}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-6 sm:px-8 py-3 rounded-xl flex items-center justify-center gap-3 text-white font-medium transition-all duration-300"
          >
            <FaSave />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsAdmin;