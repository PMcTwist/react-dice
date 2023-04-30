import React, { Component } from 'react';
import './Roller.css';
import Dice from './Dice';

class Roller extends Component {
    static defaultProps = {
        numList: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    constructor(props) {
        super(props);
        this.state = {num1: "one", num2: "one", rolling: false};
        this.highRoller = this.highRoller.bind(this);
    };

    highRoller() {
        // Pick 2 new rolls
        let numRoll1 = this.props.numList[
            Math.floor(Math.random() * this.props.numList.length)
        ];
        let numRoll2 = this.props.numList[
            Math.floor(Math.random() * this.props.numList.length)
        ];

        //Set the state with the new rolls
        this.setState({num1: numRoll1, num2: numRoll2, rolling: true});

        // Reset button after roll
        setTimeout(() => (
            this.setState({rolling: false})
        ), 1000)
    };

    render() {
        return(
            <div>
                <div className='Roller'>
                    <Dice num={this.state.num1} roll={this.state.rolling} />
                    <Dice num={this.state.num2} roll={this.state.rolling} />
                </div>
                <button className='Roller-btn' onClick={this.highRoller} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        )
    };
};

export default Roller;