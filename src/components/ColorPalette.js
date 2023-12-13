// ColorPalette.js
import React, { useState } from 'react';

const ColorPalette = () => {
  const [colors, setColors] = useState([]);

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColors([...colors, randomColor]);
  };

  return (
    <div>
      <button onClick={generateRandomColor}>Generar Color</button>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: color,
              marginRight: '10px',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;