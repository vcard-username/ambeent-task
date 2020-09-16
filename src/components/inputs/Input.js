import React from "react";

// [style]
import "./Input.scss";

function Input({ name, defVal, onChange, min, max }) {
  return (
    <div className="input-container">
      <input
      type="number"
      min={min}
      max={max}
      defaultValue={defVal}
      onChange={onChange}
      name={name}
    />
    </div>
  );
}

export default Input;
