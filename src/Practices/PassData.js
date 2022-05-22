import React from "react"
import Header from "./Components/PassData_Header"
import Body from "./Components/PassData_Body"
import "./passdata.css"

export default function App() {
    const [user, setUser] = React.useState("Joe")

    return (
        <main>
            <Header user={user}/>
            <Body user={user}/>
        </main>
    )
}
