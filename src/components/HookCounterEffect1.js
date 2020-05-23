import React, {useState, useEffect} from 'react'

function HookCounterEffect1() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    useEffect(()=> {
        document.title = `You Clicked ${count} times`
        console.log("Update")
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange = {e => setName(e.target.value)}/>
            <button
            onClick = {()=> setCount(count+1)}
            >Click {count}
            </button>
            <p>{name}</p>
        </div>
    )
}

export default HookCounterEffect1
