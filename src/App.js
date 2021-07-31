import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Specials from './components/MonthlySpecials';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Rockville Cafe</NavbarBrand>
                </div>
                </Navbar>
                <Specials />
            </div>
        );
    }
}

export default App;