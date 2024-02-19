import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import upIcon from "../assets/icon-up.svg";
import downIcon from "../assets/icon-down.svg";
import { useState } from "react";
import SocialCardBox from "./SocialCardBox";
import { v4 as uuidv4 } from "uuid";

const Header = () => {
  const randomId = uuidv4();
  const [cardData, setCardData] = useState([
    {
      icon: facebookIcon,
      userName: "@Hema",
      followers: 1987,
      todayNum: 12,
      state: upIcon,
      borderTop: "bg-[#198FF5]",
    },
    {
      icon: twitterIcon,
      userName: "@Ali",
      followers: 1044,
      todayNum: 99,
      state: upIcon,
      borderTop: "bg-[#1CA0F2]",
    },
    {
      icon: instagramIcon,
      userName: "@Ahmed",
      followers: "11K",
      todayNum: 1099,
      state: upIcon,
      borderTop: "bg-gradient-to-r from-[#FDC468] to-[#DF4996]",
    },
    {
      icon: youtubeIcon,
      userName: "@Hassan",
      subscribers: 8239,
      todayNum: 144,
      state: downIcon,
      borderTop: "bg-[#C4032A]",
    },
  ]);
  return (
    <section className="container bg-[#ddd] p-10 ">
      <div className="1 flex flex-col md:flex-row  md:justify-between md:items-center font-bold">
        <div className="1.1 flex  flex-col  md:flex-col">
          <h1 className=" text-2xl">Social Media Dashboard</h1>
          <h3>Total Followers: 23.004</h3>
        </div>
        <div className="1.2 flex justify-between md:items-center">
          <h3 className="md:px-5">Dark Mode</h3>
          <label htmlFor="ch1"></label>
          <input type="checkbox" id="ch1" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5">
        {cardData.map((cardData) => (
          <SocialCardBox
            key={cardData.userName}
            name={cardData.userName}
            icon={cardData.icon}
            followers={cardData.followers}
            subscribers={cardData.subscribers}
            state={cardData.state}
            todayNum={cardData.todayNum}
            borderTop={cardData.borderTop}
          />
        ))}
      </div>
    </section>
  );
};

export default Header;
