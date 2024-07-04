import { Box, Heading } from "@chakra-ui/react";
import TaskTable from "./components/TaskTable";
import "./font/font.css"


function App() {

    
  
    return (
        <>
            
            <Box maxW={1000} mx="auto" px={6} pt={24} fontSize="sm">

                <Heading mb={10} >Food Diary</Heading>
                

                <TaskTable />

            </Box>
        </>
        

      
  );
}

export default App;
