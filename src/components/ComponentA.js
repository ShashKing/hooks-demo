import React, { Component } from 'react'
import ComponentE from './ComponentE'

class ComponentA extends Component {
    render() {
        return (
            <div>
                <ComponentE/>
            </div>
        )
    }
}

export default ComponentA
