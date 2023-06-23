import React from "react";
import BallCanvas from "../../canvas";


const Header: React.FC = () => {
 
  return (
    <div className="headline">
      <div className="w-28 h-28">
          <BallCanvas />
      </div>
    </div>
  );
};

export default Header;
