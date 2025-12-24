import React, { useState } from "react";

interface MyButton {
  text: String | number | boolean;
  onClick?: () => void;
}

const [value, setValue] = useState<number>(1);

const MyButton: React.FC<MyButton> = (props) => {
  const { text } = props;
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue((prev) => prev + 1)}>{text}</button>
    </div>
  );
};

export default MyButton;
