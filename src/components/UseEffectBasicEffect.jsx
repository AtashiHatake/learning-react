import { useEffect, useState } from "react";

const UseEffectBasicEffect = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("The component has been mounted");
    
  },[]);

  return (
    <div>
        <h1>{value}</h1>
        <button onClick={() => setValue(value + 1)} >Increment button</button>
    </div>
  )
}

export default UseEffectBasicEffect