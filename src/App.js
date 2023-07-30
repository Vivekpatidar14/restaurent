import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faList,faPlus,faMagnifyingGlass,faUser} from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home.js";
import Restaurentcreate from "./components/Restaurentcreate.js";
import Restaurentdetail from "./components/Restaurentdetail.js";
import Restaurentlist from "./components/Restaurentlist.js";
import Restaurentsearch from "./components/Restaurentsearch.js";
import Restaurentupdate from "./components/Restaurentupdate.js";
import Login from "./components/Login.js";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Restro</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">
                  {" "}
                  <Link to="./"><FontAwesomeIcon icon={faHouse} />Home</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  {" "}
                  <Link to="/list"><FontAwesomeIcon icon={faList} />List</Link>
                </Nav.Link>
                <Nav.Link href="#home">
                  {" "}
                  <Link to="/create"><FontAwesomeIcon icon={faPlus} />Create</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  {" "}
                  <Link to="/search"><FontAwesomeIcon icon={faMagnifyingGlass} />Search</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  {" "}
                  <Link to="/login"><FontAwesomeIcon icon={faUser} />Login</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Restaurentcreate />} />
          <Route path="/detail" element={<Restaurentdetail />} />
          <Route path="/list" element={<Restaurentlist />} />
          <Route path="/search" element={<Restaurentsearch />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/update/:id"
            render={(props) => <Restaurentupdate {...props} />}
            element={<Restaurentupdate />}
          />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
