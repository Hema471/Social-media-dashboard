import React from "react";
import Home from "./pages/Home";


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
