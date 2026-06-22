import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      company: "SmartED Innovation",
      role: "AI Intern",
      duration: "June 2025 - August 2025",
      description:
        "Worked on real-world AI solutions and smart education systems. Collaborated with mentors from Microsoft and NSDL to build AI-driven tools while gaining experience in AI model design, deployment, and integration.",
    },
    {
      company: "360 Design",
      role: "Software Development Intern",
      duration: "June 2024 - August 2024",
      description:
        "Assisted in software development projects focusing on UI programming and backend logic. Gained hands-on experience in AI applications and data analysis.",
    },
    {
      company: "Axisray",
      role: "Python Intern",
      duration: "August 2023",
      description:
        "Developed Python-based scripts to automate tasks and optimize workflows. Worked on improving system performance using Python and data structures.",
    },
  ];

  return (
    <section id="experience" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        Internship Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-slate-400 max-w-3xl mx-auto mb-14"
      >
        Professional experience gained through internships
        in Artificial Intelligence, Software Development,
        Data Analysis, and Python Programming.
      </motion.p>

      <div className="grid lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 min-h-[340px]"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-2">
              {exp.company}
            </h3>

            <p className="text-slate-200 font-semibold mb-2">
              {exp.role}
            </p>

            <p className="text-sm text-slate-500 mb-5">
              {exp.duration}
            </p>

            <p className="text-slate-400 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;