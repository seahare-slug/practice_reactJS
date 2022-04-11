let counter = 0;
const root = document.getElementById("root");

render();

const countUp = () => {
  counter += 1;
  render();
};

const Container = () => {
  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button
        style={{
          backgroundColor: "tomato",
        }}
        onClick={countUp}
      >
        Click Me!
      </button>
    </div>
  );
};

const render = () => {
  ReactDOM.render(<Container />, root);
};
