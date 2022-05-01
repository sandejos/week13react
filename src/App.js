import React from "react";
import LoginForm from "./components/loginform";
import './App.css';
import { Nav, Navbar } from "react-bootstrap";


function App() {
  return (
    <div className="App">
    <Navbar bg='light' variant='light'>
    <Navbar.Brand>
    Movie Reviews
    </Navbar.Brand>
    <Nav>
      <Nav.Link href='Movies'>Movies</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href='TV Shows'>TV Shows</Nav.Link>
      </Nav>
          </Navbar>
    <LoginForm/>
    </div>
  )
}

export default App;
