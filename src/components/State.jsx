import { useState } from "react";
const State = () => {
  const[count, setCount] = useState(0);

  const increment = ()=> {
    setCount(count + 1); // we use setCount to change the UI as the data changes.
    
  }

  const decrement = ()=> {
    setCount(count - 1);
  }

  const reset = ()=> {
    setCount(count - count);
  }

  const[friends, setFriends] = useState(['Pranav', 'Khushant',]);

  const addFriend = () =>{
    setFriends([...friends, "Sourabh"]);
  }

  const removeFriend = () =>{
    setFriends(friends.filter(f => f !== "Pranav"))
  }

  const updateOneFriend = () => {
    setFriends(friends.map(f => f === "Khushant" ? "Khushant Ubarhande " : f))
  }

  return (
    <div>
        <h1 style={{ fontSize:"40px" }}>{count}</h1>

        <button onClick={increment} style={{ border: "1px solid black", padding:"5px", marginRight:"20px", fontSize:"20px" }}>+</button>

        <button onClick={decrement} style={{ border: "1px solid black", padding:"6px", fontSize:"20px"}}>-</button>

          <button onClick={reset} style={{ border: "1px solid black", padding:"5px", fontSize:"20px", marginLeft:"20px"}}>Reset</button>

        <section>
          <h1 style={{ marginTop:"50px" }}>List of my friends: </h1>
          {friends.map(f => (
            <li key={Math.random()}>{f}</li>
          ))}

          <button onClick={addFriend} style={{ border: "1px solid black", padding:"5px",}} >Add Friend</button>

           <button onClick={removeFriend} style={{ border: "1px solid black", padding:"5px", marginLeft:"20px"}} >Remove Friend</button>

           <button onClick={updateOneFriend} style={{ border: "1px solid black", padding:"5px", marginLeft:"20px"}} >Update One Friend</button>
        </section>
    </div>
    
  )
}

export default State;


/*

States are a way to store and manage data that can change over time and affects how components render. States are defined using Hooks which set an initial value and provides a way to update that state. State lets you make a website dynamic — the UI updates automatically based on user actions or data changes, without needing to manually write DOM update code.

useState: declares a state variable that you can update directly.
const[initialData, changeData] = useState(initialData), data is initial data, changeData is used to change value

Hooks are used to implement State in react without writing class

*/