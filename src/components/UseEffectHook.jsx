import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);

  useEffect(() => {
    if(value > 0) {
        console.log("call use effect");
        document.title = `Increment ${value}`
    }
    
  }, [value]);

  return (
    <div>
        <h2>{value}</h2>
        <button onClick={() => {setValue(value + 1)}} >Increment</button>
        <button style={{ marginLeft:"20px" }} onClick={() => {setSomething(something + 1)}} >Set something to increment</button>
    </div>
  )
}

export default UseEffectHook;


/*

useEffect CANNOT be wrapped inside a conditional statement like if and while, instead you have to put the statement inside the useEffect

We use useEffect hook when we have to run some code for the following conditions:
1) Components rendering for the first time
2) Whenever componenet re-renders
3) Some data in our component is changed

without dependency array useEffect runs the call back function every time

with the dependency array in this case the empty array [] due to this the call abck function fires only for first render and not the rest when there is a change in the value

[value] using this dependency array the call back only fires when the value inside the array changes which did not happen when we gave empty or no array due to this performance is increased as our call back function does not fire unnecessary and our component does not re-render again and again.
*/
