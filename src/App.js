import './App.css';
import {useState} from 'react'
import Canvas from './components/Canvas';

function App() {
  function onChange(e){
    setColor(e.target.value)
  }
  const [color, setColor] = useState("#000000");
  const [strokeSize, setStrokeSize] = useState(5);

  return (
    <div className="App">
      <header className="App-header">
        <input type='color' onChange={e=>onChange(e)} defaultValue='#000000'/>
        <input type='number' value={strokeSize} onChange={e=>setStrokeSize(e.target.value)}/>
      </header>
      <Canvas color={color} strokeSize={strokeSize}></Canvas>
    </div>
  );
}

export default App;
