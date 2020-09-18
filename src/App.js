import React, { useState } from 'react';
import './App.css';
import { hue, luminosity } from './ExactColor.js';
import randomColor from 'randomcolor';

const App = () => {
  const initialColor = randomColor();
  const [color, setColor] = useState(initialColor);
  const [colorHue, setColorHue] = useState('');
  const [colorLightness, setColorLightness] = useState('');

  function onHueChange(e) {
    setColorHue(e.target.value);
    setNewColor(e.target.value, colorLightness);
  }

  function onLuminosityChange(e) {
    setColorLightness(e.target.value);
    setNewColor(colorHue, e.target.value);
  }

  function setNewColor(hue, luminosity) {
    setColor(
      randomColor({
        luminosity: luminosity,
        hue: hue,
      }),
    );
  }

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${color}`,
        minHeight: '33.34vh',
        overflow: 'hidden',
        zoom: '3',
      }}
    >
      <h1> Random Color Generator </h1> <h2> {color} </h2>{' '}
      <select name="color" onChange={onHueChange}>
        {hue.map((value) => {
          return <option id={value}>{value}</option>;
        })}
      </select>
      <select name="luminosity" onChange={onLuminosityChange}>
        {luminosity.map((value) => {
          return <option id={value}>{value}</option>;
        })}
      </select>
      <button onClick={() => setColor(randomColor())}> randomize </button>{' '}
      <button onClick={() => navigator.clipboard.writeText(color)}>
        copy color{' '}
      </button>{' '}
    </div>
  );
};

export default App;
