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
        <h1>Color Picker App</h1>
        <div
          className="colorPicker-block"
          style={{ backgroundColor: `${currentColor}` }}
        >
          <p className="colorPicker-text">Current color: {currentColor}</p>
        </div>
        <input type="color" onChange={handleColorChange} />
      </div>
    </>
  );
}

export default ColorPicker;
