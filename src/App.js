import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
//import Practices from "./Practices/Practices"
import "./style.css"

export default function App() {

/*    return (
        <div>
            <Practices />
        </div>
    )*/
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}