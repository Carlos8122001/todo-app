import { useState, useRef, useEffect } from "react";
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
} from "@chakra-ui/react";

function App() {
  const [todos, setTodos] = useState([]);
  const [errorInput, setErrorInput] = useState(false);
  const [filterTask, setFilterTask] = useState("");

  const KEY_LOCAL_STORAGE = "tasks";

  const taskRef = useRef();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));
    if (storedTasks) {
      setTodos(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(todos));
  }, [todos]);

  const handleTodoAdd = (event) => {
    const task = taskRef.current.value;
    if (task === "") return setErrorInput(true);

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    });

    taskRef.current.value = null;
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

  let resultFilter = [];
  resultFilter = todos.filter((task) => task.completed === true);

  if (filterTask === "completed") {
  } else if (filterTask === "pendings") {
    resultFilter = todos.filter((task) => task.completed === false);
  }

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
            ref={taskRef}
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

        <Tabs>
          <TabList>
            <Tab>Task</Tab>
            <Tab onClick={() => setFilterTask("completed")}>Completed</Tab>
            <Tab onClick={() => setFilterTask("pendings")}>pendings</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TodoList
                todos={todos}
                togleTodo={togleTodo}
                deleteTodo={deleteTodo}
              />
            </TabPanel>
            <TabPanel>
              <TodoList
                todos={resultFilter}
                togleTodo={togleTodo}
                deleteTodo={deleteTodo}
              />
            </TabPanel>
            <TabPanel>
              <TodoList
                todos={resultFilter}
                togleTodo={togleTodo}
                deleteTodo={deleteTodo}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Heading
        size="sm"
        textAlign={"center"}
        opacity={"0.7"}
        mb={10}
        position={"absolute"}
        left={"2"}
        top={"630"}
      >
        © 2023 – Creation of Carlos Velásquez
      </Heading>
    </>
  );
}

export default App;
