
// // import React, { useState, useEffect } from "react";
// // import { Menu, X } from "lucide-react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import colors from '../theme/colors'; // Import custom colors

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 10);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const navLinks = ["Courses", "Admission", "Top Performers", "Faculty", "Contact"];

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     show: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //         delayChildren: 0.3
// //       }
// //     }
// //   };

// //   const itemVariants = {
// //     hidden: { y: -20, opacity: 0 },
// //     show: { 
// //       y: 0, 
// //       opacity: 1,
// //       transition: {
// //         type: "spring",
// //         stiffness: 100
// //       }
// //     }
// //   };

// //   return (
// //     <motion.nav 
// //       initial={{ y: -100 }}
// //       animate={{ y: 0 }}
// //       transition={{ type: "spring", stiffness: 100 }}
// //       className={`fixed w-full z-50 ${scrolled ? `bg-[${colors.primary}]` : `bg-[${colors.secondary}]`} backdrop-blur-md transition-all duration-500 ease-in-out border-b border-gray-100/50`}
// //     >
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16 md:h-20">
// //           {/* Logo with animation */}
// //           <motion.div 
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             className="flex items-center"
// //           >
// //             <motion.span 
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.2 }}
// //               className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[${colors.gradientFrom}] to-[${colors.gradientTo}] bg-clip-text text-zinc-600"
// //             >
// //               RB Classes
// //             </motion.span>
// //           </motion.div>

// //           {/* Desktop Menu */}
// //           <motion.div 
// //             variants={containerVariants}
// //             initial="hidden"
// //             animate="show"
// //             className="hidden md:flex items-center space-x-1"
// //           >
// //             {navLinks.map((link, index) => (
// //               <motion.a
// //                 key={link}
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //                 variants={itemVariants}
// //                 href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
// //                 className="relative px-4 py-2 text-gray-600 hover:text-[${colors.primary}] transition-all duration-300 font-medium group"
// //               >
// //                 {link}
// //                 <motion.span 
// //                   className="absolute bottom-0 left-0 w-0 h-0.5 bg-[${colors.primary}] group-hover:w-full transition-all duration-300"
// //                   initial={{ width: 0 }}
// //                   whileHover={{ width: "100%" }}
// //                 />
// //               </motion.a>
// //             ))}
// //             <motion.button 
// //               variants={itemVariants}
// //               whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)" }}
// //               whileTap={{ scale: 0.98 }}
// //               className="ml-4 px-6 py-2 bg-gradient-to-r from-[${colors.gradientFrom}] to-[${colors.gradientTo}] text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
// //             >
// //               Login
// //             </motion.button>
// //           </motion.div>

// //           {/* Mobile Menu Button */}
// //           <motion.div 
// //             className="md:hidden flex items-center"
// //             whileHover={{ scale: 1.1 }}
// //             whileTap={{ scale: 0.9 }}
// //           >
// //             <button 
// //               onClick={() => setMenuOpen(!menuOpen)}
// //               className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
// //               aria-label="Toggle menu"
// //             >
// //               {menuOpen ? (
// //                 <X size={24} className="text-gray-400" />
// //               ) : (
// //                 <Menu size={24} className="text-gray-400" />
// //               )}
// //             </button>
// //           </motion.div>
// //         </div>

// //         {/* Mobile Dropdown with animation */}
// //         <AnimatePresence>
// //           {menuOpen && (
// //             <motion.div 
// //               initial={{ height: 0, opacity: 0 }}
// //               animate={{ height: "auto", opacity: 1 }}
// //               exit={{ height: 0, opacity: 0 }}
// //               transition={{ type: "spring", damping: 25 }}
// //               className="md:hidden bg-white/95 backdrop-blur-sm overflow-hidden"
// //             >
// //               <motion.div 
// //                 className="px-2 pt-2 pb-4 space-y-1"
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ delay: 0.2 }}
// //               >
// //                 {navLinks.map((link) => (
// //                   <motion.a
// //                     key={link}
// //                     whileHover={{ scale: 1.02 }}
// //                     whileTap={{ scale: 0.98 }}
// //                     href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
// //                     className="block px-4 py-3 text-gray-700 hover:text-[${colors.primary}] hover:bg-gray-50/80 rounded-lg transition-all duration-200 font-medium"
// //                     onClick={() => setMenuOpen(false)}
// //                   >
// //                     {link}
// //                   </motion.a>
// //                 ))}
// //                 <motion.button 
// //                   whileHover={{ scale: 1.02 }}
// //                   whileTap={{ scale: 0.98 }}
// //                   className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-[${colors.gradientFrom}] to-[${colors.gradientTo}] text-white rounded-lg font-medium transition-all duration-300 shadow-sm"
// //                 >
// //                   Login
// //                 </motion.button>
// //               </motion.div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </motion.nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import colors from '../theme/colors'; // Import custom colors

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = ["Courses", "Admission", "Top Performers", "Faculty", "Contact"];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: -20, opacity: 0 },
//     show: { 
//       y: 0, 
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   return (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 100 }}
//       className={`fixed w-full z-50 ${scrolled ? `bg-[${colors.primary}]` : `bg-[${colors.secondary}]`} backdrop-blur-md transition-all duration-500 ease-in-out border-b bg-[${colors.primary}] border-gray-100/50`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 md:h-20">
//           {/* Logo with animation */}
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center"
//           >
//             <motion.span 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-[${colors.gradientFrom}] to-[${colors.gradientTo}]] bg-clip-text text-[${colors.headingText}]`}
//             >
//               RB Classes
//             </motion.span>
//           </motion.div>

//           {/* Desktop Menu */}
//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             animate="show"
//             className="hidden md:flex items-center space-x-1"
//           >
//             {navLinks.map((link, index) => (
//               <motion.a
//                 key={link}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 variants={itemVariants}
//                 href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
//                 className={`relative px-4 py-2 text-[#ffffff] hover:text-[${colors.primary}] transition-all duration-300 font-medium group`}
//               >
//                 {link}
//                 <motion.span 
//                   className={`absolute bottom-0 left-0 w-0 h-0.5  group-hover:w-full transition-all duration-300`}
//                   initial={{ width: 0 }}
//                   whileHover={{ width: "100%" }}
//                 />
//               </motion.a>
//             ))}
//             {/* <motion.button 
//               variants={itemVariants}
//               whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)" }}
//               whileTap={{ scale: 0.98 }}
//               className={`ml-4 px-6 py-2 bg-gradient-to-r from-[${colors.gradientFrom}] to-[${colors.gradientTo}] text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg`}
//             >
//               Login
//             </motion.button> */}
//           </motion.div>

//           {/* Mobile Menu Button */}
//           <motion.div 
//             className="md:hidden flex items-center"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <button 
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
//               aria-label="Toggle menu"
//             >
//               {menuOpen ? (
//                 <X size={24} className="text-gray-400" />
//               ) : (
//                 <Menu size={24} className="text-gray-400" />
//               )}
//             </button>
//           </motion.div>
//         </div>

//         {/* Mobile Dropdown with animation */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div 
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ type: "spring", damping: 25 }}
//               className="md:hidden bg-white/95 backdrop-blur-sm overflow-hidden"
//             >
//               <motion.div 
//                 className="px-2 pt-2 pb-4 space-y-1"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 {navLinks.map((link) => (
//                   <motion.a
//                     key={link}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
//                     className={`block px-4 py-3 text-gray-700 hover:text-[${colors.primary}] hover:bg-gray-50/80 rounded-lg transition-all duration-200 font-medium`}
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {link}
//                   </motion.a>
//                 ))}
//                 {/* <motion.button 
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`w-full mt-2 px-4 py-3 bg-gradient-to-r from-[${colors.gradientFrom}] to-[${colors.gradientTo}] text-white rounded-lg font-medium transition-all duration-300 shadow-sm`}
//                 >
//                   Login
//                 </motion.button> */}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import colors from '../theme/colors'; // Import custom colors

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = ["Courses", "Admission", "Top Performers", "Faculty", "Contact"];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: -20, opacity: 0 },
//     show: { 
//       y: 0, 
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   return (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 100 }}
//       className={`fixed w-full z-50 ${scrolled ? `bg-[${colors.primary}]` : `bg-[${colors.secondary}]`} backdrop-blur-md transition-all duration-500 ease-in-out border-b bg-[${colors.primary}] border-gray-100/50`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 md:h-20">
//           {/* Logo with animation */}
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center space-x-2"
//           >
//             {/* Logo Image */}
//             <motion.img 
//               src="/logo.jpg" // Replace with your logo path
//               alt="Logo"
//               className="w-10 h-10 rounded-full"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             />
//             <motion.span 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className={`text-2xl md:text-3xl font-bold bg-gradient-to-r from-[${colors.gradientFrom}] to-[${colors.gradientTo}] bg-clip-text text-[${colors.headingText}]`}
//             >
//               RB Classes
//             </motion.span>
//           </motion.div>

//           {/* Desktop Menu */}
//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             animate="show"
//             className="hidden md:flex items-center space-x-1 text-wh"
//           >
//             {navLinks.map((link, index) => (
//               <motion.a
//                 key={link}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 variants={itemVariants}
//                 href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
//                 className={`relative px-4 py-2 text-[#ffffff] hover:text-[${colors.primary}] transition-all duration-300 font-medium group`}
//               >
//                 {link}
//                 <motion.span 
//                   className={`absolute bottom-0 left-0 w-0 h-0.5  group-hover:w-full transition-all duration-300`}
//                   initial={{ width: 0 }}
//                   whileHover={{ width: "100%" }}
//                 />
//               </motion.a>
//             ))}
//           </motion.div>

//           {/* Mobile Menu Button */}
//           <motion.div 
//             className="md:hidden flex items-center"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <button 
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
//               aria-label="Toggle menu"
//             >
//               {menuOpen ? (
//                 <X size={24} className="text-gray-400" />
//               ) : (
//                 <Menu size={24} className="text-gray-400" />
//               )}
//             </button>
//           </motion.div>
//         </div>

//         {/* Mobile Dropdown with animation */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div 
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ type: "spring", damping: 25 }}
//               className="md:hidden bg-white/95 backdrop-blur-sm overflow-hidden"
//             >
//               <motion.div 
//                 className="px-2 pt-2 pb-4 space-y-1"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 {navLinks.map((link) => (
//                   <motion.a
//                     key={link}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
//                     className={`block px-4 py-3 text-gray-700 hover:text-[${colors.primary}] hover:bg-gray-50/80 rounded-lg transition-all duration-200 font-medium`}
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {link}
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;


// components/Navbar.jsx
// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = ["Courses", "Admission", "Performers", "Faculty", "Contact"];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: -20, opacity: 0 },
//     show: { 
//       y: 0, 
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//   return (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 100 }}
//       className={`fixed w-full z-50 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-800'} transition-all duration-500 ease-in-out`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 md:h-20">
//           {/* Logo */}
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="flex items-center space-x-2"
//           >
//             <motion.img 
//               src="/logo.jpg"
//               alt="Logo"
//               className="w-10 h-10 rounded-full"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             />
//             <motion.span 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="text-2xl md:text-3xl font-bold text-white"
//             >
//               RB Classes
//             </motion.span>
//           </motion.div>

//           {/* Desktop Menu */}
//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             animate="show"
//             className="hidden md:flex items-center space-x-1"
//           >
//             {navLinks.map((link, index) => (
//               <motion.a
//                 key={link}
//                 whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
//                 whileTap={{ scale: 0.98 }}
//                 variants={itemVariants}
//                 href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
//                 className="relative px-4 py-2 text-white rounded-lg transition-all duration-300 font-medium"
//               >
//                 {link}
//                 <motion.span 
//                   className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
//                   initial={{ width: 0 }}
//                   whileHover={{ width: "100%" }}
//                 />
//               </motion.a>
//             ))}
//           </motion.div>

//           {/* Mobile Menu Button */}
//           <motion.div 
//             className="md:hidden flex items-center"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <button 
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="p-2 rounded-lg hover:bg-gray-700 transition-all duration-200"
//               aria-label="Toggle menu"
//             >
//               {menuOpen ? (
//                 <X size={24} className="text-white" />
//               ) : (
//                 <Menu size={24} className="text-white" />
//               )}
//             </button>
//           </motion.div>
//         </div>

//         {/* Mobile Dropdown */}
//         <AnimatePresence>
//           {menuOpen && (
//             <motion.div 
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ type: "spring", damping: 25 }}
//               className="md:hidden bg-gray-700 overflow-hidden"
//             >
//               <motion.div 
//                 className="px-2 pt-2 pb-4 space-y-1"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 {navLinks.map((link) => (
//                   <motion.a
//                     key={link}
//                     whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
//                     whileTap={{ scale: 0.98 }}
//                     href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
//                     className="block px-4 py-3 text-white hover:bg-gray-600 rounded-lg transition-all duration-200 font-medium"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {link}
//                   </motion.a>
//                 ))}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
   
    { name: "Facilities", id: "facilities" },
    { name: "Founder", id: "founder" },
    { name: "Faculty", id: "faculty" },
    { name: "Courses", id: "courses" },
    { name: "Results", id: "results" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Admission", id: "admission" },
    { name: "Contact", id: "contact" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 ${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-800'} transition-all duration-500 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo with Home Link */}
          <motion.a 
            href="#hero"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2"
          >
            <motion.img 
              src="/logo.jpg"
              alt="Logo"
              className="w-10 h-10 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-white"
            >
              RB Classes
            </motion.span>
          </motion.a>

          {/* Desktop Menu */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="hidden md:flex items-center space-x-1"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
                href={`#${link.id}`}
                className="relative px-3 py-2 text-white rounded-lg transition-all duration-300 font-medium text-sm"
              >
                {link.name}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden flex items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="md:hidden bg-gray-700 overflow-hidden"
            >
              <motion.div 
                className="px-2 pt-2 pb-4 space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                    href={`#${link.id}`}
                    className="block px-4 py-3 text-white hover:bg-gray-600 rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;