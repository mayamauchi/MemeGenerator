import React from "react";
import Joke from "./Components/Joke"
import jokesData from "./Components/jokesData"

import "./Components/jokeapp.css"

/*export default function JokeApp() {
    const jokeElements = jokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}*/

export default function Messages() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */
    return (
        <div>
            {messages.length > 0 && 
             <h1>You have {messages.length} unread messages!</h1>}
        </div>
    )
}
