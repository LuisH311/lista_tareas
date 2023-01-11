import { GrAdd } from "react-icons/gr";
import { useState } from "react";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";

function TaskList({ createNewTask /* createDescription */ }) {
  const [tarea, setTarea] = useState("");
  const [nota, setnota] = useState("");
  return (
    <>
      <Box w={"100%"}>
        <form
          onSubmit={(e) => {
            createNewTask(tarea, nota);
            /*             createDescription(nota); */
            setTarea("");
            setnota("");
            e.preventDefault();
            window.location.reload()
          }}
        >
          <Box >
            <Input 
            w={"25vw"}
              type="text"
              className="text"
              placeholder="Add your new todo"
              onChange={(e) => setTarea(e.target.value)}
            />
            <Textarea
            w={"30vw"}
              type="text"
              className="text"
              placeholder="Add description"
              onChange={(e) => setnota(e.target.value)}
            />
          </Box>
          <Box display={"flex"} justifyContent= {"center"} alignItems = {"center"}>
            <Button type="submit" id="add">
              <GrAdd />
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default TaskList;
