import React from "react"
import "./objects.css"

export default function Objects() {
    const [contact, setContact] = React.useState({
        firstName: "Esa",
        lastName: "Torkkila",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     * 
     * Then use the starIcon value to display the correct image
     */
    //https://i.imgflip.com/30b1gx.jpg
    //https://i.imgflip.com/1g8my4.jpg

    let starIcon = contact.isFavorite ? "https://i.imgflip.com/30b1gx.jpg" : "https://i.imgflip.com/1g8my4.jpg"
    
    function toggleFavorite() {
        console.log("Toggle Favorite")
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
       })
    }
    function toggleFavoriteV2() {
        //return object:
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }

//    src={`../images/${starIcon}`} 
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`${starIcon}`}
                        className="card--favorite"
                        onClick={toggleFavorite}
                        width="50px"
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
