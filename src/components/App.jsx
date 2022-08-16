import { useState, useEffect } from "react";
import TitleCompoent from "./Title/Title";
import Input from "./Input/Input";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    // console.log(todos);
    setTodos(todos || []);
  }, []);

  return (
    <div>
      <TitleCompoent todos={todos} />
      {/* prop */}
      <Input todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
