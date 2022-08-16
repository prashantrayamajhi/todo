import { useState } from "react";

const Input = ({ todos, setTodos }) => {
  const [data, setData] = useState("");

  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
    localStorage.removeItem("todos", item);
  };

  return (
    <>
      <input
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // spread operator
          setTodos([...todos, data]);
          localStorage.setItem("todos", JSON.stringify([...todos, data]));
          setData("");
        }}
      >
        Add
      </button>
      <ol>
        {todos.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setTodos(todos.filter((i) => i !== item));
              }}
            >
              {item}
              <button
                onClick={() => {
                  handleDelete(item);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Input;
