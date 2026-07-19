import { useState, useEffect } from "react";
import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function ExperienceAdmin() {
  const [experience, setExperience] = useState(() => {
    const saved = localStorage.getItem("experience");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    company: "",
    role: "",
    duration: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    localStorage.setItem(
      "experience",
      JSON.stringify(experience)
    );
  }, [experience]);

  const clearForm = () => {
    setForm({
      company: "",
      role: "",
      duration: "",
      location: "",
      description: "",
    });

    setEditingId(null);
  };

  const addOrUpdateExperience = () => {
    if (
      !form.company.trim() ||
      !form.role.trim() ||
      !form.duration.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingId) {
      setExperience((prev) =>
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
      setExperience((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    clearForm();
  };

  const editExperience = (item) => {
    setEditingId(item.id);

    setForm({
      company: item.company,
      role: item.role,
      duration: item.duration,
      location: item.location,
      description: item.description,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteExperience = (id) => {
    if (window.confirm("Delete this experience?")) {
      setExperience((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  const filteredExperience = experience.filter(
    (item) =>
      item.company
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.role
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.duration
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.location
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 p-4 md:p-6">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Experience
          </h1>

          <p className="text-slate-400 mt-2">
            Add, edit and manage your professional experience.
          </p>

        </div>

        <button
          onClick={addOrUpdateExperience}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition w-full lg:w-auto"
        >
          <FaPlus />

          {editingId
            ? "Update Experience"
            : "Add Experience"}
        </button>

      </div>

      {/* Search */}

      <div className="relative">

        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

        <input
          type="text"
          placeholder="Search company, role, duration or location..."
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
            placeholder="Company Name"
            value={form.company}
            onChange={(e) =>
              setForm({
                ...form,
                company: e.target.value,
              })
            }
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Role / Position"
            value={form.role}
            onChange={(e) =>
              setForm({
                ...form,
                role: e.target.value,
              })
            }
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Duration"
            value={form.duration}
            onChange={(e) =>
              setForm({
                ...form,
                duration: e.target.value,
              })
            }
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Location"
            value={form.location}
            onChange={(e) =>
              setForm({
                ...form,
                location: e.target.value,
              })
            }
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
          />

          <textarea
            rows="5"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 resize-none outline-none focus:border-blue-500"
          />

        </div>

      </div>
      {/* Mobile Experience Cards */}

      <div className="grid grid-cols-1 gap-5 lg:hidden">

        {filteredExperience.length > 0 ? (
          filteredExperience.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="flex-1 min-w-0">

                  <h2 className="text-xl font-semibold break-words">
                    {item.company}
                  </h2>

                  <p className="text-blue-400 mt-2 font-medium break-words">
                    {item.role}
                  </p>

                </div>

              </div>

              <div className="mt-5 space-y-3">

                <div className="flex justify-between gap-3">

                  <span className="text-slate-400">
                    Duration
                  </span>

                  <span className="text-right break-words">
                    {item.duration}
                  </span>

                </div>

                <div className="flex justify-between gap-3">

                  <span className="text-slate-400">
                    Location
                  </span>

                  <span className="text-right break-words">
                    {item.location || "-"}
                  </span>

                </div>

              </div>

              {item.description && (

                <div className="mt-5 border-t border-slate-800 pt-4">

                  <p className="text-sm text-slate-300 break-words">
                    {item.description}
                  </p>

                </div>

              )}

              <div className="flex justify-end gap-3 mt-6">

                <button
                  onClick={() => editExperience(item)}
                  className="w-10 h-10 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center transition"
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => deleteExperience(item.id)}
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
              💼
            </div>

            <h2 className="text-2xl font-bold mt-4">
              No Experience Found
            </h2>

            <p className="text-slate-400 mt-2">
              Add your first experience.
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
                Company
              </th>

              <th className="px-6 py-4 text-left">
                Role
              </th>

              <th className="px-6 py-4 text-left">
                Duration
              </th>

              <th className="px-6 py-4 text-left">
                Location
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredExperience.length > 0 ? (

              filteredExperience.map((item) => (

                <tr
                  key={item.id}
                  className="border-t border-slate-800 hover:bg-slate-800 transition"
                >

                  <td className="px-6 py-5">

                    <div>

                      <h3 className="text-lg font-semibold break-words">
                        {item.company}
                      </h3>

                      {item.description && (

                        <p className="text-sm text-slate-400 mt-2 break-words max-w-md">
                          {item.description}
                        </p>

                      )}

                    </div>

                  </td>

                  <td className="px-6 py-5">

                    <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-300">
                      {item.role}
                    </span>

                  </td>

                  <td className="px-6 py-5">
                    {item.duration}
                  </td>

                  <td className="px-6 py-5">
                    {item.location || "-"}
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => editExperience(item)}
                        className="w-10 h-10 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center transition"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => deleteExperience(item.id)}
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
                  colSpan={5}
                  className="py-20 text-center"
                >

                  <div className="text-6xl">
                    💼
                  </div>

                  <h2 className="text-2xl font-bold mt-4">
                    No Experience Found
                  </h2>

                  <p className="text-slate-400 mt-2">
                    Add your first experience.
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

export default ExperienceAdmin;