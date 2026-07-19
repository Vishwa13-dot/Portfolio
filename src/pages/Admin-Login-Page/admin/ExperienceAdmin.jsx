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

    return saved
      ? JSON.parse(saved)
      : [];
  });

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    company: "",
    role: "",
    duration: "",
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
      description: "",
    });

    setEditingId(null);
  };

  const addOrUpdateExperience = () => {

    if (
      form.company.trim() === "" ||
      form.role.trim() === ""
    ) {
      alert("Please fill required fields.");
      return;
    }

    if (editingId) {

      setExperience(
        experience.map((item) =>
          item.id === editingId
            ? {
              ...item,
              ...form,
            }
            : item
        )
      );

    } else {

      setExperience([
        ...experience,
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
      description: item.description,
    });

  };

  const deleteExperience = (id) => {

    if (window.confirm("Delete this experience?")) {

      setExperience(
        experience.filter(
          (item) => item.id !== id
        )
      );

    }

  };

  const filteredExperience = experience.filter((item) =>
    item.company
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div className="space-y-8">

      {/* Heading */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Experience
          </h1>

          <p className="text-slate-400 mt-2">
            Manage work experience.
          </p>

        </div>

        <button
          onClick={addOrUpdateExperience}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl flex items-center gap-3 transition"
        >

          <FaPlus />

          {editingId
            ? "Update Experience"
            : "Add Experience"}

        </button>

      </div>

      {/* Search */}

      <div className="relative">

        <FaSearch className="absolute left-5 top-5 text-slate-500" />

        <input
          type="text"
          placeholder="Search Company..."
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
          placeholder="Company Name"
          value={form.company}
          onChange={(e) =>
            setForm({
              ...form,
              company: e.target.value,
            })
          }
          className="bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
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
          className="bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
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
          className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none"
        />

        <textarea
          rows="4"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
          className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-xl p-4 outline-none resize-none"
        />

      </div>

      {/* Experience Table */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">

        <div className="overflow-x-auto">

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

                    {/* Company */}

                    <td className="px-6 py-5">

                      <div>

                        <h3 className="font-semibold text-lg">
                          {item.company}
                        </h3>

                        <p className="text-slate-400 text-sm mt-1">
                          {item.description}
                        </p>

                      </div>

                    </td>

                    {/* Role */}

                    <td className="px-6 py-5">

                      <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-300">

                        {item.role}

                      </span>

                    </td>

                    {/* Duration */}

                    <td className="px-6 py-5">

                      {item.duration}

                    </td>

                    {/* Actions */}

                    <td className="px-6 py-5">

                      <div className="flex justify-center gap-4">

                        <button
                          onClick={() => editExperience(item)}
                          className="w-10 h-10 rounded-xl bg-yellow-500/20 hover:bg-yellow-500 text-yellow-400 flex items-center justify-center transition"
                        >

                          <FaEdit />

                        </button>

                        <button
                          onClick={() =>
                            deleteExperience(item.id)
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
                    colSpan="4"
                    className="text-center py-20"
                  >

                    <div className="text-6xl mb-4">

                      💼

                    </div>

                    <h2 className="text-2xl font-bold">

                      No Experience Found

                    </h2>

                    <p className="text-slate-400 mt-2">

                      Add your first experience using the form above.

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

export default ExperienceAdmin;