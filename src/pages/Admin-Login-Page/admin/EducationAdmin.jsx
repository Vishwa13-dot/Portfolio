import { useState, useEffect } from "react";
import {
    FaPlus,
    FaSearch,
    FaEdit,
    FaTrash,
} from "react-icons/fa";

function EducationAdmin() {
    const [education, setEducation] = useState(() => {
        const saved = localStorage.getItem("education");
        return saved ? JSON.parse(saved) : [];
    });

    const [editingId, setEditingId] = useState(null);
    const [search, setSearch] = useState("");

    const [form, setForm] = useState({
        college: "",
        degree: "",
        year: "",
        cgpa: "",
        detail: "",
    });

    useEffect(() => {
        localStorage.setItem(
            "education",
            JSON.stringify(education)
        );
    }, [education]);

    const clearForm = () => {
        setForm({
            college: "",
            degree: "",
            year: "",
            cgpa: "",
            detail: "",
        });

        setEditingId(null);
    };

    const addOrUpdateEducation = () => {
        if (
            !form.college.trim() ||
            !form.degree.trim() ||
            !form.year.trim() ||
            !form.cgpa.trim()
        ) {
            alert("Please fill all required fields.");
            return;
        }

        if (editingId) {
            setEducation((prev) =>
                prev.map((item) =>
                    item.id === editingId
                        ? {
                            ...item,
                            ...form,
                        }
                        : item
                )
            );
        } else {
            setEducation((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    ...form,
                },
            ]);
        }

        clearForm();
    };

    const editEducation = (item) => {
        setEditingId(item.id);

        setForm({
            college: item.college,
            degree: item.degree,
            year: item.year,
            cgpa: item.cgpa,
            detail: item.detail,
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const deleteEducation = (id) => {
        if (window.confirm("Delete this education?")) {
            setEducation((prev) =>
                prev.filter((item) => item.id !== id)
            );
        }
    };

    const filteredEducation = education.filter(
        (item) =>
            item.college
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            item.degree
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            item.year
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            item.cgpa
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    return (
        <div className="space-y-8 p-4 md:p-6">

            {/* Header */}

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                <div>

                    <h1 className="text-3xl font-bold text-white">
                        Education
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Add, edit and manage your education details.
                    </p>

                </div>

                <button
                    onClick={addOrUpdateEducation}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition w-full lg:w-auto"
                >
                    <FaPlus />

                    {editingId
                        ? "Update Education"
                        : "Add Education"}
                </button>

            </div>

            {/* Search */}

            <div className="relative">

                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                <input
                    type="text"
                    placeholder="Search college, degree, year or CGPA..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                />

            </div>

            {/* Form */}

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <input
                        type="text"
                        placeholder="College Name"
                        value={form.college}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                college: e.target.value,
                            })
                        }
                        className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    />

                    <input
                        type="text"
                        placeholder="Degree"
                        value={form.degree}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                degree: e.target.value,
                            })
                        }
                        className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    />

                    <input
                        type="text"
                        placeholder="Year"
                        value={form.year}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                year: e.target.value,
                            })
                        }
                        className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    />

                    <input
                        type="text"
                        placeholder="CGPA / Percentage"
                        value={form.cgpa}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                cgpa: e.target.value,
                            })
                        }
                        className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    />

                    <textarea
                        rows="5"
                        placeholder="Description / Relevant Coursework"
                        value={form.detail}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                detail: e.target.value,
                            })
                        }
                        className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 resize-none outline-none focus:border-blue-500"
                    />

                </div>

            </div>
            {/* Mobile Education Cards */}

            <div className="grid grid-cols-1 gap-5 lg:hidden">

                {filteredEducation.length > 0 ? (
                    filteredEducation.map((item) => (
                        <div
                            key={item.id}
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
                        >

                            <div>

                                <h2 className="text-xl font-semibold break-words">
                                    {item.college}
                                </h2>

                                <p className="text-blue-400 mt-2 font-medium break-words">
                                    {item.degree}
                                </p>

                            </div>

                            <div className="mt-5 space-y-3">

                                <div className="flex justify-between gap-3">

                                    <span className="text-slate-400">
                                        Year
                                    </span>

                                    <span className="text-right">
                                        {item.year}
                                    </span>

                                </div>

                                <div className="flex justify-between gap-3">

                                    <span className="text-slate-400">
                                        CGPA
                                    </span>

                                    <span className="text-right font-semibold">
                                        {item.cgpa}
                                    </span>

                                </div>

                            </div>

                            {item.detail && (

                                <div className="mt-5 border-t border-slate-800 pt-4">

                                    <p className="text-sm text-slate-300 break-words">
                                        {item.detail}
                                    </p>

                                </div>

                            )}

                            <div className="flex justify-end gap-3 mt-6">

                                <button
                                    onClick={() => editEducation(item)}
                                    className="w-10 h-10 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center transition"
                                >
                                    <FaEdit />
                                </button>

                                <button
                                    onClick={() => deleteEducation(item.id)}
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
                            🎓
                        </div>

                        <h2 className="text-2xl font-bold mt-4">
                            No Education Found
                        </h2>

                        <p className="text-slate-400 mt-2">
                            Add your first education details.
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
                                College
                            </th>

                            <th className="px-6 py-4 text-left">
                                Degree
                            </th>

                            <th className="px-6 py-4 text-left">
                                Year
                            </th>

                            <th className="px-6 py-4 text-left">
                                CGPA
                            </th>

                            <th className="px-6 py-4 text-left">
                                Description
                            </th>

                            <th className="px-6 py-4 text-center">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredEducation.length > 0 ? (

                            filteredEducation.map((item) => (

                                <tr
                                    key={item.id}
                                    className="border-t border-slate-800 hover:bg-slate-800 transition"
                                >

                                    <td className="px-6 py-5">

                                        <h3 className="text-lg font-semibold break-words">
                                            {item.college}
                                        </h3>

                                    </td>

                                    <td className="px-6 py-5">

                                        <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-300">
                                            {item.degree}
                                        </span>

                                    </td>

                                    <td className="px-6 py-5">
                                        {item.year}
                                    </td>

                                    <td className="px-6 py-5 font-semibold">
                                        {item.cgpa}
                                    </td>

                                    <td className="px-6 py-5 max-w-sm">

                                        <p className="text-slate-300 break-words">
                                            {item.detail || "-"}
                                        </p>

                                    </td>

                                    <td className="px-6 py-5">

                                        <div className="flex justify-center gap-3">

                                            <button
                                                onClick={() => editEducation(item)}
                                                className="w-10 h-10 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center transition"
                                            >
                                                <FaEdit />
                                            </button>

                                            <button
                                                onClick={() => deleteEducation(item.id)}
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

                                <td
                                    colSpan={6}
                                    className="py-20 text-center"
                                >

                                    <div className="text-6xl">
                                        🎓
                                    </div>

                                    <h2 className="text-2xl font-bold mt-4">
                                        No Education Found
                                    </h2>

                                    <p className="text-slate-400 mt-2">
                                        Add your first education details.
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

export default EducationAdmin;
