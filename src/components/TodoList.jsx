import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos } = props;
  const tab = "All";
  const filterTodosList = tab === "All" ? 
  todos : 
  tab === 'completed' ?
    todos.filter(val => val.completed) :
    todos.filter(val => !val.completed)


  return (
    <>
      {todos.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todoIndex={todoIndex} {...props} />;
      })}
    </>
  );
}
