import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route/>
      </Routes>

    </Router>
  );
}

export default App;
