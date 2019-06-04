import React, { Component } from 'react'

import CounterButton from '../CounterButton/CounterButton'

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false
    }
    render() {
        return (<div>
            <CounterButton color='yellow' />
            <h1> We Are All Robots</h1></div>)
    }
}
export default Header