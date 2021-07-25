import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0, isHiding: false }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment() {
        this.setState({ count: this.state.count + 1 })
    }
    decrement() {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <div>
                <h1>I AM COUNTER</h1>
                {this.state.count}
                <button onClick={this.increment} >ADD TO COUNT</button>
                <button onClick={this.decrement} >REMOVE FROM COUNT</button>
            </div>
        )
    }
}

export default Counter