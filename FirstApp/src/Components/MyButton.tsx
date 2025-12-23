import React from "react";

interface MyButton {
  text: String | number | boolean;
  onClick?: () => void;
}

const MyButton: React.FC<MyButton> = (props) => {
  const { text, onClick } = props;
  return <button onClick={onClick}>{text}</button>;
};

export default MyButton;
