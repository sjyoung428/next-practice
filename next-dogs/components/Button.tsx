import React from "react";

interface ButtonProps {
  likeBtn?: boolean;
  isLike?: boolean;
  onToggle?: () => void;
  newDog?: () => void;
}

const Button = ({ likeBtn, isLike, onToggle, newDog }: ButtonProps) => {
  return (
    <>
      {likeBtn ? (
        <button onClick={onToggle}>{isLike ? "Unlike" : "Like"}</button>
      ) : (
        <button onClick={newDog}>New Dog!</button>
      )}
    </>
  );
};

export default Button;
