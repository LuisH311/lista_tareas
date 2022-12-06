import { Box } from "@chakra-ui/react";
import "./App.css";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import Task from "./Componentes/Task";

function Apps() {
  return (
    <Box
      display="grid"
      w="40%"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      margin="auto"
    >
      <Box
        p="8%"
        alignItems="center"
        w="100%"
        bg={""}
        borderRadius="5px"
        border="1px solid black"
        margin="auto"
        boxShadow="3px 3px 3px 3px rgb(206, 206, 206)"
      >
        <Header />
        <Task /* createNewTask ={createNewTask} */ />
        <Footer />
      </Box>
    </Box>
  );
}

export default Apps;
