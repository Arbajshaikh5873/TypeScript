import "./App.css";
import MyButton from "./Components/MyButton";

function App() {
  return (
    <>
      <MyButton
        text="Click Me"
        onClick={() => {
          alert("Button Clicked!!");
        }}
      />
      <MyButton text="Click " />
    </>
  );
}

export default App;
