import React from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";

export default function App() {
  return (
    <>
      <Header />
      <Tabs />
      <TodoList />
      <TodoInput/>
    </>
  );
}
