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
        return saved ? JSON.parse(saved) : [];
    });

    const [editingId, setEditingId] = useState(null);

    const [search, setSearch] = useState("");

    const [form, setForm] = useState({
        title: "",
        category: "",
        image: "",
        tech: "",
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

    // Upload Image

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onloadend = () => {
            setForm((prev) => ({
                ...prev,
                image: reader.result,
            }));
        };

        reader.readAsDataURL(file);
    };

    // Clear Form

    const clearForm = () => {
        setForm({
            title: "",
            category: "",
            image: "",
            tech: "",
            description: "",
            github: "",
            live: "",
            featured: false,
        });

        setEditingId(null);
    };

    // Add / Update

    const addOrUpdateProject = () => {
        if (
            form.title.trim() === "" ||
            form.category.trim() === ""
        ) {
            alert("Please fill all required fields.");
            return;
        }

        const project = {
            ...form,
            tech: form.tech
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean),
        };

        if (editingId) {
            setProjects(
                projects.map((item) =>
                    item.id === editingId
                        ? {
                            ...item,
                            ...project,
                        }
                        : item
                )
            );
        } else {
            setProjects([
                ...projects,
                {
                    id: Date.now(),
                    ...project,
                },
            ]);
        }

        clearForm();
    };

    // Edit

    const editProject = (project) => {
        setEditingId(project.id);

        setForm({
            title: project.title,
            category: project.category,
            image: project.image || "",
            tech: Array.isArray(project.tech)
                ? project.tech.join(", ")
                : "",
            description: project.description || "",
            github: project.github || "",
            live: project.live || "",
            featured: project.featured || false,
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Delete

    const deleteProject = (id) => {
        if (window.confirm("Delete this project?")) {
            setProjects(
                projects.filter(
                    (item) => item.id !== id
                )
            );
        }
    };

    // Search

    const filteredProjects = projects.filter(
        (project) =>
            project.title
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            project.category
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    return (
        <div className="space-y-8">
            {/* Heading */}

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
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

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Title */}

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
                        className="bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
                    />

                    {/* Category */}

                    <input
                        type="text"
                        placeholder="Category (AI, Web, ML...)"
                        value={form.category}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                category: e.target.value,
                            })
                        }
                        className="bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
                    />

                    {/* Tech */}

                    <input
                        type="text"
                        placeholder="Technologies (React, Tailwind, Firebase...)"
                        value={form.tech}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                tech: e.target.value,
                            })
                        }
                        className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
                    />

                    {/* Description */}

                    <textarea
                        rows="5"
                        placeholder="Project Description"
                        value={form.description}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                description: e.target.value,
                            })
                        }
                        className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none resize-none focus:border-blue-500"
                    />

                    {/* GitHub */}

                    <input
                        type="url"
                        placeholder="GitHub URL"
                        value={form.github}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                github: e.target.value,
                            })
                        }
                        className="bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
                    />

                    {/* Live */}

                    <input
                        type="url"
                        placeholder="Live Demo URL"
                        value={form.live}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                live: e.target.value,
                            })
                        }
                        className="bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none focus:border-blue-500"
                    />

                    {/* Image Upload */}

                    <div className="md:col-span-2">
                        <label className="block text-slate-300 mb-3">
                            Project Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 file:mr-4 file:px-4 file:py-2 file:border-0 file:bg-blue-600 file:text-white file:rounded-lg cursor-pointer"
                        />

                        {form.image && (
                            <div className="mt-5">
                                <img
                                    src={form.image}
                                    alt="Preview"
                                    className="w-56 h-36 object-cover rounded-xl border border-slate-700"
                                />
                            </div>
                        )}
                    </div>

                </div>
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
                                            <div className="flex items-center gap-4">
                                                <div className="w-24 h-16 rounded-lg overflow-hidden bg-slate-800 border border-slate-700 flex-shrink-0">
                                                    {project.image ? (
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-3xl">
                                                            💻
                                                        </div>
                                                    )}
                                                </div>

                                                <div>
                                                    <h3 className="font-semibold text-lg">
                                                        {project.title}
                                                    </h3>

                                                    <p className="text-slate-400 text-sm mt-1 line-clamp-2">
                                                        {project.description}
                                                    </p>

                                                    {project.tech &&
                                                        project.tech.length > 0 && (
                                                            <div className="flex flex-wrap gap-2 mt-3">
                                                                {project.tech.map(
                                                                    (tech, index) => (
                                                                        <span
                                                                            key={index}
                                                                            className="px-2 py-1 text-xs rounded-md bg-blue-600/20 text-blue-300"
                                                                        >
                                                                            {tech}
                                                                        </span>
                                                                    )
                                                                )}
                                                            </div>
                                                        )}
                                                </div>
                                            </div>
                                        </td>

                                        {/* Category */}

                                        <td className="px-6 py-5">
                                            <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300">
                                                {project.category}
                                            </span>
                                        </td>


                                        {/* Links */}

                                        <td className="px-6 py-5">
                                            <div className="flex justify-center gap-4">
                                                {project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition"
                                                    >
                                                        <FaGithub />
                                                    </a>
                                                )}

                                                {project.live && (
                                                    <a
                                                        href={project.live}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition"
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
                                                    onClick={() =>
                                                        editProject(project)
                                                    }
                                                    className="w-10 h-10 rounded-xl bg-yellow-500/20 hover:bg-yellow-500 text-yellow-400 hover:text-white flex items-center justify-center transition"
                                                >
                                                    <FaEdit />
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        deleteProject(project.id)
                                                    }
                                                    className="w-10 h-10 rounded-xl bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white flex items-center justify-center transition"
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