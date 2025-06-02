import React, { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const containerStyle = {
    padding: "2rem",
    borderRadius: "10px",
    maxWidth: "400px",
    margin: "2rem auto",
    textAlign: "center",
    backgroundColor: darkMode ? "#1a1a1a" : "#f9f9f9",
    color: darkMode ? "#f9f9f9" : "#1a1a1a",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  const buttonStyle = {
    marginBottom: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#6366f1",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={toggleTheme}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
      <div>
        <p>
          This is a simple {darkMode ? "dark" : "light"} theme container using inline styles in React.
        </p>
      </div>
    </div>
  );
}

export default ThemeToggle;
