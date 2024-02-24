import React from "react";
import Home from "./pages/Home";
import DarkModeToggle from "./components/DarkModeToggle";
import Test from "./components/Test";

const App = ({}) => {
  return (
    <div className={`${<Test /> && "dark"}`}>
      <div className="dark:bg-darkbg-dark">
        <Home />
      </div>
    </div>
  );
};

export default App;
