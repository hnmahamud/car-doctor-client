import { useEffect } from "react";

const useScrollTop = (pathname) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollTop;
