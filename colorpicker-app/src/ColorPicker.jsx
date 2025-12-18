import { useState } from "react";

function ColorPicker() {
  const [currentColor, setCurrentColor] = useState("#FFFFFF");

  // Change the currentColor value to the event target value
  function handleColorChange(e) {
    setCurrentColor(e.target.value);
  }

  return (
    <>
      <div className="colorPicker-container">
        <h1 className="colorPicker-title">Color Picker App</h1>
        <div
          className="colorPicker-block"
          style={{ backgroundColor: `${currentColor}` }}
        >
          <p className="colorPicker-text">Current color: {currentColor}</p>
        </div>
        <p className="colorPicker-choose-text">Choose your color</p>
        <input
          type="color"
          onChange={handleColorChange}
          className="colorPicker-input"
          value={currentColor}
        />
      </div>
    </>
  );
}

export default ColorPicker;
