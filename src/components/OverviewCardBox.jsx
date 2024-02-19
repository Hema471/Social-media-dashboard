const OverviewCardBox = ({ title, icon, number, state, stateNum }) => {
  return (
    <div className="container   w-[250px] h-[150px] bg-yellow-500">
      <div className="1 flex justify-around items-center pt-8">
        <p>{title}</p>
        <img
          src={icon}
          alt={`${title} image`}
          className="object-contain w-5 h-5 "
        />
      </div>
      <div className="2 flex justify-around items-center pt-7">
        <h1 className="font-bold text-3xl pl-0">{number}</h1>
        <img src={state} alt={title} className="object-contain w-5 h-5" />
        {/* <p className="bg-green-500">{stateNum}</p> */}
      </div>
    </div>
  );
};

export default OverviewCardBox;
