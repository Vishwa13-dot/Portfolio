import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-slate-400 text-sm">
            © 2026 Vishwa Parmar. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xl">

            <a
              href="https://linkedin.com/in/work-vishwa"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Vishwa13-dot"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:vishwaparmar1309@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;