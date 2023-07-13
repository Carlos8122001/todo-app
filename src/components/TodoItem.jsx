import React from "react";
import {
  Box,
  Checkbox,
  Heading,
  IconButton,
  ListItem,
  Switch,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function TodoItem({ todo, togleTodo, deleteTodo }) {
  const { id, task, completed } = todo;

  const handleTodoClick = () => {
    togleTodo(id);
  };

  return (
    <>
      <ListItem
        width={"sm"}
        height={"7vh"}
        borderRadius={"7px"}
        backgroundColor={completed === true ? "#00a6fb" : "gray.100"}
        color={completed === true ? "white" : "black.100"}
        p={2}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          {/* <Checkbox
          
          colorScheme="green"
          checked={todo.complete}
        >
         
        </Checkbox> */}

          <Heading as="h6" size="xs">
            {task}
          </Heading>
          <Switch id="email-alerts" onChange={handleTodoClick} size={"md"} isChecked={completed} />
        </Box>
        <IconButton
          onClick={() => deleteTodo(id)}
          icon={<CloseIcon />}
          size={"sm"}
        />
      </ListItem>
    </>
  );
}
