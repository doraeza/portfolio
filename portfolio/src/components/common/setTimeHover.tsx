import { useEffect, useState } from "react";

const SetTimeHover = () => {

    const [hovered, setHovered] = useState(false);
    
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);
    
    const action = () => {
      // action// 
    }
    
    useEffect(() => {
    
      const timer:any = hovered && setTimeout(action, 500);
      
      return () => clearTimeout(timer);
    
    
    } ,[hovered]) // hovered가 변할 때만 작동하도록
  
    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      
      </div>
    )
  }
  export default SetTimeHover