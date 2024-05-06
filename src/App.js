import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import CalculatorPage from "./pages/CalculatorPage/CalculatorPage";
import SavingsTips from "./components/SavingsTips/SavingsTips";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/tips" element={<SavingsTips />} />
        <Route path="*"  element={<Navigate to="/" />} />
        {/* <Redirect to="/" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
