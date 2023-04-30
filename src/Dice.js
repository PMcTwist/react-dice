import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div>
                <i className={`Dice fas fa-dice-${this.props.num} ${this.props.roll && 'shaking'}`}></i>
            </div>
        )
    }
};

export default Dice;