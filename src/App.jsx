import React from "react";
import Home from "./pages/Home";
import DarkModeToggle from "./components/DarkModeToggle";

const App = ({ darkTrue }) => {
  return (
    <div className={`${darkTrue && "dark"}`}>
      <div className="dark:bg-darkbg-dark">
        <Home />
      </div>
    </div>
  );
};

export default App;
