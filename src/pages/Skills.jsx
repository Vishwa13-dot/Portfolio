import { useState, useEffect } from "react";
import skillsFallback from "../data/skillsFallback";
import {
    FaLaptopCode,
    FaCode,
    FaRobot,
    FaDatabase,
    FaTools,
} from "react-icons/fa";

function Skills() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [savedSkills, setSavedSkills] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("skills"));

        if (data && data.length > 0) {
            setSavedSkills(data);
        } else {
            setSavedSkills(skillsFallback);
        }
    }, []);

    const skillCategories = [
        {
            id: 1,
            title: "Frontend",
            icon: (
                <FaLaptopCode className="text-2xl sm:text-3xl text-blue-400 group-hover:rotate-12 transition duration-500" />
            ),
            description: "Building modern and responsive user interfaces.",
        },
        {
            id: 2,
            title: "Programming",
            icon: (
                <FaCode className="text-2xl sm:text-3xl text-green-400 group-hover:rotate-12 transition duration-500" />
            ),
            description: "Strong programming fundamentals and problem solving.",
        },
        {
            id: 3,
            title: "AI & ML",
            icon: (
                <FaRobot className="text-2xl sm:text-3xl text-pink-400 group-hover:rotate-12 transition duration-500" />
            ),
            description: "Machine Learning libraries and data processing.",
        },
        {
            id: 4,
            title: "Database",
            icon: (
                <FaDatabase className="text-2xl sm:text-3xl text-yellow-400 group-hover:rotate-12 transition duration-500" />
            ),
            description: "Designing and managing databases efficiently.",
        },
        {
            id: 5,
            title: "Tools",
            icon: (
                <FaTools className="text-2xl sm:text-3xl text-cyan-400 group-hover:rotate-12 transition duration-500" />
            ),
            description: "Development tools used in daily workflow.",
        },
    ];

    const displayedSkills =
        activeCategory === "All"
            ? skillCategories
            : skillCategories.filter(
                (item) => item.title === activeCategory
            );

    const updatedCategories = displayedSkills.map((category) => ({
        ...category,
        skills: savedSkills
            .filter((item) => item.category === category.title)
            .map((item) => item.name),
    }));

    return (
        <section className="relative overflow-hidden min-h-screen bg-slate-950 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">

            <div className="absolute top-40 left-10 w-60 sm:w-72 h-60 sm:h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-20 right-10 w-60 sm:w-72 h-60 sm:h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto">

                {/* Heading */}

                <div className="text-center">

                    <p className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-blue-400 text-xs sm:text-sm font-semibold">
                        TECH STACK
                    </p>

                    <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                        Skills & Technologies
                    </h1>

                    <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base text-slate-400 leading-7 sm:leading-8 px-2">
                        Technologies, programming languages, frameworks and tools that I
                        use to build responsive web applications and machine learning
                        projects.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12 lg:mt-20">

                    {updatedCategories.map((category) => (

                        <div
                            key={category.id}
                            className={`
                bg-gradient-to-br
                from-slate-900
                to-slate-800
                border
                border-slate-800
                rounded-3xl
                p-5 sm:p-6 lg:p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-2xl
                hover:shadow-cyan-500/20
                ${category.title === "Tools" &&
                                    activeCategory === "All"
                                    ? "lg:col-span-2"
                                    : ""
                                }
              `}
                        >

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                                <div className="flex items-start sm:items-center gap-3 sm:gap-4 group">

                                    {category.icon}

                                    <div>

                                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                                            {category.title}
                                        </h2>

                                        <p className="text-sm sm:text-base text-slate-400 mt-1 sm:mt-2">
                                            {category.description}
                                        </p>

                                    </div>

                                </div>

                                <span className="self-start sm:self-auto px-3 sm:px-4 py-2 rounded-full bg-cyan-600/20 text-cyan-300 text-xs sm:text-sm whitespace-nowrap">
                                    {category.skills.length} Skills
                                </span>

                            </div>

                            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
                                {category.skills.length > 0 ? (
                                    category.skills.map((skill, index) => (
                                        <div
                                            key={`${category.id}-${skill}-${index}`}
                                            className="
                        flex
                        items-center
                        px-3 sm:px-4 lg:px-5
                        py-2 sm:py-3 lg:py-4
                        rounded-xl sm:rounded-2xl
                        border
                        border-slate-700
                        bg-slate-950/80
                        backdrop-blur-lg
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:scale-105
                        hover:border-cyan-400
                        hover:bg-cyan-500/10
                        hover:shadow-lg
                        hover:shadow-cyan-500/20
                        cursor-pointer
                      "
                                        >
                                            <span className="text-sm sm:text-base font-medium tracking-wide break-words">
                                                {skill}
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-slate-500 italic text-sm">
                                        No skills added yet.
                                    </div>
                                )}

                            </div>

                        </div>

                    ))}

                </div>

                {/* Quote */}

                <div className="mt-16 lg:mt-20 text-center">

                    <p className="text-sm sm:text-base text-slate-500 italic max-w-3xl mx-auto leading-7 sm:leading-8 px-2">
                        I enjoy learning new technologies and continuously improving my
                        skills by building real-world projects and exploring modern
                        development practices.
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Skills;