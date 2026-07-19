// import {
//     FaBell,
//     FaSearch,
//     FaUserCircle,
// } from "react-icons/fa";

// function Topbar() {

//     const today = new Date().toLocaleDateString("en-IN", {
//         weekday: "long",
//         day: "numeric",
//         month: "long",
//         year: "numeric",
//     });

//     return (

//         <header className="h-24 bg-slate-900 border-b border-slate-800 px-8 flex items-center justify-between">

//             {/* Left */}

//             <div>

//                 <h1 className="text-3xl font-bold text-white">
//                     Welcome Back 👋
//                 </h1>

//                 <p className="text-slate-400 mt-1">
//                     {today}
//                 </p>

//             </div>

//             {/* Right */}

//             <div className="flex items-center gap-6">

//                 {/* Search */}

//                 <div className="relative hidden lg:block">

//                     <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         className="
//                         w-80
//                         bg-slate-800
//                         border
//                         border-slate-700
//                         rounded-xl
//                         py-3
//                         pl-12
//                         pr-4
//                         outline-none
//                         focus:border-blue-500
//                         "
//                     />

//                 </div>

//                 {/* Notification */}

//                 <button
//                     className="
//                     w-12
//                     h-12
//                     rounded-xl
//                     bg-slate-800
//                     hover:bg-blue-600
//                     transition
//                     flex
//                     items-center
//                     justify-center
//                     text-xl
//                     "
//                 >

//                     <FaBell />

//                 </button>

//                 {/* Profile */}

//                 <div className="flex items-center gap-3">

//                     <FaUserCircle className="text-5xl text-blue-400" />

//                     <div className="hidden md:block">

//                         <h3 className="font-semibold">
//                             Vishwa Parmar
//                         </h3>

//                         <p className="text-slate-400 text-sm">
//                             Administrator
//                         </p>

//                     </div>

//                 </div>

//             </div>

//         </header>

//     );
// }

// export default Topbar;