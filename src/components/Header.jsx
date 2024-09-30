import React, { useEffect, useState } from "react";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import upIcon from "../assets/icon-up.svg";
import downIcon from "../assets/icon-down.svg";
import SocialCardBox from "./SocialCardBox";

const Header = () => {
  const [cardData, setCardData] = useState([
    {
      icon: facebookIcon,
      userName: "@Hema",
      followers: 1987,
      todayNum: 12,
      state: upIcon,
      textColor: "text-[#1DB489]",
      borderTop: "#198FF5",
    },
    {
      icon: twitterIcon,
      userName: "@Ali",
      followers: 1044,
      todayNum: 99,
      state: upIcon,
      textColor: "text-[#1DB489]",
      borderTop: "#1CA0F2",
    },
    {
      icon: instagramIcon,
      userName: "@Ahmed",
      followers: "11K",
      todayNum: 1099,
      state: upIcon,
      textColor: "text-[#1DB489]",
      borderTop: "#E6A47E",
    },
    {
      icon: youtubeIcon,
      userName: "@Hassan",
      subscribers: 8239,
      todayNum: 144,
      state: downIcon,
      textColor: "text-[#DC414C]",
      borderTop: "#C4032A",
    },
  ]);

  const [dark, setDark] = useState(() => {
    // Initialize state from local storage
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    // Apply 'dark' class to the body when 'dark' state changes
    if (dark) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
    document.body.classList.toggle("dark");

    // Save 'dark' state to local storage
    localStorage.setItem("darkMode", dark);
  }, [dark]); // Run effect whenever 'dark' state changes

  function handleChecked() {
    // Toggle 'dark' state
    setDark((prevDark) => !prevDark);
  }
  return (
    <div className="flex justify-center h-[250px] relative">
      <section className="container p-10 absolute z-50 top-0">
        <div className="1 dark:text-bg flex flex-col md:flex-row md:justify-between md:items-center font-bold ">
          <div className="1.1 flex  flex-col  md:flex-col">
            <h1 className=" text-2xl">Social Media Dashboard</h1>
            <h3>Total Followers: 23.004</h3>
          </div>

          <hr className="border-gray-500 my-5" />

          <div className="1.2 flex justify-between md:items-center">
            <h3 className="md:px-5">Dark Mode</h3>
            <div className="flex items-center space-x-2">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={dark}
                  onChange={handleChecked}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 transition-all duration-300"></div>
                <span className="absolute left-1 top-1 w-4 h-4 bg-white border border-gray-300 rounded-full transition-transform duration-300 peer-checked:translate-x-5 dark:border-gray-600"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5">
          {cardData.map((data) => (
            <SocialCardBox
              key={data.userName}
              name={data.userName}
              icon={data.icon}
              followers={data.followers}
              subscribers={data.subscribers}
              state={data.state}
              todayNum={data.todayNum}
              textColor={data.textColor}
              borderTop={data.borderTop}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Header;
