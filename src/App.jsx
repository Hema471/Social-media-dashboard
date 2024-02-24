import React from "react";
import Home from "./pages/Home";

const App = ({ darkTrue }) => {
  return (
    <div className="dark:bg-darkbg-dark">
      <Home />
    </div>
  );
};

export default App;
