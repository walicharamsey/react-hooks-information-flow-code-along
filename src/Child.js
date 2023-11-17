import React from 'react';

function Child({ onChangeColor }) {
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }

  return (
    <div
      className="child"
      style={{ backgroundColor: "#FFF" }}
      onClick={handleClick}
    />
  );
}

export default Child;
