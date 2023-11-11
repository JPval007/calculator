import './App.css';
import Calculator from './components/Calculator';
import {useState} from 'react';

function App() {
  // Hooks that control the calculations
  const [data, setData] = useState("");
  const calcBtns = [];
  


  // Website layout
  return (
    <>
      <div className="container-sm bg-primary-subtle">
        <div className="row  vh-100">        
          <div className="col-3"></div>          
          <div className="col align-self-center">
          <h1 className="text-center mb-3">Calculator</h1>
            <Calculator />
          </div>
          <div className="col-3"></div>
        </div>
      </div>      
    </>
  );
}

export default App;
