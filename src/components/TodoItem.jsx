import React, { useState } from "react";
import { Box, IconButton, Input, ListItem, Switch } from "@chakra-ui/react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";

export default function TodoItem({ todo, togleTodo, deleteTodo, updateTodo }) {
  const [text, setText] = useState("");
  const [edit, setEdit] = useState(false);

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
        <Switch
          id="email-alerts"
          onChange={handleTodoClick}
          size={"md"}
          isChecked={completed}
          margin={"5px"}
        />

        <Input
          value={!edit? task : text}
          variant="unstyled"
          onChange={(event) => setText(event.target.value)}
          onDoubleClick={() => setEdit(true)}
          fontSize={"20"}
        />

        <IconButton
          onClick={()=>{
            updateTodo(id,text);
            setEdit(false);
          }}
          icon={<EditIcon />}
          size={"sm"}
          backgroundColor={"transparent"}
          color={completed === true ? "white" : "black"}
        />
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
