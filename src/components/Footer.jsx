import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Center */}
          <p className="text-slate-500 text-sm text-center">
            © 2026 Vishwa Parmar. All Rights Reserved.
          </p>

          {/* Right Side */}
          <div className="flex items-center gap-5">

            <a
              href="mailto:vishwaparmar1309@gmail.com"
              className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
            >
              <FaEnvelope size={18} />
            </a>

            <a
              href="https://linkedin.com/in/work-vishwa"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://github.com/Vishwa13-dot"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;