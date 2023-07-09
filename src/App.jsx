import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./components/TodoList";
import {
  Box,
  Button,
  Input,
  Container,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";

function App() {
  const [todos, setTodos] = useState([]);
  const [errorInput, setErrorInput] = useState(false);

  const todoTaskRef = useRef();

  const handleTodoAdd = (event) => {
    const task = todoTaskRef.current.value;
    if (task === "") return setErrorInput(true);

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    });

    todoTaskRef.current.value = null;
  };

  const togleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <Container maxW="sm">
        <Heading textAlign={"center"} m={2}>
          Todo App
        </Heading>
              <Box
                width={"sm"}
                display={"flex"}
                flexDirection={"row"}
                mt={"5"}
                mb={"4"}
              >
                <Input
                  placeholder="Add task"
                  ref={todoTaskRef}
                  type="text"
                  size={"lg"}
                  isInvalid={errorInput}
                  errorBorderColor="crimson"
                  onKeyUp={() => setErrorInput(false)}
                />
                <Button
                  onClick={handleTodoAdd}
                  colorScheme="messenger"
                  fontSize={"sm"}
                  size={"lg"}
                  ml={2}
                >
                  Add
                </Button>

                <Button
                  onClick={handleClearAll}
                  colorScheme="messenger"
                  fontSize={"sm"}
                  size={"lg"}
                  ml={2}
                >
                  clear all
                </Button>
              </Box>

              <TodoList
                todos={todos}
                togleTodo={togleTodo}
                deleteTodo={deleteTodo}
              />
      </Container>
      <Heading size="sm" textAlign={"center"} opacity={"0.7"} mb={10} position={"absolute"} left={"2"} top={"630"}>© 2023 – Creation of Carlos Velásquez</Heading>
    </>
  );
}

export default App;
