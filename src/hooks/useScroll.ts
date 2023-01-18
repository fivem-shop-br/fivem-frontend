import { useCallback, useEffect, useState } from "react";

export function useScroll() {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setIsScrolled(window.pageYOffset > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return { isScrolled };
}
