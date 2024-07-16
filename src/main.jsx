import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

<<<<<<< HEAD
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
=======
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
)
>>>>>>> fe9562e40c96b7f2214d2f96bfbed477d696b3ae
