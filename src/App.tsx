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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;