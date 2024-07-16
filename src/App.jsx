import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import UserRegister from "./pages/userRegister"


function App() {

  return (
    <Box>
      <Box>
        {/* navbar */}
      </Box>
      
      
      <Box>
        {/* fouters */}
        <Routes>
          <Route path="/" element={<UserRegister />}></Route>
        </Routes>
      </Box>



      <Box>
        {/* footer */}
      </Box>
    </Box>
  )
}

export default App
