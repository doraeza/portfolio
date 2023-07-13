import { useRef } from "react";

const useScrollSection = () => {
    const homeRef = useRef<HTMLDivElement>(null);

    const onHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

    return {onHomeClick}

    }

export default useScrollSection