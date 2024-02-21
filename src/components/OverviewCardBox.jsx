const OverviewCardBox = ({ title, icon, number, state, stateNum }) => {
  return (
    <div className="container w-full h-[150px]  md:w-full bg-transparent card-hover">
      <div className="1 flex justify-around items-center pt-8 -mx-3">
        <p className="font-normal text-xl">{title}</p>
        <img
          src={icon}
          alt={`${title} image`}
          className="object-contain w-6 h-6"
        />
      </div>
      <div className="2 flex justify-around items-center pt-7 -mx-3">
        <h1 className="font-bold text-4xl pl-0">{number}</h1>
        <div className="flex items-center gap-2">
          <img src={state} alt={title} className="object-contain w-3 h-3" />
          <p>{stateNum}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCardBox;
