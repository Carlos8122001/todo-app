import React from "react";
import { Box, Checkbox, Heading, IconButton, ListItem } from "@chakra-ui/react";
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
        backgroundColor={completed === true ? "blue.700" : "gray.100"}
        color={completed === true ? "white" : "black.100"}
        p={2}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
        <Checkbox
          onChange={handleTodoClick}
          colorScheme="green"
          checked={todo.complete}
        >
          <Heading as="h6" size="xs">
            {task}
          </Heading>
        </Checkbox>
        </Box>
        <IconButton onClick={()=> deleteTodo(id)} icon={<CloseIcon />} size={"sm"} />
      </ListItem>
    </>
  );
}
