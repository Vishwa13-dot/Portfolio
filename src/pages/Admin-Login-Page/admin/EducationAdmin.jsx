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

        return saved
            ? JSON.parse(saved)
            : [];
    });

    const [editingId, setEditingId] = useState(null);

    const [search, setSearch] = useState("");

    const [form, setForm] = useState({
        college: "",
        degree: "",
        year: "",
        cgpa: "",
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
        });

        setEditingId(null);
    };

    const addOrUpdateEducation = () => {

        if (
            form.college.trim() === "" ||
            form.degree.trim() === ""
        ) {
            alert("Please fill required fields.");
            return;
        }

        if (editingId) {

            setEducation(
                education.map((item) =>
                    item.id === editingId
                        ? {
                            ...item,
                            ...form,
                        }
                        : item
                )
            );

        } else {

            setEducation([
                ...education,
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
        });

    };

    const deleteEducation = (id) => {

        if (window.confirm("Delete this education?")) {

            setEducation(
                education.filter(
                    (item) => item.id !== id
                )
            );

        }

    };

    const filteredEducation = education.filter((item) =>
        item.college
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (

        <div className="space-y-8">

            {/* Heading */}

            <div className="flex justify-between items-center">

                <div>

                    <h1 className="text-4xl font-bold">
                        Education
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Manage your education details.
                    </p>

                </div>

                <button
                    onClick={addOrUpdateEducation}
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl flex items-center gap-3 transition"
                >

                    <FaPlus />

                    {editingId
                        ? "Update Education"
                        : "Add Education"}

                </button>

            </div>

            {/* Search */}

            <div className="relative">

                <FaSearch className="absolute left-5 top-5 text-slate-500" />

                <input
                    type="text"
                    placeholder="Search College..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 pl-14 pr-5 outline-none"
                />

            </div>

            {/* Form */}

            <div className="grid md:grid-cols-2 gap-6 bg-slate-900 border border-slate-800 rounded-3xl p-8">

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
                    className="bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
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
                    className="bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
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
                    className="bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
                />

                <input
                    type="text"
                    placeholder="CGPA"
                    value={form.cgpa}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            cgpa: e.target.value,
                        })
                    }
                    className="bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
                />

            </div>

            {/* Education Table */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">

                <div className="overflow-x-auto">

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

                                        {/* College */}

                                        <td className="px-6 py-5 font-semibold">
                                            {item.college}
                                        </td>

                                        {/* Degree */}

                                        <td className="px-6 py-5">

                                            <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300">

                                                {item.degree}

                                            </span>

                                        </td>

                                        {/* Year */}

                                        <td className="px-6 py-5">
                                            {item.year}
                                        </td>

                                        {/* CGPA */}

                                        <td className="px-6 py-5">
                                            {item.cgpa}
                                        </td>

                                        {/* Actions */}

                                        <td className="px-6 py-5">

                                            <div className="flex justify-center gap-4">

                                                <button
                                                    onClick={() => editEducation(item)}
                                                    className="w-10 h-10 rounded-xl bg-yellow-500/20 hover:bg-yellow-500 text-yellow-400 flex items-center justify-center transition"
                                                >

                                                    <FaEdit />

                                                </button>

                                                <button
                                                    onClick={() => deleteEducation(item.id)}
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
                                        colSpan="5"
                                        className="text-center py-20"
                                    >

                                        <div className="text-6xl mb-4">

                                            🎓

                                        </div>

                                        <h2 className="text-2xl font-bold">

                                            No Education Found

                                        </h2>

                                        <p className="text-slate-400 mt-2">

                                            Add your education details using the form above.

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

export default EducationAdmin;