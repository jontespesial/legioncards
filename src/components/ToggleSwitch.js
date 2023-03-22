import React, { useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch({value, setValue}) {
  const onToggle = () => setValue(!value);
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={value} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default ToggleSwitch;