import React, { useState } from "react";
interface MyButtonInterface {
  text: string | number;
  onClick?: () => void;
}

interface Book {
  title: string;
  price: number;
}

const MyButton: React.FC<MyButtonInterface> = (props) => {
  const [value, setValue] = useState<Book>({ title: "One", price: 10 });
  const [input, setInput] = useState<string | undefined>("");
  const { text, onClick = () => {} } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <div>
        <h3>
          {value.price}-{value.title}
        </h3>
        <button onClick={() => setValue({ title: "Two", price: 20 })}>
          {text}
        </button>
      </div>

      <div>
        <form action="">
          <div>
            <h3>{input}</h3>
            <input type="text" onChange={handleChange} value={input} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyButton;
