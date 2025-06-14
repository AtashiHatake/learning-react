import { useReducer, useState  } from 'react'

const CounterReducer = () => {
   
  function Counter(state =0, action) {
    if(action.type === "INCREMENT") {
        return state + 1;
    } 
    else if (action.type === "DECREMENT") {
        return state - 1;
    } 
    else if (action.type === "RESET") {
        return 0;
    } 
    else if (action.type === "INCREASE_BY_5") {
        return state + 5;
    } 
    else if (action.type === "DECREASE_BY_5") {
        return state - 5;
    } 
    else if (action.type === "INCREASE_BY_AMOUNT") {
        return state + action.payload;
    }
    else if (action.type === "DECREASE_BY_AMOUNT") {
        return state - action.payload;
    }
    else { return state; }  
  }

  const [count, dispatch] = useReducer(Counter, 0);
  const [inputValue, setInputValue] = useState(0);



  return (
    <div>
        <h1>Count: {count}</h1>
        <button style={{ margin:"10px", padding:"10px", border:"2px solid black" }} onClick={()=> dispatch({type: "INCREMENT"})} >+</button>
        <button style={{ margin:"10px", padding:"10px", border:"2px solid black" }} onClick={()=> dispatch({type: "DECREMENT"})} >-</button>
        <button style={{ margin:"10px", padding:"10px", border:"2px solid black" }} onClick={()=> dispatch({type: "RESET"})} >Reset</button>
        <button style={{ margin:"10px", padding:"10px", border:"2px solid black" }} onClick={()=> dispatch({type: "INCREASE_BY_5"})} >+ 5</button>
        <button style={{ margin:"10px", padding:"10px", border:"2px solid black" }} onClick={()=> dispatch({type: "DECREASE_BY_5"})} >- 5</button>

        <div>
            <input style={{border:"0.15rem solid black", marginRight:"20px"}}type="number" value={inputValue} onChange={e => setInputValue(Number(e.target.value))} />

            <button style={{ margin:"10px", padding:"10px", border:"2px solid black" }} onClick={()=> {dispatch({type: "INCREASE_BY_AMOUNT", payload: Number(inputValue)}); setInputValue('')}}>INCREASE BY AMOUNT</button>

           <button style={{ margin: "10px", padding: "10px", border: "2px solid black" }} onClick={() => { dispatch({ type: "DECREASE_BY_AMOUNT", payload: Number(inputValue) });setInputValue('');}}>DECREASE BY AMOUNT</button>



            
        </div>
    </div>
    
  )
}

export default CounterReducer;

/*
React pretty much relates count and state behind the scenes — where state is just like a parameter (x in a function), and count is the current value that the reducer function performs operations on and returns the updated result for.
*/