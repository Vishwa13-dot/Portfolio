import { useEffect, useState } from "react";
import educationFallback from "../data/educationFallback";

function Education() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("education"));

    if (data && data.length > 0) {
      setEducation(data);
    } else {
      setEducation(educationFallback);
    }
  }, []);
  
  return (
    <section id="education" className="section">
      <h2 className="section-title text-center">
        Education
      </h2>

      <p className="text-center text-slate-400 max-w-3xl mx-auto mb-16">
        My academic journey in Information Technology,
        Artificial Intelligence, Machine Learning, and
        Software Development.
      </p>

      {education.length === 0 ? (
        <div className="text-center text-slate-400 py-20">
          <h3 className="text-2xl font-bold">
            No Education Added Yet
          </h3>

          <p className="mt-2">
            Add your education details from the Admin Panel.
          </p>
        </div>
      ) : (
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-1 bg-slate-700"></div>

          {education.map((item) => (
            <div
              key={item.id}
              className="relative pl-16 mb-12"
            >
              <div className="absolute left-0 top-3 w-8 h-8 rounded-full bg-blue-500 border-4 border-slate-900 shadow-lg shadow-blue-500/50"></div>

              <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300">
                <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-3">
                  {item.degree}
                </h3>

                <p className="text-slate-300 mt-2 font-medium">
                  {item.college}
                </p>

                <p className="text-slate-400 mt-4">
                  <span className="font-semibold">
                    CGPA / Percentage:
                  </span>{" "}
                  {item.cgpa}
                </p>

                {item.detail && (
                  <p className="text-slate-400 mt-3 leading-relaxed">
                    {item.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Education;