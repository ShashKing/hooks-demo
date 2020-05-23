import React, { Component } from 'react'

export class ClassCounterEffectt extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             name: ""
        }
    }
    componentDidMount() {
        document.title = `clicked ${this.state.count} times`

    }
    componentDidUpdate() {
        document.title = `clicked ${this.state.count} times`
        console.log("Updating document title")
    }

    
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                    <p>{this.state.name}</p>
                <button onClick={()=> this.setState({
                    count: this.state.count + 1
                })}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClassCounterEffectt
