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
      id: 1,
      title: "Page Views",
      icon: facebookIcon,
      number: 87,
      state: upIcon,
      stateNum: "3%",
      textColor: "text-[#1DB489]",
    },
    {
      id: 2,
      title: "Likes",
      icon: facebookIcon,
      number: 52,
      state: `${downIcon} `,
      stateNum: "2%",
      textColor: "text-[#DC414C]",
    },
    {
      id: 3,
      title: "Likes",
      icon: instagramIcon,
      number: 5462,
      state: `${upIcon}`,
      stateNum: "2257%",
      textColor: "text-[#1DB489]",
    },
    {
      id: 4,
      title: "Profile Views",
      icon: instagramIcon,
      number: "52K",
      state: `${upIcon} `,
      stateNum: "1375%",
      textColor: "text-[#1DB489]",
    },
    {
      id: 5,
      title: "Retweets",
      icon: twitterIcon,
      number: 117,
      state: `${upIcon} `,
      stateNum: "303%",
      textColor: "text-[#1DB489]",
    },
    {
      id: 6,
      title: "Likes",
      icon: twitterIcon,
      number: 507,
      state: `${upIcon} `,
      stateNum: "553%",
      textColor: "text-[#1DB489]",
    },
    {
      id: 7,
      title: "Likes",
      icon: youtubeIcon,
      number: 107,
      state: `${downIcon}`,
      stateNum: "3%",
      textColor: "text-[#DC414C]",
    },
    {
      id: 8,
      title: "Total Views",
      icon: youtubeIcon,
      number: 1407,
      state: `${downIcon} `,
      stateNum: "12%",
      textColor: "text-[#DC414C]",
    },
  ]);
  return (
    <section className="container  mt-[1100px] md:mt-[200px]">
      <p className="text-2xl px-9 font-bold text-[#63687E] dark:text-bg">
        Overview - Today
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 px-8  pb-10">
        {cardData.map((data) => (
          <OverviewCardBox
            key={data.id}
            title={data.title}
            icon={data.icon}
            number={data.number}
            state={data.state}
            stateNum={data.stateNum}
            textColor={data.textColor}
          />
        ))}
      </div>
    </section>
  );
};

export default OverviewCard;
