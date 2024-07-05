import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./i18n";
import LanguageSwitcher from "./components/LanguageSwitcher";
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="w-full h-[100vh]">
        <div
          className="
          w-full h-[50px] 
          flex justify-center items-center
          bg-[#e6deeb]
        "
        >
          <h1 className="text-[24px] font-bold text-center text-[#9191dd]">
            Task App
          </h1>
          <div className="absolute right-0">
            <LanguageSwitcher />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
