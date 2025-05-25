import React from "react";
import compono from "../../assets/compono.png";

const ComponoPage: React.FC = () => {
  return (
    <div className="blue-gradient w-screen h-screen overflow-hidden relative">
      <div className="flex justify-center items-center min-h-screen">
        <div className="relative w-[600px] h-[600px]">
          <img
            src={compono}
            className="w-full h-full object-contain animate-float z-10 relative [filter:drop-shadow(0_0_40px_rgba(166,101,63,0.6))]"
            alt="compono"
          />
        </div>
      </div>
    </div>
  );
};

export default ComponoPage;
