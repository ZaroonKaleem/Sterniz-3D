//   import React, { useEffect, useState } from "react";
//   import { Link } from "react-router-dom";
  
//   import { styles } from "../styles";
//   import { navLinks } from "../constants";
//   import { logo, menu, close, SternizBg } from "../assets";
//   import resume from "/src/jeff_jiang.pdf";
  
//   const Navbar = () => {
//     const [active, setActive] = useState("");
//     const [toggle, setToggle] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const [showServicesDropdown, setShowServicesDropdown] = useState(false);
//     const [showFacilityDropdown, setShowFacilityDropdown] = useState(false);
  
//     useEffect(() => {
//       const handleScroll = () => {
//         const scrollTop = window.scrollY;
//         if (scrollTop > 0) {
//           setScrolled(true);
//         } else {
//           setScrolled(false);
//         }
//       };
  
//       window.addEventListener("scroll", handleScroll);
  
//       // Set initial state based on current scroll position
//       handleScroll();
  
//       return () => window.removeEventListener("scroll", handleScroll);
//     }, []);
  
//     return (
//       <nav
//         className={`${
//           styles.paddingX
//         } w-full flex items-center py-5 fixed top-0 z-50 ${
//           scrolled ? "backdrop-blur-sm" : "bg-transparent"
//         }`}
//       >
//         <div className="w-full pt-2 flex justify-between items-center max-w-7xl mx-auto">
//           <Link
//             to="/"
//             className="flex items-center"
//             onClick={() => {
//               setActive("");
//               window.scrollTo(0, 0);
//             }}
//           >
//             <img
//               src={SternizBg}
//               width="200px"
//               alt="logo"
//               className="w-28px h-24 object-contain"
//             />
//             <p className="text-white text-[18px] font-bold cursor-pointer flex">
//               {/* FullStack Developer &nbsp; */}
//               {/* <span className='sm:block hidden'> | Portfolio</span> */}
//             </p>
//           </Link>
  
//           {/* Desktop Navigation */}
//           <ul className="list-none hidden sm:flex flex-row items-center gap-10">
//             <a href={resume} download="jeff_jiang.pdf">
//               <button
//                 className={`${
//                   active === Link.title ? "abhishek" : "abhishek-btn"
//                 }   font-medium cursor-pointer border-[1px]`}
//                 onClick={() => setActive(Link.title)}
//               >
//                 {/* <span className="flex items-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
//                   {" "}
//                   <svg
//                     class="fill-current w-4 h-4 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
//                   </svg>{" "}
//                   Download CV
//                 </span> */}
//               </button>
//             </a>
  
//             {/* Services Dropdown */}
//             <li
//               className="relative group"
//               onMouseEnter={() => setShowServicesDropdown(true)}
//               onMouseLeave={() => setShowServicesDropdown(false)}
//             >
//               <span
//                 className={`${
//                   active === "Services" ? "text-white" : "text-secondary"
//                 } hover:text-white text-[18px] font-medium cursor-pointer`}
//               >
//                 Services
//               </span>
//               {showServicesDropdown && (
//                 <ul className="absolute top-full left-0 bg-primary p-2 text-md rounded-lg shadow-lg min-w-[200px]">
//                   {/* Software Solutions (Direct Link) */}
//                   <li className="text-white hover:bg-gray-800 px-4 py-2 rounded-lg">
//                     <Link to="/software-solutions">- Software Solutions</Link>
//                   </li>
  
//                   {/* Facility Management Dropdown */}
//                   <li
//                     className="relative"
//                     onMouseEnter={() => setShowFacilityDropdown(true)}
//                     onMouseLeave={() => setShowFacilityDropdown(false)}
//                   >
//                     <span className="text-white hover:bg-gray-800 pt-2 px-4 py-2 text-md rounded-lg cursor-pointer whitespace-nowrap">
//  - Facility Management
// </span>

//                     {showFacilityDropdown && (
//                       <ul className="absolute top-0 left-full bg-primary p-2 rounded-lg shadow-lg ml-2 min-w-[200px]">
//                         <li className="text-white text-sm hover:bg-gray-800 px-4 py-2 rounded-lg">
//                           <Link to="/cleaning-services">- Cleaning Services</Link>
//                         </li>
//                         <li className="text-white text-sm hover:bg-gray-800 px-4 py-2 rounded-lg">
//                           <Link to="/security-services">- Security Services</Link>
//                         </li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               )}
//             </li>
  
//             {/* Other Nav Links */}
//             {navLinks.map((nav) => (
//               <li
//                 key={nav.id}
//                 className={`${
//                   active === nav.title ? "text-white" : "text-secondary"
//                 } hover:text-white text-[18px] font-medium cursor-pointer`}
//                 onClick={() => setActive(nav.title)}
//               >
//                 <a href={`/#${nav.id}`}>{nav.title}</a>
//               </li>
//             ))}
//           </ul>
  
//           {/* Mobile Navigation */}
//           <div className="sm:hidden flex flex-1 justify-end items-center">
//             <img
//               src={toggle ? close : menu}
//               alt="menu"
//               className="w-[28px] h-[28px] object-contain"
//               onClick={() => setToggle(!toggle)}
//             />
  
//             <div
//               className={`${
//                 !toggle ? "hidden" : "flex"
//               } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//             >
//               <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
//                 <a href={resume} download="jeff_jiang.pdf">
//                   <button
//                     className={`${
//                       active === Link.title ? "abhishek" : "abhishek-btn"
//                     }   font-medium cursor-pointer border-[1px]`}
//                     onClick={() => setActive(Link.title)}
//                   >
//                     {/* <span className="flex items-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
//                       {" "}
//                       <svg
//                         class="fill-current w-4 h-4 mr-2"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
//                       </svg>{" "}
//                       Download CV
//                     </span> */}
//                   </button>
//                 </a>
  
//                 {/* Mobile Dropdown for Services */}
//                 <li
//                   className="font-poppins font-medium cursor-pointer text-[16px] text-secondary"
//                   onClick={() => setShowServicesDropdown(!showServicesDropdown)}
//                 >
//                   Services
//                   {showServicesDropdown && (
//                     <ul className="pl-4 mt-2 space-y-2">
//                       {/* Software Solutions (Direct Link) */}
//                       <li className="text-white hover:bg-gray-800 px-2 py-1 rounded-lg">
//                         <Link to="/software-solutions">Software Solutions</Link>
//                       </li>
  
//                       {/* Facility Management Dropdown */}
//                       <li
//                         className="text-white hover:bg-gray-800 px-2 py-1 rounded-lg"
//                         onClick={() => setShowFacilityDropdown(!showFacilityDropdown)}
//                       >
//                         Facility Management
//                         {showFacilityDropdown && (
//                           <ul className="pl-4 mt-2 space-y-2">
//                             <li className="text-white hover:bg-gray-800 px-2 py-1 rounded-lg">
//                               <Link to="/cleaning-services">Cleaning Services</Link>
//                             </li>
//                             <li className="text-white hover:bg-gray-800 px-2 py-1 rounded-lg">
//                               <Link to="/security-services">Security Services</Link>
//                             </li>
//                           </ul>
//                         )}
//                       </li>
//                     </ul>
//                   )}
//                 </li>
  
//                 {/* Other Mobile Nav Links */}
//                 {navLinks.map((nav) => (
//                   <li
//                     key={nav.id}
//                     className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                       active === nav.title ? "text-white" : "text-secondary"
//                     }`}
//                     onClick={() => {
//                       setToggle(!toggle);
//                       setActive(nav.title);
//                     }}
//                   >
//                     <a href={`#${nav.id}`}>{nav.title}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   };
  
//   export default Navbar;


import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, SternizBg } from "../assets";
import resume from "/src/jeff_jiang.pdf";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showFacilityDropdown, setShowFacilityDropdown] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state based on current scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (path) => {
    if (location.pathname === "/") {
      // If already on the home page, scroll to the section
      const sectionId = path.split("#")[1];
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to the home page first
      navigate(path);
    }
  };

  // const handleLinkClick = (path) => {
  //   navigate(path); // Navigate to the page
  //   window.scrollTo({ top: 0, behavior: "smooth" }); // Ensure it scrolls to top
  // };
  

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-50 ${
        scrolled ? "backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full pt-2 flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={SternizBg}
            width="200px"
            alt="logo"
            className="w-28px h-24 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {/* FullStack Developer &nbsp; */}
            {/* <span className='sm:block hidden'> | Portfolio</span> */}
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row items-center gap-10">
          <a href={resume} download="jeff_jiang.pdf">
            <button
              className={`${
                active === Link.title ? "abhishek" : "abhishek-btn"
              }   font-medium cursor-pointer border-[1px]`}
              onClick={() => setActive(Link.title)}
            >
              {/* <span className="flex items-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                {" "}
                <svg
                  class="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>{" "}
                Download CV
              </span> */}
            </button>
          </a>

          {/* Services Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <span
              className={`${
                active === "Services" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              Services
            </span>
            {showServicesDropdown && (
              <ul className="absolute top-full left-0 bg-primary p-2 text-md rounded-lg shadow-lg min-w-[200px]">
                {/* Software Solutions (Direct Link) */}
                <li className="text-white hover:bg-gray-800 px-4 py-2 rounded-lg">
                  <Link to="/software-solutions">- Software Solutions</Link>
                </li>

                {/* Facility Management Dropdown */}
                <li
                  className="relative"
                  onMouseEnter={() => setShowFacilityDropdown(true)}
                  onMouseLeave={() => setShowFacilityDropdown(false)}
                >
                  <span className="text-white hover:bg-gray-800 pt-2 px-4 py-2 text-md rounded-lg cursor-pointer whitespace-nowrap">
                    - Facility Management
                  </span>

                  {showFacilityDropdown && (
                    <ul className="absolute top-0 left-full bg-primary p-2 rounded-lg shadow-lg ml-2 min-w-[200px]">
                      <li className="text-white text-sm hover:bg-gray-800 px-4 py-2 rounded-lg">
                        <Link to="/cleaning-services">- Cleaning Services</Link>
                      </li>
                      <li className="text-white text-sm hover:bg-gray-800 px-4 py-2 rounded-lg">
                        <Link to="/security-services">- Security Services</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Other Nav Links */}
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(nav.title);
                handleLinkClick(nav.path);
              }}
            >
              <Link to={nav.path}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <a href={resume} download="jeff_jiang.pdf">
                <button
                  className={`${
                    active === Link.title ? "abhishek" : "abhishek-btn"
                  }   font-medium cursor-pointer border-[1px]`}
                  onClick={() => setActive(Link.title)}
                >
                  {/* <span className="flex items-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                    {" "}
                    <svg
                      class="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>{" "}
                    Download CV
                  </span> */}
                </button>
              </a>

              {/* Mobile Dropdown for Services */}
              <li
                className="font-poppins font-medium cursor-pointer text-[16px] text-secondary"
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
              >
                Services
                {showServicesDropdown && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {/* Software Solutions (Direct Link) */}
                    <li className="text-white hover:bg-gray-800 px-2 py-1 rounded-lg">
                      <Link to="/software-solutions">Software Solutions</Link>
                    </li>

                    {/* Facility Management Dropdown */}
                    <li
                      className="text-white hover:bg-gray-800 px-2 py-1 rounded-lg"
                      onClick={() => setShowFacilityDropdown(!showFacilityDropdown)}
                    >
                      Facility Management
                      {showFacilityDropdown && (
                        <ul className="pl-4 mt-2 space-y-2">
                          <li className="text-white hover:bg-gray-800 px-2 py-1 rounded-lg">
                            <Link to="/cleaning-services">Cleaning Services</Link>
                          </li>
                          <li className="text-white hover:bg-gray-800 px-2 py-1 rounded-lg">
                            <Link to="/security-services">Security Services</Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              {/* Other Mobile Nav Links */}
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                    handleLinkClick(nav.path);
                  }}
                >
                  <Link to={nav.path}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;