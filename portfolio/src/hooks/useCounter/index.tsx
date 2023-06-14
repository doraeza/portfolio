import { useState } from 'react';
import counterFactory from './counterFactory';

const useCounter = (initialValue:number, step:number) => {
  const [counter, setCounter] = useState(initialValue);
  const counterLogic = counterFactory(initialValue, step);

  const increase = () => {
    setCounter(counterLogic.increase());
  };

  const decrease = () => {
    setCounter(counterLogic.decrease());
  };

  return { counter, increase, decrease };
};
export default useCounter