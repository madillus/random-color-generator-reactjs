import React, { useState } from 'react';
import './App.css';
import randomcolor from 'randomcolor';
//import Dropdown from './Dropdown';


const App = () => {
  const [color, setColor] = useState('randomcolor');
  const colorInput = 'randomcolor'(chooseColor)

  function changeColor() {
    setColor = randomcolor

  }

};
return (
  <div className="App" style={{ backgroundColor: `${changeColor}`, minHeight: '33.34vh', overflow: 'hidden', zoom: '3' }}>
    <h1> Random Color Generator </h1>
    <h2> {changeColor} </h2>
    <button onClick={changeColor}>Randomize</button>
    <button onClick={() => navigator.clipboard.writeText(hex)} >
      Copy Color
  </button>







export default App;








/*const App = () => {
  const [color, setColor] = useState('randomcolor');
  const colorInput = [randomcolor, chooseColor]
  const sethue = [randomcolor, sethue]
  const setluminosity = [randomcolor, setluminosity]

};

return (
  <div className="App" style={{ backgroundColor: `${color}`, minHeight: '33.34vh', overflow: 'hidden', zoom: '3' }}>
    <h1> Random Color Generator </h1>
    <h2> {$`colorInput`} </h2>
    <button onClick={randomColor}>Randomize</button>
    <button onClick={() => navigator.clipboard.writeText(color)} >
      Copy Color
    </button>


  </div >
);*/

/*function App({
  return (
    <div className='container'>
      <Dropdown title='Select Hue' items={items} /</Dropdown>
    </div>
  );*/

/*const colorInput = [randomcolor, chooseColor]
  const sethue = [randomcolor, sethue]
  const setluminosity = [randomcolor, setluminosity]*/