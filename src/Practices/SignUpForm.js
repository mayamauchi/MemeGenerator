import React from "react"
import "./Components/signupform.css"

export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    const [formData, setFormData] = React.useState(
        {
            email: "",
            pswd: "",
            pswdConf: "",
            join: false
        }
    )
    console.log(formData.email, formData.pswd, formData.pswdConf, formData.join)
    function handleSubmit(event) {
        event.preventDefault()
        console.log("handleSubmit")

        if (formData.pswd === formData.pswdConf) {
            console.log("Successfully signed up")
            if (formData.join) 
                console.log("Thanks for signing up for our newsletter!")
        }
        else
            console.log("Passwords do not match")

    
    }
    
    function handleChange(event) {
        const {type, name, value, checked} = event.target
/*        console.log(event.target)
        console.log(type, name, value, checked)*/
        if (type==="email" || type==="password") setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
/*        else if (type==="password") setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })*/
        else if (type==="checkbox") setFormData(prevData => {
            return {
                ...prevData,
                [name]: checked
            }
        })
        
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="pswd"
                    value={formData.pswd}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="pswdConf"
                    value={formData.pswdConf}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name="join"
                        checked= {formData.join ? 'checked' : false}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                    onClick={handleSubmit}
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
