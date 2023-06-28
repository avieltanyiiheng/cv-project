import { useState } from "react";
import RenderCV from "./RenderCV";
import Input from "./Input";

const Button = ({ formToggle, toggleState, text }) => {
  const toggle = toggleState;

  return (
    <>
      <button onClick={formToggle}>{text}</button>

      {toggle && (
        <>
          <h2>Edit Field</h2>
        </>
      )}
    </>
  );
};

export default Button;
