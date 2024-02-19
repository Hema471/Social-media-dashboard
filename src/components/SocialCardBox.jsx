const SocialCardBox = ({
  name,
  icon,
  followers,
  state,
  todayNum,
  subscribers,
  borderTop,
}) => {
  return (
    // ${borderTop}
    <div
      className={`container max-w-full max-h-full w-[300px] h-[275px] card-hover border-t-4 rounded-m d relative  top-before before:${borderTop} overflow-none`}
    >
      <div className=" flex-col element-centered gap-5 p-10">
        <div className="flex gap-3">
          <img src={icon} alt="img" className="object-contain w-6 h-6" />
          <div className="">{name}</div>
        </div>
        <h1 className="font-bold text-6xl">
          {followers ? followers : subscribers}
        </h1>
        <p className="uppercase text-sm tracking-[5px]">followers</p>
        <div className="flex gap-2 items-center">
          <img src={state} alt="img" className="object-contain w-5 h-5" />
          <div className=""> {todayNum} Today</div>
        </div>
      </div>
    </div>
  );
};

export default SocialCardBox;
