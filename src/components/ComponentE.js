import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext, ChannelContext, ChannerlContext } from '../App'

function ComponentE() {
    const user = UseContext(UserContext)
    const channel = useContext(ChannerlContext)
    return (
        <div>
            <ComponentF/>
            {user} - {channel}
        </div>
    )
}

export default ComponentE
