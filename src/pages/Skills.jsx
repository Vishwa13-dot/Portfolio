import { useState } from "react";

function Skills() {
    const [activeCategory, setActiveCategory] = useState("Frontend");

    const skills = {
        Frontend: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React JS",
            "Tailwind CSS",
        ],

        Programming: [
            "Python",
            "Java",
            "C",
            "SQL",
        ],

        "AI & ML": [
            "Machine Learning",
            "Pandas",
            "NumPy",
            "Scikit-Learn",
        ],

        Database: [
            "MySQL",
            "MongoDB",
        ],

        Tools: [
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "Figma",
        ],
    };

    return (
        <section className="bg-slate-950 text-white min-h-screen py-24 px-6">

            <div className="max-w-6xl mx-auto">

                {/* Heading */}

                <div className="text-center">

                    <p className="uppercase tracking-[0.35em] text-blue-400 text-sm font-semibold">
                        Tech Stack
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold mt-4">
                        Technologies I Know
                    </h1>

                    <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-8">
                        Technologies, frameworks and tools that I use while
                        developing web applications and machine learning
                        solutions.
                    </p>

                </div>

                {/* Category Buttons */}

                <div className="flex flex-wrap justify-center gap-4 mt-16">

                    {Object.keys(skills).map((category) => (

                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full border transition-all duration-300

              ${activeCategory === category
                                    ? "bg-blue-600 border-blue-600 text-white"
                                    : "border-slate-700 hover:border-blue-500 hover:text-blue-400"
                                }`}
                        >
                            {category}
                        </button>

                    ))}

                </div>

                {/* Skills Container */}

                <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-10">

                    <h2 className="text-3xl font-bold mb-8">

                        {activeCategory}

                    </h2>

                    <div className="flex flex-wrap gap-5">
                        {skills[activeCategory].map((skill, index) => (

                            <div
                                key={index}
                                className="
                  px-6
                  py-3
                  rounded-full
                  border
                  border-slate-700
                  bg-slate-950
                  text-slate-300
                  font-medium
                  tracking-wide
                  cursor-pointer
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:bg-blue-600/10
                  hover:text-white
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-blue-500/20
                "
                            >
                                {skill}
                            </div>

                        ))}

                    </div>

                </div>

        
                {/* Bottom Quote */}

                <div className="mt-16 text-center">

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