import Header from "./component/Header";
import Form from "./component/Form";
import TodoList from "./component/TodoList";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Header></Header>
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
}

export default App;
