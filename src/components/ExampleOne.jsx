import { useState } from "react";

const ExampleOne = () => {
  const [randomNumber, setrandomNumber] = useState(() => {
    return Math.floor(Math.random() * 100);
  });

  const randNo = () => {
    const newNumber = Math.floor(Math.random() * 100);
    setrandomNumber(newNumber);
  }
    
  return (
    <div style={{ margin:"10px", padding:"3px" }}>
       <h1>Random Number: {randomNumber}</h1>
       <button style={{ border:"1px solid black", padding:"3px" }}  onClick={randNo} >Generate a random number</button>
    </div>
  )
}

export default ExampleOne;

/*
Paasing  a function as a State in Hooks
*/