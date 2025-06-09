import { useState } from "react";

const TodoList = () => {
  const [Todo, setTodo] = useState([]);
  const [Input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Input.trim()){
        setTodo([...Todo, Input]);
        setInput('');
    }
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div style={{ margin:"10px", padding:"3px" }} >
        <h1>Todo List: </h1>

        <form onSubmit={handleSubmit}>
            <input style={{ border:"1px solid black", padding:"3px" }}  onClick type="text" value={Input} placeholder="Add a new todo." onChange={handleChange}/>


            <button style={{ border:"1px solid black", padding:"3px", marginLeft:"10px" }}  onClick type="submit" >Add todo</button>
        </form>

        <ul>
            {Todo.map((todo, index) => (
                <li key = {index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList