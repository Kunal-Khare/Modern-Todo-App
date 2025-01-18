import React from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";

export default function App() {
  const todos = [
    {input : "Learn React", isCompleted : True},
    {input : "Learn JSX", isCompleted : false},
    {input : "Learn JavaScript", isCompleted : false},
    {input : "Learn CSS", isCompleted : True},
  ];
   

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput />
    </>
  );
}
