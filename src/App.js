import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MonthlySpecials from './components/MonthlySpecialsComponent';
import { SPECIALS } from './shared/specials';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {specials: SPECIALS};
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Rockville Cafe</NavbarBrand>
                </div>
                </Navbar>
                <MonthlySpecials specials={this.state.specials}/>
            </div>
        );
    }
}

export default App;