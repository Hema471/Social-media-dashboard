const OverviewCardBox = ({
  title,
  icon,
  number,
  state,
  stateNum,
  textColor,
}) => {
  return (
    <div className="container w-[300px] h-[150px] md:w-full bg-bg dark:text-bg dark:bg-darkbg-card card-hover">
      <div className="1 flex justify-around items-center pt-8  -mx-7 md:-mx-3">
        <p className="font-normal text-xl">{title}</p>
        <img
          src={icon}
          alt={`${title} image`}
          className="object-contain w-6 h-6"
        />
      </div>
      <div className="2 flex justify-around items-center pt-[20px] -mx-7 md:-mx-3">
        <h1 className="font-bold text-4xl pl-0">{number}</h1>
        <div className="flex items-center gap-2">
          <img src={state} alt={title} className="object-contain w-3 h-3" />
          <p className={`${textColor} font-bold`}>{stateNum}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCardBox;
