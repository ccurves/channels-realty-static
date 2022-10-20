import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Properties from "./pages/Properties";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Channerators from "./pages/Channerators";
// import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chanerators" element={<Channerators />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <ComingSoon /> */}
    </div>
  );
}

export default App;
