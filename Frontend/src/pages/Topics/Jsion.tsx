import React from "react";
import jsion from "../../assets/jsion.png";

const JsionPage: React.FC = () => {
  return (
    <div className="space-y-8 flex justify-center items-center min-h-screen">
      <div className="relative w-[600px] h-[600px]">
        <img
          src={jsion}
          className="w-full h-full object-contain animate-float z-10 relative [filter:drop-shadow(0_0_40px_rgba(168,85,247,0.6))]"
          alt="Jsion"
        />
      </div>
    </div>
  );
};

export default JsionPage;
