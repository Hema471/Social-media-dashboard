const Test = ({ event }) => {
  const [dark, setDark] = useState(false);
  setDark(event.target.checked);
  console.log(dark);
  return dark;
};

export default Test;
