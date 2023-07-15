import React from "react";
import TodoItem from "./TodoItem";
import { List } from "@chakra-ui/react";

export function TodoList({ todos, togleTodo,deleteTodo,updateTodo}) {

  return (
    <>
    <List spacing={3}>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          togleTodo={togleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
   </List>
    </>
  );
}
