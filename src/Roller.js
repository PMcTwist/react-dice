import React, { Component } from 'react';

import Dice from './Dice';

class Roller extends Component {
    constructor(props) {
        super(props);
        this.state = {num1: 1, num2: 1};
    }

    render() {
        return(
            <div>
                <Dice num={this.state.num1} />
                <Dice num={this.state.num2} />
                <button>Roll Dice!</button>
            </div>
        )
    }
};

export default Roller;