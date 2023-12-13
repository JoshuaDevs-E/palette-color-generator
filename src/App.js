import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import './App.css';

function ColorPaletteEditor() {
  const [currentColor, setCurrentColor] = useState('#ffffff');
  const [palette, setPalette] = useState([]);

  const handleColorChange = (color) => {
    setCurrentColor(color.hex);
  };

  const addToPalette = () => {
    setPalette([...palette, currentColor]);
  };

  return (
    <div className="color-palette-editor">
      <div className="color-picker">
        <ChromePicker color={currentColor} onChange={handleColorChange} />
        <button onClick={addToPalette}>Agregar a la paleta</button>
      </div>
      <div className="color-palette">
        {palette.map((color, index) => (
          <div
            key={index}
            className="palette-color"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Editor de Paleta de Colores</h1>
      <ColorPaletteEditor />
    </div>
  );
}

export default App;
