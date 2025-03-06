import { BrowserRouter } from "react-router-dom";

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
} from "./components";
import Cleaning from "./components/Cleaning";
import Facility from "./components/Facility";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative z-20 bg-no-repeat bg-center">
          <Navbar />
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
          <Facility />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          {/* <Tech /> */}
          {/* <Works /> */}
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
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
