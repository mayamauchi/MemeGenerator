import React from "react";

export default function Star(props) {
    let starIcon = props.isFilled ? "https://i.imgflip.com/30b1gx.jpg" : 
                                        "https://i.imgflip.com/1g8my4.jpg"

    function toggleFavorite() {

    }                                        
    return (
        <img 
            src={`${starIcon}`}
            className="card--favorite"
            onClick={props.handleClick}
            width="50px"
        />
    )
}
