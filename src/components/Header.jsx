import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import upIcon from "../assets/icon-up.svg";
import downIcon from "../assets/icon-down.svg";
import SocialCardBox from "./SocialCardBox";
import { useEffect, useState } from "react";

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
      // borderTop: "linear-gradient(to right, #FDC468, #DF4996)",
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
  let [dark, setDark] = useState(false);
  useEffect(() => {
    return () => {
      setDark(localStorage.getItem("darkMode") ? true : false);
    };
  }, []);

  function handleChecked(event) {
    setDark(!dark);
    localStorage.setItem("darkMode", dark);
  }
  console.log(dark);
  if (dark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <div className="flex justify-center bg-bg dark:bg-darkbg h-[250px] relative">
      <section className="container p-10 absolute z-50 top-0">
        <div className="1 dark:text-bg flex flex-col md:flex-row md:justify-between md:items-center font-bold ">
          <div className="1.1 flex  flex-col  md:flex-col">
            <h1 className=" text-2xl">Social Media Dashboard</h1>
            <h3>Total Followers: 23.004</h3>
          </div>
          <div className="1.2 flex justify-between md:items-center">
            <h3 className="md:px-5">Dark Mode</h3>
            <input
              type="checkbox"
              defaultChecked={!dark}
              onChange={handleChecked}
            />
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
