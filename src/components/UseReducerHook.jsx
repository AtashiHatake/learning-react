import { useReducer } from "react";

const UseReducerHook = () => {
  const initialState = {count: 0};

  const reducer  = (state, action) => {
    switch (action.type) {
        case "increment":
            return {...state, count: state.count + 1}
            break;

        case "decrement":
            return {...state, count: state.count - 1}
            break;

         case "reset":
            return {...state, count: 0}
            break;
    
        default:
            return state;
    
    }
  }

  const [state, dispatch] =  useReducer(reducer, initialState);

  return (
    <div>
        <h1>Count: {state.count}</h1>

        <button style={{ margin:"10px", border:"1px solid black", padding:"10px" }} onClick={() => dispatch({type: "increment"})}>+</button>

        <button style={{ margin:"10px", border:"1px solid black", padding:"10px" }} onClick={() => dispatch({type: "decrement"})}>-</button>

        <button style={{ margin:"10px", border:"1px solid black", padding:"10px" }} onClick={() => dispatch({type: "reset"})}>Reset</button>
    </div>
  )
}

export default UseReducerHook;

/*
const [state, dispatch] = useReducer (reducer, initialState)

state: current state value used in component

dispatch: function to send actions to the reducer which updates the state.

reducer: funtion which describes how the state should change based on actions takes current state and an action as an input to return a new state.

initialState: starting value of state when it first renders


*/