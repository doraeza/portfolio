const counterFactory = (initialValue = 0, step = 1) => {
    let value = initialValue;
  
    const increase = () => {
      value += step;
      return value;
    };
  
    const decrease = () => {
      value -= step;
      return value;
    };
  
    return { increase, decrease };
  };
  export default counterFactory