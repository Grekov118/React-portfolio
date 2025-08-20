// import { useEffect, useState } from "react";
// import "./ThemeToggle.css";
// import { FaSun, FaMoon } from "react-icons/fa";

// function ThemeToggle() {
//   const [theme, setTheme] = useState(
//     () => localStorage.getItem("saved-theme") || "light"
//   );

//   useEffect(() => {
//     document.body.classList.toggle("dark-theme", theme === "dark");
//     localStorage.setItem("saved-theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <div className="them-btn" onClick={toggleTheme}>
//       {theme === "light" ? <FaMoon /> : <FaSun />}
//     </div>
//   );
// }

// export default ThemeToggle;

import { useEffect, useState } from "react";
import "./ThemeToggle.css";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("saved-theme");
    if (saved) return saved;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
    localStorage.setItem("saved-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="them-btn" onClick={toggleTheme}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </div>
  );
}

export default ThemeToggle;
