import { useEffect, useState } from "react";

// https://medium.com/hypersphere-codes/detecting-system-theme-in-javascript-css-react-f6b961916d48
export const useThemeDetector = () => {
  const getCurrentTheme = () => 
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : undefined;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
  const mqListener = (e: { matches: boolean | ((prevState: boolean | undefined) => boolean); }) =>
    setIsDarkTheme(e.matches);
  
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mqListener);
    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);
  return isDarkTheme;
}
