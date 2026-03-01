import { AnimatePresence } from "motion/react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import "./index.css";
import { ChatPage } from "./Pages/ChatPage";
import { DetailPage } from "./Pages/DetailPage";
import { MuseumPage } from "./Pages/Museum3D/Museum";
import { TimelinePage } from "./Pages/TimelinePage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<TimelinePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/museum" element={<MuseumPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </AnimatePresence>
  );
}

import { PresentationControls } from "./Components/PresentationControls";
import { ScrollToTop } from "./Components/ScrollToTop";
import { PresentationProvider } from "./Contexts/PresentationContext";



import { ReactLenis } from "lenis/react";

import { BackgroundMusic } from "./Components/BackgroundMusic";

function App() {
  return (
    <ReactLenis root options={{ duration: 2.2, smoothWheel: true, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
      <Router>
        <PresentationProvider>
          <BackgroundMusic />
          <ScrollToTop />
          <AnimatedRoutes />
          <PresentationControls />
        </PresentationProvider>
      </Router>
    </ReactLenis>
  );
}

export default App;
