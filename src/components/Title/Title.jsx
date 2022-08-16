import "./index.css";

const Title = ({ todos }) => {
  return (
    <div>
      <h1
        className="title"
        style={{
          textAlign: "center",
        }}
      >
        Todo App {todos.length} Tasks
      </h1>
    </div>
  );
};

export const heading = "Heading";

export default Title;
