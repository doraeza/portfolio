import React from 'react';
import useCounter from './../../hooks/useCounter'

const Counter = () => {
  const { counter, increase, decrease } = useCounter(0, 1);

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{counter}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default Counter;