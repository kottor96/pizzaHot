import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if(pathname!=="/"){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth', 
      });
    }
  }, [pathname]);

  return null;
}