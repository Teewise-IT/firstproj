import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
    // console.log(todo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempList = todoList;
    tempList.push(todo);
    setTodoList(tempList);
    setTodo("");
    console.log(todoList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleChange} type="text"></input>
        <button type="submit">Add</button>
      </form>

      {todoList.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </div>
  );
}

export default Todo;
