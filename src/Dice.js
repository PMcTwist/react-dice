import React, { Component } from 'react'

class Dice extends Component {
    constructor(props) {
        super(props);
    }

    render(num) {
        return(
            <div>
                <i className='fas fa-dice-one'></i>
            </div>
        )
    }
};

export default Dice;