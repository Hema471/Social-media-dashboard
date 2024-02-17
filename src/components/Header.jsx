import SocialCardBox from "./SocialCardBox";

const Header = () => {
  return (
    <section className="container bg-red-500">
      <div>
        <h1>Social Media Dashboard</h1>
        <h3>Total Followers: 23.004</h3>
      </div>
      <div>
        <h3>Dark Mode</h3>
        <input type="checkbox" />
      </div>
      <div>
        <SocialCardBox />
      </div>
    </section>
  );
};

export default Header;
