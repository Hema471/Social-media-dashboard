import SocialCardBox from "./SocialCardBox";

const Header = () => {
  return (
    <section className="container bg-[#ddd] p-5">
      <div className="1 flex      flex-col md:flex-row  md:justify-between">
        <div className="1.1 flex  flex-col  md:flex-col">
          <h1>Social Media Dashboard</h1>
          <h3>Total Followers: 23.004</h3>
        </div>
        <div className="1.2 flex    justify-between md:items-center">
          <h3 className="md:px-5">Dark Mode</h3>
          <input type="checkbox" />
        </div>
      </div>
      <div>
        <SocialCardBox />
      </div>
    </section>
  );
};

export default Header;
