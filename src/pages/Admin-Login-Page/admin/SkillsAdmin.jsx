import { useState, useEffect } from "react";

import {
    FaPlus,
    FaSearch,
    FaEdit,
    FaTrash,
} from "react-icons/fa";
import ls from "../../../utils/secureStorage";

function SkillsAdmin() {
    const categories = [
        "Frontend",
        "Programming",
        "AI & ML",
        "Database",
        "Tools",
    ];

    const [skills, setSkills] = useState(() => {
        try {
            const data = ls.get("skills");

            if (Array.isArray(data)) {
                return data;
            }

            return [];
        } catch (error) {
            console.error("SecureLS:", error);

            try {
                ls.remove("skills");
            } catch { }

            return [];
        }
    });
    console.log("skills", skills);
    useEffect(() => {
        ls.set("skills", skills);
    }, [skills]);

    const [editingId, setEditingId] = useState(null);

    const [search, setSearch] = useState("");

    const [form, setForm] = useState({
        name: "",
        category: "Frontend",
    });

    const clearForm = () => {
        setForm({
            name: "",
            category: "Frontend",
        });

        setEditingId(null);
    };

    const addOrUpdateSkill = () => {
        if (!form.name.trim()) {
            alert("Please enter a skill name.");
            return;
        }

        if (editingId) {
            setSkills((prev) =>
                prev.map((skill) =>
                    skill.id === editingId
                        ? {
                            ...skill,
                            ...form,
                        }
                        : skill
                )
            );
        } else {
            setSkills((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    ...form,
                },
            ]);
        }

        clearForm();
    };

    const editSkill = (skill) => {
        setEditingId(skill.id);

        setForm({
            name: skill.name,
            category: skill.category,
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const deleteSkill = (id) => {
        if (window.confirm("Delete this skill?")) {
            setSkills((prev) =>
                prev.filter((skill) => skill.id !== id)
            );
        }
    };

    const filteredSkills = skills.filter(
        (skill) =>
            skill.name
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            skill.category
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    return (
        <div className="space-y-8 p-4 md:p-6">

            {/* Header */}

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                <div>

                    <h1 className="text-3xl font-bold text-white">
                        Skills
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Add, edit and manage your portfolio skills.
                    </p>

                </div>

                <button
                    onClick={addOrUpdateSkill}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition w-full lg:w-auto"
                >
                    <FaPlus />

                    {editingId ? "Update Skill" : "Add Skill"}
                </button>

            </div>

            {/* Search */}

            <div className="relative">

                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                <input
                    type="text"
                    placeholder="Search skill..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                />

            </div>

            {/* Form */}

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <input
                        type="text"
                        placeholder="Skill Name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                name: e.target.value,
                            })
                        }
                        className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    />

                    <select
                        value={form.category}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                category: e.target.value,
                            })
                        }
                        className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    >
                        {categories.map((category) => (
                            <option
                                key={category}
                                value={category}
                            >
                                {category}
                            </option>
                        ))}
                    </select>

                </div>

            </div>
            {/* Mobile Skills Cards */}

            <div className="grid grid-cols-1 gap-5 lg:hidden">

                {filteredSkills.length > 0 ? (
                    filteredSkills.map((skill) => (
                        <div
                            key={skill.id}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
                        >

                            <div className="flex items-start justify-between gap-4">

                                <div>

                                    <h2 className="text-xl font-semibold break-words">
                                        {skill.name}
                                    </h2>

                                    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-sm">
                                        {skill.category}
                                    </span>

                                </div>

                            </div>

                            <div className="flex justify-end gap-3 mt-6">

                                <button
                                    onClick={() => editSkill(skill)}
                                    className="w-10 h-10 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center transition"
                                >
                                    <FaEdit />
                                </button>

                                <button
                                    onClick={() => deleteSkill(skill.id)}
                                    className="w-10 h-10 rounded-lg bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition"
                                >
                                    <FaTrash />
                                </button>

                            </div>

                        </div>
                    ))
                ) : (
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl py-16 text-center">

                        <div className="text-6xl">
                            🛠️
                        </div>

                        <h2 className="text-2xl font-bold mt-4">
                            No Skills Found
                        </h2>

                        <p className="text-slate-400 mt-2">
                            Add your first skill.
                        </p>

                    </div>
                )}

            </div>

            {/* Desktop Table */}

            <div className="hidden lg:block bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-800">

                        <tr>

                            <th className="px-6 py-4 text-left">
                                Skill
                            </th>

                            <th className="px-6 py-4 text-left">
                                Category
                            </th>

                            <th className="px-6 py-4 text-center">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredSkills.length > 0 ? (
                            filteredSkills.map((skill) => (
                                <tr
                                    key={skill.id}
                                    className="border-t border-slate-800 hover:bg-slate-800 transition"
                                >

                                    <td className="px-6 py-5">

                                        <h3 className="text-lg font-semibold break-words">
                                            {skill.name}
                                        </h3>

                                    </td>

                                    <td className="px-6 py-5">

                                        <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-300">
                                            {skill.category}
                                        </span>

                                    </td>

                                    <td className="px-6 py-5">

                                        <div className="flex justify-center gap-3">

                                            <button
                                                onClick={() => editSkill(skill)}
                                                className="w-10 h-10 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center transition"
                                            >
                                                <FaEdit />
                                            </button>

                                            <button
                                                onClick={() => deleteSkill(skill.id)}
                                                className="w-10 h-10 rounded-lg bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition"
                                            >
                                                <FaTrash />
                                            </button>

                                        </div>

                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr>

                                <td colSpan={3} className="py-20 text-center">

                                    <div className="text-6xl">
                                        🛠️
                                    </div>

                                    <h2 className="text-2xl font-bold mt-4">
                                        No Skills Found
                                    </h2>

                                    <p className="text-slate-400 mt-2">
                                        Add your first skill.
                                    </p>

                                </td>

                            </tr>
                        )}

                    </tbody>

                </table>

            </div>
        </div>
    );
}

export default SkillsAdmin;