import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      year: "2025 - Present",
      title: "Bachelor of Technology (B.Tech)",
      institute: "JG University, Ahmedabad",
      detail:
        "Information Technology • Relevant Coursework: Artificial Intelligence, Python Programming, Data Structures, Machine Learning, DBMS, Web Development",
    },
    {
      year: "2022 - 2025",
      title: "Diploma in Information Technology",
      institute: "Government Polytechnic for Girls, Ahmedabad",
      detail:
        "CGPA: 8.99 / 10.0 • Relevant Coursework: Python, Data Structures, DBMS, Operating Systems, Advanced Java",
    },
    {
      year: "2022",
      title: "Secondary School Certificate (SSC)",
      institute: "Diwan Ballubhai Madhyamik Shala, Ahmedabad",
      detail:
        "Percentage: 74% • Grade: B1",
    },
  ];

  return (
    <section id="education" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        Education
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-slate-400 max-w-3xl mx-auto mb-16"
      >
        My academic journey in Information Technology,
        Artificial Intelligence, Machine Learning, and
        Software Development.
      </motion.p>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-4 top-0 h-full w-1 bg-slate-700"></div>

        {education.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative pl-16 mb-12"
          >
            <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-blue-500 border-4 border-slate-900 shadow-lg shadow-blue-500/50"></div>

            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition duration-300">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-3">
                {item.title}
              </h3>

              <p className="text-slate-300 mt-2 font-medium">
                {item.institute}
              </p>

              <p className="text-slate-400 mt-4 leading-relaxed">
                {item.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;