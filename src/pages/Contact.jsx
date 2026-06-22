
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="max-w-5xl mx-auto">
        <div className="border-t border-slate-800 pt-16">
          <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Let's build
            <br />
            something great.
          </h2>

          <p className="text-slate-400 text-lg mt-8 max-w-2xl">
            I'm currently looking for internships,
            software development opportunities, and exciting
            projects in AI, Machine Learning, and Data Science.
          </p>

          <div className="mt-12 space-y-6">
            <a
              href="mailto:vishwaparmar1309@gmail.com"
              className="flex items-center gap-4 text-xl font-medium text-slate-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
            >
              <FaEnvelope className="text-2xl" />
              <span>Email</span>
              <span className="text-sm">↗</span>
            </a>

            <a
              href="https://linkedin.com/in/work-vishwa"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-xl font-medium text-slate-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
              <span className="text-sm">↗</span>
            </a>

            <a
              href="https://github.com/Vishwa13-dot"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-xl font-medium text-slate-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
              <span className="text-sm">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

