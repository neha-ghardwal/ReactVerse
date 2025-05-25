import React from "react";
import propora from "../../assets/mercury.png";

const ProporaPage: React.FC = () => {
  return (
    <div className="space-y-8 flex justify-center items-center min-h-screen">
      <div className="relative w-[600px] h-[600px]">
        <img
          src={propora}
          className="w-full h-full object-contain animate-float z-10 relative [filter:drop-shadow(0_0_40px_rgba(166,101,63,0.9))]"
          alt="propora"
        />
      </div>
    </div>
  );
};

export default ProporaPage;
