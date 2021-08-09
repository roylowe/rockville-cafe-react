import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MonthlySpecials from '../components/MonthlySpecialsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SPECIALS } from '../shared/specials';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            specials: SPECIALS,
            
            
        };
    }

    
    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }




        return (
            <div>
                <Header />
                <Switch>
                    <Route path='Home' component={HomePage} />
                    <Route exact path='MonthlySpecials' render={() => <MonthlySpecials />} />
                    <Redirect to='Home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;