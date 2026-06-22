import { motion } from "framer-motion";
import Resume from "../assets/Resume.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 md:pt-20 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-400 text-lg mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1]"
        >
          <span className="text-white">Vishwa</span>{" "}
          <span className="gradient-text">Parmar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-blue-400 font-medium mt-6 text-lg md:text-xl"
        >
          AI • Machine Learning • Data Science • Python
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-3xl text-slate-300 mt-6"
        >
          Aspiring Software Developer & AI/ML Enthusiast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl mx-auto text-slate-400 mt-6 text-lg md:text-xl leading-relaxed"
        >
          Passionate about Artificial Intelligence,
          Machine Learning, Data Science, SQL, and Python Programming.
          Building smart and efficient solutions through technology,
          innovation, and continuous learning.
        </motion.p>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-600/20"
          >
            Download Resume
          </a>
        </motion.div>

        
      </div>
    </section>
  );
}

export default Hero;