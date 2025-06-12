import { useEffect, useState } from "react";

const UseEffectCounterEffect = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(`The component has been rendered ${value} times`);
    document.title = (`Increment ${value}`)
    
  },[value]);

  return (
    <div>
        <h1>{value}</h1>
        <button onClick={() => setValue(value + 1)} >Increment button</button>
    </div>
  )
}

export default UseEffectCounterEffect;