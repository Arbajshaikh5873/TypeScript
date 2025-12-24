import React, { useState } from "react";

interface MyButton {
  text: String | number | boolean;
  onClick?: () => void;
}

interface Book {
  name: String;
  price: number;
}
const MyButton: React.FC<MyButton> = (props) => {
  const [value, setValue] = useState<Book>({
    name: "one",
    price: 10,
  });
  const { text } = props;
  return (
    <div>
      <h1>
        Name {value.name} of Rs. {value.price}
      </h1>
      <button onClick={() => setValue({ name: "two", price: 20 })}>
        {text}
      </button>
    </div>
  );
};

export default MyButton;
