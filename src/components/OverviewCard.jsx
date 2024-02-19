import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import upIcon from "../assets/icon-up.svg";
import downIcon from "../assets/icon-down.svg";
import { useState } from "react";
const OverviewCard = () => {
  const [cardData, setCardData] = useState([
    {
      title: "Page Views",
      icon: facebookIcon,
      number: 87,
      state: `${upIcon} 3%`,
    },
    {
      title: "Likes",
      icon: facebookIcon,
      number: 52,
      state: `${downIcon} 2%`,
    },
    {
      title: "Likes",
      icon: instagramIcon,
      number: 5462,
      state: `${upIcon} 2257%`,
    },
    {
      title: "Profile Views",
      icon: instagramIcon,
      number: "52K",
      state: `${upIcon} 1375%`,
    },
    {
      title: "Retweets",
      icon: twitterIcon,
      number: 117,
      state: `${upIcon} 303%`,
    },
    {
      title: "Likes",
      icon: twitterIcon,
      number: 507,
      state: `${upIcon} 553%`,
    },
    {
      title: "Likes",
      icon: youtubeIcon,
      number: 107,
      state: `${downIcon} 19%`,
    },
    {
      title: "Total Views",
      icon: youtubeIcon,
      number: 1407,
      state: `${downIcon} 12%`,
    },
  ]);
  return (
    <section className="container mt-10">
      <p className="text-2xl">Overview - Today</p>
      <div></div>
    </section>
  );
};

export default OverviewCard;
