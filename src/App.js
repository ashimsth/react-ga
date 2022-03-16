import './App.css';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import Error from './components/error';
import About from './components/about';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Container>
    </React.Fragment>
  );
}

export default App;
