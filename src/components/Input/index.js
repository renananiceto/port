import React from "react";


export const Input = ({title,placeholder,type}) => {
  return (
    <div>
      <p>{title}</p>
      <input placeholder={placeholder} type={type}></input>
    </div>
  );
};
