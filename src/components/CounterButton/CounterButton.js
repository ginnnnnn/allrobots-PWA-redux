import React, { Component } from 'react'


class CounterButton extends Component {
    state = {
        count: 0
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState !== this.state) {
            return true
        } else {
            return false
        }
    }
    onCounterClick = () => {
        this.setState(state => {
            return { count: state.count + 1 }
        })
    }

    render() {
        console.log(this.state.count)
        return <button color={this.props.color} onClick={this.onCounterClick}> Count:{this.state.count}</button>
    }
}
export default CounterButton