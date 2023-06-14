const useDeepFreeze = (data: any) => {

    // 객체에 정의된 속성의 이름을 조회한다.
    const propNames = Object.getOwnPropertyNames(data);
  
    // 자신을 프리징하기 전 속성을 프리징한다.
    for (const name of propNames) {
      const value = data[name];
  
      if(value && typeof value === "object") {
        useDeepFreeze(value);
      }
    }
  
    return Object.freeze(data);
  }

  export default useDeepFreeze