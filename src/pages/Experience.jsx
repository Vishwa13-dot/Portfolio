import { useEffect, useState } from "react";
import ls from "../utils/secureStorage";
import experienceFallback from "../data/experienceFallback";

function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
      try {
        const data = ls.get("experience");
  
        setExperience(
          Array.isArray(data) && data.length > 0
            ? data
            : experienceFallback
        );
      } catch (error) {
        console.error("SecureLS:", error);
        setExperience(experienceFallback);
      }
    }, []);

  return (
    <section id="experience" className="section">
      <h2 className="section-title text-center">
        Internship Experience
      </h2>

      <p className="text-center text-slate-400 max-w-3xl mx-auto mb-14">
        Professional experience gained through internships
        in Artificial Intelligence, Software Development,
        Data Analysis, and Python Programming.
      </p>

      {experience.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">💼</div>

          <h3 className="text-2xl font-bold text-white">
            No Experience Added Yet
          </h3>

          <p className="text-slate-400 mt-2">
            Add your experience from the Admin Panel.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {experience.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 min-h-[340px]"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                {item.company}
              </h3>

              <p className="text-slate-200 font-semibold mb-2">
                {item.role}
              </p>

              <p className="text-sm text-slate-500 mb-2">
                {item.duration}
              </p>

              {item.location && (
                <p className="text-sm text-slate-400 mb-5">
                  {item.location}
                </p>
              )}

              {item.description && (
                <p className="text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Experience;