const SocialCardBox = ({
  name,
  icon,
  followers,
  state,
  todayNum,
  subscribers,
  textColor,
  borderTop,
}) => {
  return (
    <div
      className={`container  bg-bg  dark:text-white max-w-full max-h-full w-[320px] h-[265px] rounded-md border-t-4 `}
      style={{ borderTopColor: borderTop }}
    >
      <div className="flex-col element-center dark:bg-darkbg-card card-hover gap-5 p-10">
        <div className="flex gap-3">
          <img src={icon} alt="img" className="object-contain w-6 h-6" />
          <div>{name}</div>
        </div>
        <h1 className="font-bold text-6xl">
          {followers ? followers : subscribers}
        </h1>
        <p className="uppercase text-sm tracking-[5px] text-[#63687E] dark:text-[#959393]">
          followers
        </p>
        <div className="flex gap-2 items-center">
          <img src={state} alt="img" className="object-contain w-5 h-5" />
          <div className={`font-bold ${textColor}`}>{todayNum} Today</div>
        </div>
      </div>
    </div>
  );
};

export default SocialCardBox;
