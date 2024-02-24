import React, { useState } from "react";
import Test from "./Test";

export const DarkModeToggle = () => {
  const handleChange = (e) => {
    // Pass the event object to the Test component
    <Test event={e.target.checked} />;
  };

  return (
    <>
      <label htmlFor="ch1"></label>
      <input type="checkbox" id="ch1" onChange={handleChange} />
    </>
  );
};

export default DarkModeToggle;
