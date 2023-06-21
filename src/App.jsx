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
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
