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
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Passionate About Technology & Innovation
            </h3>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I am currently pursuing a B.Tech in Information Technology
              at <span className="text-blue-400">JG University, Ahmedabad</span>.
              My interests lie in Artificial Intelligence, Machine Learning,
              Data Science, and Software Development.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I enjoy creating smart solutions using Python, SQL, and modern
              technologies. Through internships and projects, I have gained
              practical experience in AI/ML applications, data analysis,
              and web development.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed">
              My goal is to continuously learn, innovate, and contribute to
              impactful technology solutions that solve real-world problems.
            </p>
          </div>

          {/* Right Side */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Personal Information
            </h3>

            <div className="space-y-6">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex justify-between border-b border-slate-800 pb-4 hover:border-blue-500 transition-all duration-300"
                >
                  <span className="text-slate-500">
                    {fact.label}
                  </span>

                  <span className="text-white font-medium text-right">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center hover:-translate-y-2 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-blue-400 mb-3">
                {stat.value}
              </h3>

              <p className="text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;