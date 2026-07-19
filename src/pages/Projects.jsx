import { useState, useEffect } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const categories = [
    "All",
    ...new Set(
      projects.map((project) => project.category)
    ),
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
        (project) =>
          project.category === filter
      );

  return (
    <section className="bg-slate-950 text-white py-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-blue-400 text-sm">
            Projects
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Featured Work
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 leading-8">
            A collection of projects showcasing my
            experience in Artificial Intelligence,
            Machine Learning and Modern Web
            Development.
          </p>
        </div>

        {/* Filter */}

        <div className="flex justify-center flex-wrap gap-4 mt-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setFilter(category)
              }
              className={`px-7 py-3 rounded-full border transition-all duration-300 ${filter === category
                  ? "bg-blue-600 border-blue-600"
                  : "border-slate-700 hover:border-blue-500"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Empty */}

        {filteredProjects.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-7xl mb-5">
              📂
            </div>

            <h2 className="text-3xl font-bold">
              No Projects Added
            </h2>

            <p className="text-slate-400 mt-3">
              Add your projects from the
              Admin Panel.
            </p>
          </div>
        ) : (
          <div className="mt-24 space-y-24">
            {filteredProjects.map(
              (project, index) => (
                <div
                  key={project.id}
                  className={`grid lg:grid-cols-2 gap-14 items-center ${index % 2 !== 0
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                    }`}
                >
                  {/* Image */}

                  <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition duration-500 hover:scale-105"
                      />
                    ) : (
                      <div className="h-[350px] flex items-center justify-center text-8xl">
                        💻
                      </div>
                    )}
                  </div>

                  {/* Content */}

                  <div>
                    <div className="flex items-center gap-3">
                      <p className="text-blue-400 uppercase tracking-[0.25em] text-sm">
                        {project.category}
                      </p>
                    </div>

                    <h3 className="text-4xl font-bold mt-4">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 leading-8 mt-6">
                      {project.description}
                    </p>

                    {/* Tech */}

                    {project.tech &&
                      project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-8">
                          {project.tech.map(
                            (tech, index) => (
                              <span
                                key={index}
                                className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-sm text-slate-300 hover:border-blue-500 transition"
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                      )}

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-5 mt-10">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-blue-600 transition"
                        >
                          <FaGithub />

                          GitHub
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
                        >
                          <FaExternalLinkAlt />

                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>

      {/* Footer */}

      <div className="mt-28 text-center">
        <p className="uppercase tracking-[0.35em] text-blue-400 text-sm">
          More Coming Soon
        </p>

        <h3 className="text-4xl font-bold mt-4">
          Always Building Something New
        </h3>

        <p className="max-w-3xl mx-auto text-slate-400 leading-8 mt-6">
          I'm continuously learning new
          technologies, building real-world
          applications and improving my
          software development skills.
        </p>
      </div>
    </section>
  );
}

export default Projects;