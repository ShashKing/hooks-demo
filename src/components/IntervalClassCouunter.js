import React, { Component } from 'react'

export class IntervalClassCouunter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             couont: 0
        }
    }
    componentDidMount() {
        this.imterval = setInterval(this.tick, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({
            couont: this.state.couont + 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.couont}</h1>
            </div>
        )
    }
}

export default IntervalClassCouunter
