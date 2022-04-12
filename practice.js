// let counter = 0;
const root = document.getElementById("root");

// const countUp = () => {
//   counter += 1;
//   render();
// };

const Container = () => {
  const [value, setValue] = React.useState("first");
  const countUp2 = () => {
    setValue(value + "!");
  };
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
      <h3>Total clicks: {value}</h3>
      <button onClick={countUp2}>Click Me!</button>
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

let render = () => {
  ReactDOM.render(<Container />, root);
};

render();
