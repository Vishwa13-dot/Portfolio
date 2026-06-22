import { motion } from "framer-motion";

function About() {
  const facts = [
    { label: "Location", value: "Ahmedabad, Gujarat" },
    { label: "Degree", value: "B.Tech Information Technology" },
    { label: "Focus", value: "AI • ML • Data Science" },
    { label: "Languages", value: "Python • Java • SQL" },
  ];

  const stats = [
    { value: "8.99", label: "Diploma CGPA" },
    { value: "3", label: "Internships" },
    { value: "4+", label: "Major Projects" },
    { value: "2025", label: "B.Tech Started" },
  ];

  return (
    <section id="about" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center"
      >
        About Me
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            I am a B.Tech Information Technology student at
            <span className="text-white font-medium">
              {" "}JG University, Ahmedabad
            </span>
            {" "}with a strong foundation in Artificial Intelligence,
            Machine Learning, Data Science, SQL, and Python Programming.
          </p>

          <p className="text-slate-400 text-lg leading-relaxed">
            Passionate about building smart software solutions,
            I enjoy solving real-world problems through technology
            and continuously learning new tools, frameworks,
            and emerging technologies.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex justify-between border-b border-slate-700 pb-3"
            >
              <span className="text-slate-500">
                {fact.label}
              </span>

              <span className="text-white font-medium text-right">
                {fact.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-blue-400">
              {stat.value}
            </h3>

            <p className="text-slate-400 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default About;