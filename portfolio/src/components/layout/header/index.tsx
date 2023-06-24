import React from "react";
import BallCanvas from "../../canvas";


const Header: React.FC = () => {
 
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-14">
          <div className="w-28 h-28" key={0}>
            <BallCanvas />
          </div>
      </div>
  );
};

export default Header;
