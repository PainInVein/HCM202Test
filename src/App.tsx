import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { TimelinePage } from "./Pages/TimelinePage";
import { DetailPage } from "./Pages/DetailPage";
import { AnimatePresence } from "motion/react";
import "./index.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<TimelinePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </AnimatePresence>
  );
}

import { ScrollToTop } from "./Components/ScrollToTop";
import { PresentationProvider } from "./Contexts/PresentationContext";
import { PresentationControls } from "./Components/PresentationControls";



import { ReactLenis } from "lenis/react";

function App() {
  return (
    <ReactLenis root options={{ duration: 2.2, smoothWheel: true, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
      <Router>
        <PresentationProvider>
          <ScrollToTop />
          <AnimatedRoutes />
          <PresentationControls />
        </PresentationProvider>
      </Router>
    </ReactLenis>
  );
}

export default App;
