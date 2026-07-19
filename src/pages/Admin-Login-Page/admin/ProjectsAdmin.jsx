import { useState, useEffect } from "react";
import {
    FaPlus,
    FaSearch,
    FaGithub,
    FaExternalLinkAlt,
    FaEdit,
    FaTrash,
} from "react-icons/fa";

function ProjectsAdmin() {

    const [projects, setProjects] = useState(() => {
        const saved = localStorage.getItem("projects");

        return saved
            ? JSON.parse(saved)
            : [];
    });

    const [editingId, setEditingId] = useState(null);

    const [search, setSearch] = useState("");

    const [form, setForm] = useState({
        title: "",
        category: "",
        description: "",
        github: "",
        live: "",
        featured: false,
    });

    useEffect(() => {
        localStorage.setItem(
            "projects",
            JSON.stringify(projects)
        );
    }, [projects]);

    const clearForm = () => {
        setForm({
            title: "",
            category: "",
            description: "",
            github: "",
            live: "",
            featured: false,
        });

        setEditingId(null);
    };

    const addOrUpdateProject = () => {

        if (
            form.title.trim() === "" ||
            form.category.trim() === ""
        ) {
            alert("Please fill all required fields.");
            return;
        }

        if (editingId) {

            setProjects(
                projects.map((project) =>
                    project.id === editingId
                        ? {
                            ...project,
                            ...form,
                        }
                        : project
                )
            );

        } else {

            setProjects([
                ...projects,
                {
                    id: Date.now(),
                    ...form,
                },
            ]);

        }

        clearForm();

    };

    const editProject = (project) => {

        setEditingId(project.id);

        setForm({
            title: project.title,
            category: project.category,
            description: project.description,
            github: project.github,
            live: project.live,
            featured: project.featured,
        });

    };

    const deleteProject = (id) => {

        const confirmDelete = window.confirm(
            "Delete this project?"
        );

        if (confirmDelete) {

            setProjects(
                projects.filter(
                    (project) => project.id !== id
                )
            );

        }

    };

    const filteredProjects = projects.filter((project) =>
        project.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (

        <div className="space-y-8">

            {/* Heading */}

            <div className="flex justify-between items-center">

                <div>

                    <h1 className="text-4xl font-bold">
                        Projects
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Manage your portfolio projects.
                    </p>

                </div>

                <button
                    onClick={addOrUpdateProject}
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl flex items-center gap-3 transition"
                >

                    <FaPlus />

                    {editingId
                        ? "Update Project"
                        : "Add Project"}

                </button>

            </div>

            {/* Search */}

            <div className="relative">

                <FaSearch className="absolute left-5 top-5 text-slate-500" />

                <input
                    type="text"
                    placeholder="Search Project..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-4 pl-14 pr-5 outline-none focus:border-blue-500"
                />

            </div>

            {/* Form */}

            <div className="grid md:grid-cols-2 gap-6 bg-slate-900 border border-slate-800 rounded-3xl p-8">

                <input
                    type="text"
                    placeholder="Project Title"
                    value={form.title}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            title: e.target.value,
                        })
                    }
                    className="bg-slate-800 rounded-xl p-4 outline-none border border-slate-700"
                />

                <input
                    type="text"
                    placeholder="Category"
                    value={form.category}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            category: e.target.value,
                        })
                    }
                    className="bg-slate-800 rounded-xl p-4 outline-none border border-slate-700"
                />

                <textarea
                    rows="4"
                    placeholder="Project Description"
                    value={form.description}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            description: e.target.value,
                        })
                    }
                    className="md:col-span-2 bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 resize-none"
                />

                <input
                    type="text"
                    placeholder="GitHub URL"
                    value={form.github}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            github: e.target.value,
                        })
                    }
                    className="bg-slate-800 rounded-xl p-4 outline-none border border-slate-700"
                />

                <input
                    type="text"
                    placeholder="Live Demo URL"
                    value={form.live}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            live: e.target.value,
                        })
                    }
                    className="bg-slate-800 rounded-xl p-4 outline-none border border-slate-700"
                />

                <label className="md:col-span-2 flex items-center gap-3 text-slate-300">

                    <input
                        type="checkbox"
                        checked={form.featured}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                featured: e.target.checked,
                            })
                        }
                    />

                    Featured Project

                </label>

            </div>

            {/* Projects Table */}

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-slate-800">

                            <tr>

                                <th className="px-6 py-4 text-left">
                                    Project
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Category
                                </th>

                                <th className="px-6 py-4 text-center">
                                    Featured
                                </th>

                                <th className="px-6 py-4 text-center">
                                    Links
                                </th>

                                <th className="px-6 py-4 text-center">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredProjects.length > 0 ? (

                                filteredProjects.map((project) => (

                                    <tr
                                        key={project.id}
                                        className="border-t border-slate-800 hover:bg-slate-800 transition"
                                    >

                                        {/* Project */}

                                        <td className="px-6 py-5">

                                            <div>

                                                <h3 className="font-semibold text-lg">
                                                    {project.title}
                                                </h3>

                                                <p className="text-slate-400 text-sm mt-1">
                                                    {project.description}
                                                </p>

                                            </div>

                                        </td>

                                        {/* Category */}

                                        <td className="px-6 py-5">

                                            <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300">

                                                {project.category}

                                            </span>

                                        </td>

                                        {/* Featured */}

                                        <td className="px-6 py-5 text-center">

                                            {project.featured ? (

                                                <span className="px-3 py-2 rounded-full bg-green-600/20 text-green-400">

                                                    ⭐ Featured

                                                </span>

                                            ) : (

                                                <span className="text-slate-500">
                                                    —
                                                </span>

                                            )}

                                        </td>

                                        {/* Links */}

                                        <td className="px-6 py-5">

                                            <div className="flex justify-center gap-5">

                                                {project.github && (

                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-slate-400 hover:text-white transition"
                                                    >

                                                        <FaGithub />

                                                    </a>

                                                )}

                                                {project.live && (

                                                    <a
                                                        href={project.live}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-slate-400 hover:text-blue-400 transition"
                                                    >

                                                        <FaExternalLinkAlt />

                                                    </a>

                                                )}

                                            </div>

                                        </td>

                                        {/* Actions */}

                                        <td className="px-6 py-5">

                                            <div className="flex justify-center gap-4">

                                                <button
                                                    onClick={() => editProject(project)}
                                                    className="w-10 h-10 rounded-xl bg-yellow-500/20 hover:bg-yellow-500 text-yellow-400 flex items-center justify-center transition"
                                                >

                                                    <FaEdit />

                                                </button>

                                                <button
                                                    onClick={() =>
                                                        deleteProject(project.id)
                                                    }
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

                                            📂

                                        </div>

                                        <h2 className="text-2xl font-bold">

                                            No Projects Found

                                        </h2>

                                        <p className="text-slate-400 mt-2">

                                            Add your first project using the form above.

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

export default ProjectsAdmin;