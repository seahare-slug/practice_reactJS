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
  const detectChange = (event) => {
    setMinutes(event.target.value);
  };

  return (
    <div>
      <h3>Total clicks: {value}</h3>
      <button onClick={countUp2}>Click Me!</button>
      <label htmlFor="minutes">Minutes</label>
      <input
        id="minutes"
        placeholder="Minutes"
        type="number"
        onChange={detectChange}
      ></input>
      <label htmlFor="hours">hours</label>
      <input id="hours" placeholder="Hours" type="number"></input>
      <h3>You input {minutes}</h3>
    </div>
  );
};

let render = () => {
  ReactDOM.render(<Container />, root);
};

render();
