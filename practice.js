// let counter = 0;
const root = document.getElementById("root");

const countUp = () => {
  counter += 1;
  render();
};

const Container = () => {
  const [value, handler] = React.useState("first");
  const countUp2 = () => {
    handler(value + "!");
  };
  return (
    <div>
      <h3>Total clicks: {value}</h3>
      <button
        style={{
          backgroundColor: "tomato",
        }}
        onClick={countUp2}
      >
        Click Me!
      </button>
    </div>
  );
};

let render = () => {
  ReactDOM.render(<Container />, root);
};

render();
