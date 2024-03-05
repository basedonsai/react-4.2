// Parent Component
import React, { useState } from 'react';
import Child from './Child';
import './App.css'; 

const Parent = () => {
  const [counter, setCounter] = useState(0); 
  const [KuruKuruInc, setKuruKuruInc] = useState(false);
  const [KuruKuruDec, setKuruKuruDec] = useState(false);
  const incrementCounter = () => {
    setCounter(counter + 1);
    setKuruKuruInc(true);
    setTimeout(() => setKuruKuruInc(false), 997); 
  };
  const decrementCounter = () => {
    setCounter(counter -1 );
    setKuruKuruDec(true);
    setTimeout(() => setKuruKuruDec(false), 997); 
  };
  

  return (
    <div className="parent">
      <h2>Counter: {counter}</h2>
      {KuruKuruInc && <img src="https://herta.eu.org/img/hertaa2.webp" className="animated-gif-inc" alt="animated gif" />}
      {KuruKuruDec && <img src="https://herta.eu.org/img/hertaa2.webp" className="animated-gif-dec" alt="animated gif" />}
      <Child onIncrement={incrementCounter} onDecrement={decrementCounter} />
    </div>
  );
};

export default Parent;
