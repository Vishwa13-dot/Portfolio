import { useState, useEffect } from "react";

import {
    FaLaptopCode,
    FaCode,
    FaRobot,
    FaDatabase,
    FaTools,
} from "react-icons/fa";



function Skills() {
    const [activeCategory, setActiveCategory] = useState("All");

    const skillCategories = [
        {
            id: 1,
            title: "Frontend",
            icon: <FaLaptopCode className="text-3xl text-blue-400 group-hover:rotate-12 transition duration-500" />,
            description: "Building modern and responsive user interfaces.",
            // skills: [],
        },
        {
            id: 2,
            title: "Programming",
            icon: <FaCode className="text-3xl text-green-400 group-hover:rotate-12 transition duration-500" />,
            description: "Strong programming fundamentals and problem solving.",
            // skills: [],
        },
        {
            id: 3,
            title: "AI & ML",
            icon: <FaRobot className="text-3xl text-pink-400 group-hover:rotate-12 transition duration-500" />,
            description: "Machine Learning libraries and data processing.",
            // skills: [],
        },
        {
            id: 4,
            title: "Database",
            icon: <FaDatabase className="text-3xl text-yellow-400 group-hover:rotate-12 transition duration-500" />,
            description: "Designing and managing databases efficiently.",
            // skills: [],
        },
        {
            id: 5,
            title: "Tools",
            icon: <FaTools className="text-3xl text-cyan-400 group-hover:rotate-12 transition duration-500" />,
            description: "Development tools used in daily workflow.",
            // skills: [],
        },
    ];

    const displayedSkills =
        activeCategory === "All"
            ? skillCategories
            : skillCategories.filter(
                (item) => item.title === activeCategory
            );



    const [savedSkills, setSavedSkills] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("skills")) || [];
        setSavedSkills(data);
    }, []);

    const updatedCategories = displayedSkills.map((category) => ({
        ...category,
        skills: savedSkills
            .filter((item) => item.category === category.title)
            .map((item) => item.name),
    }));


    return (
        <section className="relative overflow-hidden min-h-screen bg-slate-950 text-white py-24 px-6">
            <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>          <div className="max-w-7xl mx-auto">

                {/* Heading */}

                <div className="text-center">

                    <p className="uppercase tracking-[0.35em] text-blue-400 text-sm font-semibold">
                        TECH STACK
                    </p>

                    <h1 className="mt-4 text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                        Skills & Technologies
                    </h1>

                    <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
                        Technologies, programming languages, frameworks and tools
                        that I use to build responsive web applications and
                        machine learning projects.
                    </p>

                </div>

                {/* Dashboard Cards */}

                <div className="grid lg:grid-cols-2 gap-8 mt-20">

                    {
                        updatedCategories.map((category) => (

                            <div
                                key={category.id}
                                className={`
              bg-gradient-to-br
              from-slate-900
              to-slate-800
              border
              border-slate-800
              rounded-3xl
              p-8
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

                                {/* Header */}

                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-4 group">

                                        {category.icon}

                                        <div>

                                            <h2 className="text-3xl font-bold">
                                                {category.title}
                                            </h2>

                                            <p className="text-slate-400 mt-2">
                                                {category.description}
                                            </p>

                                        </div>

                                    </div>

                                    <span className="px-4 py-2 rounded-full bg-cyan-600/20 text-cyan-300 text-sm">
                                        {category.skills.length} Skills
                                    </span>

                                </div>

                                {/* Skills */}

                                <div className="flex flex-wrap gap-4 mt-8">

                                    {category.skills.map((skill, index) => (
                                        <div
                                            key={`${category.id}-${skill}-${index}`}
                                            className="
            flex
            items-center
            px-5
            py-4
            rounded-2xl
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
                                            <span className="font-medium tracking-wide">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                            </div>

                        ))
                    }

                </div>

                {/* Quote */}

                <div className="mt-20 text-center">

                    <p className="text-slate-500 italic max-w-3xl mx-auto leading-8">
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