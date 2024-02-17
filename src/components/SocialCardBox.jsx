import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import upIcon from "../assets/icon-up.svg";
import downIcon from "../assets/icon-down.svg";
import { useState } from "react";

const SocialCardBox = () => {
  const [cardBox, setCardBox] = useState([
    {
      icon: facebookIcon,
      userName: "@Hema",
      followers: 1987,
      todayNum: 5,
      state: upIcon,
    },
    {
      icon: twitterIcon,
      userName: "@Ali",
      followers: 1044,
      todayNum: 5,
      state: upIcon,
    },
    {
      icon: instagramIcon,
      userName: "@Ahmed",
      followers: "11K",
      todayNum: 5,
      state: upIcon,
    },
    {
      icon: youtubeIcon,
      userName: "@Hassan",
      subscribers: 8239,
      todayNum: 5,
      state: downIcon,
    },
  ]);
  return (
    <div className="container max-w-full max-h-full w-[250px] h-[250px] rounded-md bg-green-500">
      <div className=" flex-col element-centered gap-10 p-5">
        <div className="flex">
          <img src={facebookIcon} alt="img" />
          <div className="bg-red-500"> hema</div>
        </div>
        <h1>9000</h1>
        <p>followers</p>
        <div className="flex">
          <img src={upIcon} alt="img" />
          <div className="bg-red-500">345 Today</div>
        </div>
      </div>
    </div>
  );
};

export default SocialCardBox;
