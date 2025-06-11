import { useState } from "react";

const TodoList = () => {
  const [Todo, setTodo] = useState([]);
  const [Input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Input.trim()) {
      setTodo([...Todo, Input]);
      setInput('');
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div
      style={{
        maxWidth: "550px",
        margin: "60px auto",
        padding: "40px",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        fontFamily: "'Inter', sans-serif",
        transition: "all 0.3s ease"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "28px",
          color: "#222",
          fontWeight: "600",
        }}
      >
        📝 Todo List
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "12px", alignItems: "center" }}
      >
        <input
          style={{
            flex: 1,
            border: "1px solid #d1d5db",
            padding: "12px 14px",
            borderRadius: "10px",
            fontSize: "16px",
            outline: "none",
            transition: "0.2s border ease-in-out",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)"
          }}
          type="text"
          value={Input}
          placeholder="Add a new todo..."
          onChange={handleChange}
          onFocus={(e) => e.target.style.border = '1px solid #60a5fa'}
          onBlur={(e) => e.target.style.border = '1px solid #d1d5db'}
        />

        <button
          style={{
            border: "none",
            backgroundColor: "#3b82f6",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "0.2s background-color ease-in-out"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#2563eb"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#3b82f6"}
          type="submit"
        >
          ➕ Add
        </button>
      </form>

      <ul style={{ marginTop: "30px", paddingLeft: "0", listStyle: "none" }}>
        {Todo.map((todo, index) => (
          <li
            key={index}
            style={{
              background: "#f3f4f6",
              padding: "12px 16px",
              marginBottom: "12px",
              borderRadius: "10px",
              fontSize: "16px",
              color: "#111827",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            ✅ {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
