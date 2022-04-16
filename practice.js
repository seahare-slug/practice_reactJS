const root = document.getElementById("root");

const Btn = ({ text, size }) => {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        fontSize: size,
      }}
    >
      {text}
    </button>
  );
};

const ClickedButton = () => {
  const [value, setValue] = React.useState("mark");
  const countUp2 = () => {
    setValue(value + "!");
  };
  return (
    <div>
      <h3>Total clicks: {value}</h3>
      <h3>Total clicks: {console.log("rere")}</h3>
      <button onClick={countUp2}>Click Me!</button>
    </div>
  );
};

const Container = () => {
  return (
    <div>
      <ClickedButton />
      <ClickedButton />
      <MinutesToHour />
      <Btn text={"Btn1"} size={14} />
      <Btn text={"Btn2"} size={18} />
      <Btn text={"Btn3"} size={24} />
    </div>
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
  ReactDOM.render(<Container />, root);
};

render();
