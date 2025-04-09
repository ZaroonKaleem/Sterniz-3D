 import { BrowserRouter, Routes, Route } from "react-router-dom";
  import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    Tech,
    Advertisment,
    Works,
    StarsCanvas,
    Footer,
    Software,
    Impressum,
  } from "./components";
  import BgVideo from "./assets/bg.mp4"
  import Cleaning from "./components/Cleaning";
  import Facility from "./components/Facility";
  import Security from "./components/Security"; // Import the SecurityServices component
  import CleaningDetailed from "./components/CleaningDetailed";
  import Achivements from "./components/Achivements";
  import Academy from "./components/Academy";
  import CourseDetail from "./components/CourseDetail";
  import { useLocation } from 'react-router-dom';
  import { useEffect } from "react";

  
  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative z-0 bg-primary">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src={BgVideo} type="video/mp4" />
        </video>

        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="relative z-20 bg-no-repeat bg-center">
                  <Hero />
                </div>
                <div className="relative z-0">
                  <About />
                </div>
                <div className="relative z-0">
                  <Advertisment />
                </div>
                <div className="relative z-0">
                  <Experience />
                  <Cleaning />
                </div>
                <div className="relative z-0">
                  <Achivements />
                </div>
                <div className="relative z-0">
                  <Contact />
                </div>
              </>
            }
          />

          <Route path="/impressum" element={<Impressum />} />
          <Route path="/security-services" element={<Security />} />
          <Route path="/cleaning-services" element={<CleaningDetailed />} />
          <Route path="/software-solutions" element={<Software />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;


  // import { BrowserRouter, Routes, Route } from "react-router-dom";
  // import {
  //   About,
  //   Contact,
  //   Experience,
  //   Feedbacks,
  //   Hero,
  //   Navbar,
  //   Tech,
  //   Works,
  //   StarsCanvas,
  //   Footer,
  //   Software,
  // } from "./components";
  // import Cleaning from "./components/Cleaning";
  // import Facility from "./components/Facility";
  // import Security from "./components/Security"; // Import the SecurityServices component
  // import CleaningDetailed from "./components/CleaningDetailed";
  // import Achivements from "./components/Achivements";
  // import Academy from "./components/Academy";
  // import CourseDetail from "./components/CourseDetail";
  // import { useLocation } from 'react-router-dom';
  // import { useEffect } from "react";

  
  // const ScrollToTop = () => {
  //   const { pathname } = useLocation();
  
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);
  
  //   return null;
  // };

  // const App = () => {
  //   return (
  //     <BrowserRouter>
  //     <ScrollToTop />
  //       <div className="relative z-0 bg-primary">
  //         <Navbar /> {/* Navbar should be outside Routes to appear on all pages */}
  //         <Routes>
  //           {/* Home Route */}
  //           <Route
  //             path="/"
  //             element={
  //               <>
  //                 <div className="relative z-20 bg-no-repeat bg-center">
  //                   <Hero />
  //                   <StarsCanvas />
  //                 </div>
  //                 <div className="relative z-0">
  //                   <About />
  //                   <StarsCanvas />
  //                 </div>
  //                 <div className="relative z-0">
  //                   <Experience />
  //                   <Cleaning />
  //                   {/* <Facility /> */}
  //                   <StarsCanvas />
  //                 </div>
  //                 <div className="relative z-0">
  //                   {/* <Tech /> */}
  //                   {/* <Works /> */}
  //                   <Achivements />
  //                   <StarsCanvas />
  //                 </div>
  //                 <div className="relative z-0">
  //                   {/* <Feedbacks /> */}
  //                   <StarsCanvas />
  //                 </div>
  //                 <div className="relative z-0">
  //                   <Contact />
  //                   <StarsCanvas />
  //                 </div>
  //                 {/* <Footer /> */}
  //               </>
  //             }
  //           />

  //           {/* Security Services Route */}
  //           <Route path="/security-services" element={<Security />} />
  //           <Route path="/cleaning-services" element={<CleaningDetailed />} />
  //           <Route path="/software-solutions" element={<Software />} />
  //           {/* Add more routes as needed */}
  //           {/* <Switch> */}
  //           <Route path="/academy" element={<Academy />} />
  //           <Route path="/course/:id" element={<CourseDetail />} />
  //     {/* </Switch> */}
  //         </Routes>
  //             <Footer />
  //       </div>
  //     </BrowserRouter>
  //   );
  // };

  // export default App;