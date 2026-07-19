import { useState } from "react";
import { FaSave, FaUserCog } from "react-icons/fa";

function SettingsAdmin() {

    const [settings, setSettings] = useState({
        name: "Vishwa Parmar",
        email: "admin@gmail.com",
        password: "",
    });

    const handleSave = () => {

        alert("Settings Saved Successfully!");

    };

    return (

        <div className="space-y-8">

            {/* Heading */}

            <div>

                <h1 className="text-4xl font-bold">
                    Settings
                </h1>

                <p className="text-slate-400 mt-2">
                    Manage your admin account settings.
                </p>

            </div>

            {/* Card */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

                <div className="flex items-center gap-4 mb-8">

                    <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-3xl">

                        <FaUserCog />

                    </div>

                    <div>

                        <h2 className="text-2xl font-bold">
                            Admin Profile
                        </h2>

                        <p className="text-slate-400">
                            Update your account information.
                        </p>

                    </div>

                </div>

                {/* Form */}

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Name */}

                    <div>

                        <label className="block mb-2 text-slate-300">

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
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
                        />

                    </div>

                    {/* Email */}

                    <div>

                        <label className="block mb-2 text-slate-300">

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
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
                        />

                    </div>

                    {/* Password */}

                    <div className="md:col-span-2">

                        <label className="block mb-2 text-slate-300">

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
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
                        />

                    </div>

                </div>

                {/* Button */}

                <div className="mt-8">

                    <button
                        onClick={handleSave}
                        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl flex items-center gap-3 transition"
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