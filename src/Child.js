// Child Component
import React from 'react';

const Child = ({ onIncrement, onDecrement }) => (
  <div className="child">
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
);

export default Child;
