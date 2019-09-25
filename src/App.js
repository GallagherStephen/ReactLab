import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/content';
import Footer from './components/FooterComponents';
import Header from './components/headerComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route,BrowserRouter } from 'react-router-dom'; 


class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
      <div className="App">


        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>

        <Switch> 
          <Route path='/' component={Content} exact />
          <Route exact path='/create' component={Footer} /> 
          <Route path='/read' component={Header} /> 
         </Switch> 




        <Header></Header>
        <Content></Content>
        <Footer></Footer>


      </div>
      </BrowserRouter>
    );
  }
}

export default App;
