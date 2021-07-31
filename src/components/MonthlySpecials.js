import React, { Component } from 'react';

class Specials extends Component {
    constructor (props) {
        super(props);
        this.state = {
            specials: [
                {
                    id: 0,
                    name: 'Breakfast',
                    image: 'assets/images/eggPlateSpecial.jpeg',
                    description: "2 eggs served with toast spring greens",
                    cost: "$5.99"
                },
                {
                    id: 1,
                    name: 'Lunch',
                    image: 'assets/images/lunchSpecial.jpeg',
                    description: "tuna salad with lettuce, onions, served on wheat bread",
                    cost: "$8.99"
                },
                {
                    id: 2,
                    name: 'dinner',
                    image: 'assets/images/ribDinner.jpeg',
                    description: "prime rib with fries, tomatoes and pickles",
                    cost: "$19.99"
                }
            ]
        };
    }
    render() {
        const special = this.state.specials.map(monthlySpecial => {
            return (
                <div key={monthlySpecial.id}className="col-md-4">
                    <img src={monthlySpecial.image} alt={monthlySpecial.name} />
                    <h2>{monthlySpecial.name}</h2>
                    <p>{monthlySpecial.description}</p>
                    <p>{monthlySpecial.cost}</p>
                </div>
            )
        } );



        return(
            <div className="container">
                <div className="row">
                    {special}
                </div>
            </div>

        );
    }
}

export default Specials;