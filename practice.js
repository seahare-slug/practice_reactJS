const root = document.getElementById("root");

const App = () => {
  return (
    <div id="wrap">
      <header>
        <NavBar />
      </header>
      <aside>
        <Content content={"content1"} />
        <Content content={"content2"} />
        <Content content={"content3"} />
      </aside>
      <section>
        <ClickedButton />
        <ClickedButton />
        <MinutesToHour />
      </section>
      <footer>footer</footer>
    </div>
  );
};

const NavBar = () => {
  return <div>NAV-BAR</div>;
};

const Content = ({ content }) => {
  return <div className="content">{content}</div>;
};

const ClickedButton = () => {
  const [value, setValue] = React.useState([0, 1, 2]);
  const countUp = () => {
    let arr1 = [...value];
    arr1.push("!");
    setValue(arr1);
  };
  return (
    <>
      <h3>Total clicks: {value}</h3>
      <h3>{console.log("rere")}</h3>
      <button onClick={countUp}>Click Me!</button>
    </>
  );
};

const MinutesToHour = () => {
  const [minutes, setMinutes] = React.useState("");
  const detectMinutesChange = (event) => {
    setMinutes(event.target.value);
  };

  const [hour, setHour] = React.useState("");
  const detectHourChange = (event) => {
    setHour(event.target.value);
  };

  const [flipped, setFlip] = React.useState(false);
  const onFilp = () => {
    setFlip((current) => !current);
  };
  return (
    <div>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={flipped ? hour * 60 : minutes}
        id="minutes"
        placeholder="Minutes"
        type="number"
        onChange={detectMinutesChange}
        disabled={flipped}
      ></input>
      <label htmlFor="hours">hours</label>
      <input
        value={flipped ? hour : minutes / 60}
        id="hours"
        placeholder="Hours"
        type="number"
        onChange={detectHourChange}
        disabled={!flipped}
      ></input>
      <button onClick={onFilp}>FLIP</button>
    </div>
  );
};

const render = () => {
  ReactDOM.render(<App />, root);
};

render();
