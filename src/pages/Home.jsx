import Resume from "../assets/Resume.pdf";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 md:pt-20 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        {/* Intro */}
        <p className="text-blue-400 text-lg mb-4 animate-fadeInUp">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] mb-6">
          <span className="text-white">Vishwa</span>{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Parmar
          </span>
        </h1>

        {/* Skills */}
        <p className="text-blue-400 font-medium text-lg md:text-xl mb-6 tracking-wide">
          AI • Machine Learning • Data Science • Python
        </p>

        {/* Role */}
        <h2 className="text-xl md:text-3xl text-slate-300 mb-6">
          Aspiring Software Developer & AI/ML Enthusiast
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
          Passionate about Artificial Intelligence, Machine Learning,
          Data Science, SQL, and Python Programming. Building smart and
          efficient solutions through technology, innovation, and
          continuous learning.
        </p>

        {/* Resume Button */}
        <div className="mt-10 flex justify-center">
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 hover:scale-110 shadow-lg shadow-blue-600/30"
          >
            Download Resume
          </a>
        </div>

        

      </div>
    </section>
  );
}

export default Home;