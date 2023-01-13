import { useCallback, useEffect, useState } from "react";

export function useScroll() {
  const [scroll, setScroll] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setIsScrolled(window.pageYOffset > 20);
    setScroll(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return { scroll, isScrolled };
}
