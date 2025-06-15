import {useRef, useState, useEffect} from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000)

    return() => {
        clearInterval(intervalRef.current)
    }

  }, []);

  return (
    <div>
        <h1>Timer: {count} seconds</h1>
        <button onClick={() => clearInterval(intervalRef.current)} >Stop Timer</button>
    </div>
  )
}

export default UseRef
/*
useRef hook provides a way to access and interract with DOM elements and to persisit values across renders without any re-rendering.
*/