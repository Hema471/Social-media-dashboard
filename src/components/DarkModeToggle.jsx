import { useState } from "react";

const DarkModeToggle = () => {
  let [dark, setDark] = useState(false);

  function handleChecked(event) {
    setDark(event.target.checked);
  }
  console.log(dark);
  // export  dark;
  return (
    <>
      <label htmlFor="ch1"></label>
      <input
        type="checkbox"
        id="ch1"
        defaultChecked={dark}
        onClick={handleChecked}
      />
    </>
  );
};

export default DarkModeToggle;
