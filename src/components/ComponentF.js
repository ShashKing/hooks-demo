import React, { Component } from 'react'
import {UserContext, ChannerlContext} from '../App'

class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserContext.Consumer>
                    {
                        user => {
                            return (
                                <ChannerlContext>
                                    {
                                        channel => {
                                            return <div>
                                                User Context Value {user}, channel Context Value {channel}
                                            </div>
                                        }
                                    }
                            </ChannerlContext>
                            )
                        }
                    }

                </UserContext.Consumer>
            </div>
        )
    }
}

export default ComponentF
