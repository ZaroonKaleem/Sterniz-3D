// import { BrowserRouter } from "react-router-dom";

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
// } from "./components";
// import Cleaning from "./components/Cleaning";
// import Facility from "./components/Facility";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="relative z-20 bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//           <StarsCanvas />
//         </div>
//         <div className="relative z-0">
//           <About />
//           <StarsCanvas />
//         </div>
//         <div className="relative z-0">
//           <Experience />
//           <Cleaning />
//           <Facility />
//           <StarsCanvas />
//         </div>
//         <div className="relative z-0">
//           {/* <Tech /> */}
//           {/* <Works /> */}
//           <StarsCanvas />
//         </div>
//         <div className="relative z-0">
//           {/* <Feedbacks /> */}
//           <StarsCanvas />
//         </div>
//         <div className="relative z-0">
//           <Contact />
//           <StarsCanvas />
//         </div>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  Software,
} from "./components";
import Cleaning from "./components/Cleaning";
import Facility from "./components/Facility";
import Security from "./components/Security"; // Import the SecurityServices component
import CleaningDetailed from "./components/CleaningDetailed";
import Achivements from "./components/Achivements";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar /> {/* Navbar should be outside Routes to appear on all pages */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <div className="relative z-20 bg-no-repeat bg-center">
                  <Hero />
                  <StarsCanvas />
                </div>
                <div className="relative z-0">
                  <About />
                  <StarsCanvas />
                </div>
                <div className="relative z-0">
                  <Experience />
                  <Cleaning />
                  {/* <Facility /> */}
                  <StarsCanvas />
                </div>
                <div className="relative z-0">
                  {/* <Tech /> */}
                  {/* <Works /> */}
                  <Achivements />
                  <StarsCanvas />
                </div>
                <div className="relative z-0">
                  {/* <Feedbacks /> */}
                  <StarsCanvas />
                </div>
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
                {/* <Footer /> */}
              </>
            }
          />

          {/* Security Services Route */}
          <Route path="/security-services" element={<Security />} />
          <Route path="/cleaning-services" element={<CleaningDetailed />} />
          <Route path="/software-solutions" element={<Software />} />
          {/* Add more routes as needed */}
        </Routes>
            <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;