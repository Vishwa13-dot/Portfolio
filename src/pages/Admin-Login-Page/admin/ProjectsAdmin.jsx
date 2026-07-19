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
        localStorage.setItem("projects", JSON.stringify(projects));
    }, [projects]);

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

    const addOrUpdateProject = () => {
        if (!form.title.trim() || !form.category.trim()) {
            alert("Please fill required fields.");
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
            setProjects((prev) =>
                prev.map((item) =>
                    item.id === editingId ? { ...item, ...project } : item
                )
            );
        } else {
            setProjects((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    ...project,
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
            image: project.image,
            tech: project.tech.join(", "),
            description: project.description,
            github: project.github,
            live: project.live,
            featured: project.featured,
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const deleteProject = (id) => {
        if (window.confirm("Delete this project?")) {
            setProjects((prev) => prev.filter((item) => item.id !== id));
        }
    };

    const filteredProjects = projects.filter(
        (project) =>
            project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-8 p-4 md:p-6">

            {/* Header */}

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                <div>

                    <h1 className="text-3xl font-bold text-white">
                        Projects
                    </h1>

                    <p className="text-slate-400 mt-2">
                        Add, edit and manage your portfolio projects.
                    </p>

                </div>

                <button
                    onClick={addOrUpdateProject}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition w-full lg:w-auto"
                >
                    <FaPlus />

                    {editingId ? "Update Project" : "Add Project"}
                </button>

            </div>

            {/* Search */}

            <div className="relative">

                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                <input
                    type="text"
                    placeholder="Search project..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500"
                />

            </div>

            {/* Form */}

            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 md:p-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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
                        className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
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
                        className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    />

                    <input
                        type="text"
                        placeholder="Technologies (React, Tailwind...)"
                        value={form.tech}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                tech: e.target.value,
                            })
                        }
                        className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    />

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
                        className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 resize-none outline-none focus:border-blue-500"
                    />

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
                        className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    />

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
                        className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                    />

                    <div className="md:col-span-2">

                        <label className="block mb-3 text-slate-300">
                            Project Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 file:bg-blue-600 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-lg"
                        />

                        {form.image && (
                            <img
                                src={form.image}
                                alt="Preview"
                                className="mt-5 w-full sm:w-80 h-52 object-cover rounded-xl border border-slate-700"
                            />
                        )}

                    </div>

                </div>

            </div>
            {/* Mobile Cards */}

            <div className="grid grid-cols-1 gap-5 lg:hidden">

                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
                        >

                            <div className="h-48 bg-slate-800">

                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-6xl">
                                        💻
                                    </div>
                                )}

                            </div>

                            <div className="p-5">

                                <div className="flex items-start justify-between gap-3">

                                    <h2 className="text-xl font-semibold break-words">
                                        {project.title}
                                    </h2>

                                    <span className="bg-blue-600/20 text-blue-300 text-xs px-3 py-1 rounded-full whitespace-nowrap">
                                        {project.category}
                                    </span>

                                </div>

                                <p className="text-slate-400 mt-3 text-sm break-words">
                                    {project.description}
                                </p>

                                {project.tech.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-4">

                                        {project.tech.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 rounded-lg bg-slate-800 text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}

                                    </div>
                                )}

                                <div className="flex justify-between items-center mt-6">

                                    <div className="flex gap-3">

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center"
                                            >
                                                <FaGithub />
                                            </a>
                                        )}

                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-10 h-10 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center"
                                            >
                                                <FaExternalLinkAlt />
                                            </a>
                                        )}

                                    </div>

                                    <div className="flex gap-3">

                                        <button
                                            onClick={() => editProject(project)}
                                            className="w-10 h-10 rounded-lg bg-yellow-500 text-white flex items-center justify-center"
                                        >
                                            <FaEdit />
                                        </button>

                                        <button
                                            onClick={() => deleteProject(project.id)}
                                            className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center"
                                        >
                                            <FaTrash />
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>
                    ))
                ) : (
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl py-14 text-center">

                        <div className="text-6xl">
                            📂
                        </div>

                        <h2 className="text-2xl font-bold mt-4">
                            No Projects Found
                        </h2>

                        <p className="text-slate-400 mt-2">
                            Add your first project.
                        </p>

                    </div>
                )}

            </div>

            {/* Desktop Table */}

            <div className="hidden lg:block bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-800">

                        <tr>

                            <th className="text-left px-6 py-4">
                                Project
                            </th>

                            <th className="text-left px-6 py-4">
                                Category
                            </th>

                            <th className="text-center px-6 py-4">
                                Links
                            </th>

                            <th className="text-center px-6 py-4">
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

                                    <td className="px-6 py-5">

                                        <div className="flex items-start gap-4">

                                            <div className="w-24 h-16 rounded-lg overflow-hidden bg-slate-800 flex-shrink-0">

                                                {project.image ? (
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        💻
                                                    </div>
                                                )}

                                            </div>

                                            <div>

                                                <h3 className="font-semibold text-lg">
                                                    {project.title}
                                                </h3>

                                                <p className="text-sm text-slate-400 mt-1 max-w-md break-words">
                                                    {project.description}
                                                </p>

                                                {project.tech.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mt-3">

                                                        {project.tech.map((tech, index) => (
                                                            <span
                                                                key={index}
                                                                className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}

                                                    </div>
                                                )}

                                            </div>

                                        </div>

                                    </td>

                                    <td className="px-6 py-5">

                                        <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full">
                                            {project.category}
                                        </span>

                                    </td>

                                    <td className="px-6 py-5">

                                        <div className="flex justify-center gap-3">

                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center"
                                                >
                                                    <FaGithub />
                                                </a>
                                            )}

                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="w-10 h-10 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center"
                                                >
                                                    <FaExternalLinkAlt />
                                                </a>
                                            )}

                                        </div>

                                    </td>

                                    <td className="px-6 py-5">

                                        <div className="flex justify-center gap-3">

                                            <button
                                                onClick={() => editProject(project)}
                                                className="w-10 h-10 rounded-lg bg-yellow-500 text-white flex items-center justify-center"
                                            >
                                                <FaEdit />
                                            </button>

                                            <button
                                                onClick={() => deleteProject(project.id)}
                                                className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center"
                                            >
                                                <FaTrash />
                                            </button>

                                        </div>

                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr>

                                <td colSpan={4} className="py-20 text-center">

                                    <div className="text-6xl">
                                        📂
                                    </div>

                                    <h2 className="text-2xl font-bold mt-4">
                                        No Projects Found
                                    </h2>

                                    <p className="text-slate-400 mt-2">
                                        Add your first project.
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

export default ProjectsAdmin;