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
        color={completed === true ? "white" : "black"}
        paddingTop={6}
        paddingBottom={6}
        paddingLeft={3}
        paddingRight={3}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"}>
          <Switch
            id="email-alerts"
            onChange={handleTodoClick}
            size={"md"}
            isChecked={completed}
            margin={"5px"}
          />
          <Heading as="h2" size="md" textAlign={"center"}>
            {task}
          </Heading>
        </Box>
        <IconButton
          onClick={() => deleteTodo(id)}
          icon={<CloseIcon />}
          size={"sm"}
          backgroundColor={"transparent"}
          color={completed === true ? "white" : "black"}
        />
      </ListItem>
    </>
  );
}
