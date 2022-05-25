import React from "react"
import "./Components/form.css"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    /**
     * Challenge: Track the applicant's last name as well
     */
        console.log(firstName)
        console.log(lastName)
    
    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }
    
    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstNameChange}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastNameChange}
            />
        </form>
    )
}