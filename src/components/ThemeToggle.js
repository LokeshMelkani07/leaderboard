import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./slices/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";

// This is for the functionality of dark/light theme button
const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <button className="toggle-button" onClick={() => dispatch(toggleTheme())}>
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
