import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import upIcon from "../assets/icon-up.svg";
import downIcon from "../assets/icon-down.svg";
import { useState } from "react";
import OverviewCardBox from "./OverviewCardBox";
const OverviewCard = () => {
  const [cardData, setCardData] = useState([
    {
      title: "Page Views",
      icon: facebookIcon,
      number: 87,
      state: upIcon,
      stateNum: "3%",
    },
    {
      title: "Likes",
      icon: facebookIcon,
      number: 52,
      state: `${downIcon} `,
      stateNum: "2%",
    },
    {
      title: "Likes",
      icon: instagramIcon,
      number: 5462,
      state: `${upIcon}`,
      stateNum: "2257%",
    },
    {
      title: "Profile Views",
      icon: instagramIcon,
      number: "52K",
      state: `${upIcon} `,
      stateNum: "1375%",
    },
    {
      title: "Retweets",
      icon: twitterIcon,
      number: 117,
      state: `${upIcon} `,
      stateNum: "303%",
    },
    {
      title: "Likes",
      icon: twitterIcon,
      number: 507,
      state: `${upIcon} `,
      stateNum: "553%",
    },
    {
      title: "Likes",
      icon: youtubeIcon,
      number: 107,
      state: `${downIcon}`,
      stateNum: "3%",
    },
    {
      title: "Total Views",
      icon: youtubeIcon,
      number: 1407,
      state: `${downIcon} `,
      stateNum: "12%",
    },
  ]);
  return (
    <section className="container ">
      <p className="text-2xl">Overview - Today</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 px-8  pb-10">
        {cardData.map((data) => (
          <OverviewCardBox
            key={data.title}
            title={data.title}
            icon={data.icon}
            number={data.number}
            state={data.state}
            stateNum={data.stateNum}
          />
        ))}
      </div>
    </section>
  );
};

export default OverviewCard;