import React, {useEffect} from "react"

export default function UseEffect() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    /**
     * Quiz:
     * 1. What will happen if I put back our Star Wars API call
     *    into the effect function?
     */
    React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
            .then(res => {
                console.log("RES===")
                console.log(res)
                return res.json()
                console.log("JSON===")

            })
            .then(data => console.log(data))
    }, [starWarsData, count])
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}


