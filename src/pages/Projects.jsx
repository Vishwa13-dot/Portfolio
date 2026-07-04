import { useState } from "react";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";

import DiamondImg from "../assets/diamond.jpg";
import SentimentImg from "../assets/sentiment.jpg";
import ResortImg from "../assets/resort.png";
import PortfolioImg from "../assets/portfolio.png";

function Projects() {

  const [filter, setFilter] = useState("All");

  const projects = [

    {
      title: "Diamond Price Prediction",
      category: "AI",
      image: DiamondImg,
      tech: [
        "Python",
        "Machine Learning",
        "Pandas",
        "NumPy",
        "Streamlit",
      ],
      description:
        "Developed a machine learning application that predicts diamond prices using regression algorithms with an interactive Streamlit interface.",
      github: "#",
      live: "#",
    },

    {
      title: "Movie Review Sentiment Analysis",
      category: "AI",
      image: SentimentImg,
      tech: [
        "Python",
        "NLP",
        "Scikit-Learn",
        "NLTK",
      ],
      description:
        "Built an NLP-based application that classifies movie reviews into positive or negative sentiments using Machine Learning.",
      github: "#",
      live: "#",
    },

    {
      title: "Resort Website",
      category: "Web",
      image: ResortImg,
      tech: [
        "React",
        "Tailwind CSS",
      ],
      description:
        "Designed and developed a premium responsive resort website with modern UI, animations and a seamless user experience.",
      github: "#",
      live: "#",
    },

    {
      title: "Portfolio Website",
      category: "Web",
      image: PortfolioImg,
      tech: [
        "React",
        "Tailwind CSS",
      ],
      description:
        "A responsive developer portfolio showcasing projects, skills, education and professional experience.",
      github: "#",
      live: "#",
    },

  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
        (project) => project.category === filter
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
            experience in Machine Learning,
            Artificial Intelligence and Modern
            Web Development.

          </p>

        </div>

        {/* Filter Buttons */}

        <div className="flex justify-center flex-wrap gap-4 mt-16">

          {["All", "AI", "Web"].map((item) => (

            <button

              key={item}

              onClick={() => setFilter(item)}

              className={`px-7 py-3 rounded-full border transition-all duration-300

              ${filter === item
                  ? "bg-blue-600 border-blue-600"
                  : "border-slate-700 hover:border-blue-500"
                }`}

            >

              {item}

            </button>

          ))}

        </div>

        {/* Projects */}

        <div className="mt-24 space-y-32">
          {filteredProjects.map((project, index) => (

            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-14 items-center ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >

              {/* Project Image */}

              <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              {/* Project Details */}

              <div>

                <p className="text-blue-400 uppercase tracking-[0.25em] text-sm">

                  {project.category}

                </p>

                <h3 className="text-4xl font-bold mt-3">

                  {project.title}

                </h3>

                <p className="text-slate-400 leading-8 mt-6">

                  {project.description}

                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-sm text-slate-300 hover:border-blue-500 hover:text-white transition"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-5 mt-10">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-500 hover:bg-blue-600 transition-all duration-300"
                  >

                    <FaGithub />

                    GitHub

                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                  >

                    <FaExternalLinkAlt />

                    Live Demo

                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>
      </div>

      {/* Bottom Section */}

      <div className="mt-28 text-center">

        <p className="uppercase tracking-[0.35em] text-blue-400 text-sm">
          More Coming Soon
        </p>

        <h3 className="text-4xl font-bold mt-4">
          Always Building Something New
        </h3>

        <p className="max-w-3xl mx-auto text-slate-400 leading-8 mt-6">
          I'm continuously exploring new technologies,
          building real-world applications and improving
          my problem-solving skills through practical
          software development and machine learning
          projects.
        </p>

      </div>

    </section>

  );
}

export default Projects;