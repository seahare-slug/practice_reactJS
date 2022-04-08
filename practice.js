const Button = () => {
  <button
    style={{
      backgroundColor: "tomato",
    }}
    onClick={() => console.log("IM")}
  >
    {" "}
    Clikc ME{" "}
  </button>;
};

const Container = () => {
  <div>
    <Button />
  </div>;
};
ReactDOM.render(<Container />, root);
