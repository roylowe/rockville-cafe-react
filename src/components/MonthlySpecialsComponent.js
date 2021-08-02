import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
//import SpecialsInfo from './SpecialsInfoComponent';

//this class will hold each monthly special
class MonthlySpecials extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedSpecial: null  //this is a user defined variable
            
        };
    }

    //A method to hold the state when a monthly special is selected
    onSpecialSelect(monthlySpecial){
        this.setState({selectedSpecial: monthlySpecial});
    }

    //A method to render a selected monthly special
    renderSelectSpecial(monthlySpecial){
        if (monthlySpecial) {
           return(
                <Card>
                    <CardImg width="100%" top src={monthlySpecial.image} alt={monthlySpecial.name} />
                    <CardBody>
                        <CardTitle>{monthlySpecial.name}</CardTitle>
                        <CardText>{monthlySpecial.description}</CardText>
                    </CardBody>
                </Card>
           );
        }
        return <div />;
    }

    render() {
        //how does the below code access the specials array in specials.js
        const special = this.props.specials.map(monthlySpecial => {
            return (
                <div key={monthlySpecial.id}className="col-md-3 m-1">
                    <Card onClick={() => this.onSpecialSelect(monthlySpecial)}>
                        <CardImg width="100%" src={monthlySpecial.image} alt={monthlySpecial.name} />
                        <CardImgOverlay>
                            <CardTitle>{monthlySpecial.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        } );



        return(
            <div className="container">
                <div className="row">
                    {special}
                </div>
                {/* <SpecialsInfo /> */}
                {/* remove the below row when creating a card in it's own info component */}
                <div className="row">
                    <div className="col-md-3 m-1">
                        {this.renderSelectSpecial(this.state.selectedSpecial)}
                    </div>
                </div>
            </div>

        );
    }
}

export default MonthlySpecials;