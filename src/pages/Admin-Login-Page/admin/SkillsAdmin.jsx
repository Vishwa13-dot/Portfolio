import { useState, useEffect } from "react";
import {
    FaPlus,
    FaSearch,
    FaEdit,
    FaTrash,
} from "react-icons/fa";

function SkillsAdmin() {
    const categories = [
        "Frontend",
        "Programming",
        "AI & ML",
        "Database",
        "Tools",
    ];

    const [skills, setSkills] = useState(() => {
        return JSON.parse(localStorage.getItem("skills")) || [];
    });

    useEffect(() => {
        localStorage.setItem("skills", JSON.stringify(skills));
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
        if (form.name.trim() === "") {
            alert("Please enter skill name.");
            return;
        }

        if (editingId) {
            setSkills(
                skills.map((skill) =>
                    skill.id === editingId
                        ? {
                            ...skill,
                            ...form,
                        }
                        : skill
                )
            );
        } else {
            setSkills([
                ...skills,
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
    };

    const deleteSkill = (id) => {
        const confirmDelete = window.confirm("Delete this skill?");

        if (confirmDelete) {
            setSkills(skills.filter((skill) => skill.id !== id));
        }
    };

    const filteredSkills = skills.filter((skill) =>
        skill.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-8">
            {/* Heading */}

            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-bold">Skills</h1>

                    <p className="text-slate-400 mt-2">
                        Manage your portfolio skills.
                    </p>
                </div>

                <button
                    onClick={addOrUpdateSkill}
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl flex items-center gap-3 transition"
                >
                    <FaPlus />

                    {editingId ? "Update Skill" : "Add Skill"}
                </button>
            </div>

            {/* Search */}

            <div className="relative">
                <FaSearch className="absolute left-5 top-5 text-slate-500" />

                <input
                    type="text"
                    placeholder="Search Skill..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 pl-14 pr-5 outline-none"
                />
            </div>

            {/* Form */}

            <div className="grid md:grid-cols-2 gap-6 bg-slate-900 border border-slate-800 rounded-3xl p-8">
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
                    className="bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
                />

                <select
                    value={form.category}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            category: e.target.value,
                        })
                    }
                    className="bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Skills Table */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-800">
                            <tr>
                                <th className="px-6 py-4 text-left">Skill</th>

                                <th className="px-6 py-4 text-left">Category</th>

                                <th className="px-6 py-4 text-center">Actions</th>
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
                                            <h3 className="font-semibold text-lg">
                                                {skill.name}
                                            </h3>
                                        </td>

                                        <td className="px-6 py-5">
                                            <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300">
                                                {skill.category}
                                            </span>
                                        </td>

                                        <td className="px-6 py-5">
                                            <div className="flex justify-center gap-4">
                                                <button
                                                    onClick={() => editSkill(skill)}
                                                    className="w-10 h-10 rounded-xl bg-yellow-500/20 hover:bg-yellow-500 text-yellow-400 flex items-center justify-center transition"
                                                >
                                                    <FaEdit />
                                                </button>

                                                <button
                                                    onClick={() => deleteSkill(skill.id)}
                                                    className="w-10 h-10 rounded-xl bg-red-500/20 hover:bg-red-500 text-red-400 flex items-center justify-center transition"
                                                >
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="3"
                                        className="text-center py-20"
                                    >
                                        <div className="text-6xl mb-4">🛠️</div>

                                        <h2 className="text-2xl font-bold">
                                            No Skills Found
                                        </h2>

                                        <p className="text-slate-400 mt-2">
                                            Add your first skill using the form above.
                                        </p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SkillsAdmin;