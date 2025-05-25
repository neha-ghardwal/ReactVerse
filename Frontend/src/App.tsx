import React from "react";
import "./index.css";
import Navbar from "./pages/Navbar/Navbar";
import LandingPage from "./pages/Home/LandingPage";
import { StarsBackground } from "./components/ui/stars-background";
import { ShootingStars } from "./components/ui/shooting-stars";

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen relative">
      <Navbar />
      <LandingPage />

      {/* Background components */}
      <StarsBackground />
      <ShootingStars />
    </div>
  );
};

export default App;
