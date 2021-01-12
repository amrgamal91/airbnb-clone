import React from 'react'
import '../style/Card.css'

const Card = ({src,title,description,price}) => {
    return (
        <div className="card">
            <img src={src} alt="card_image"/>
            <div className="card_info">
                 <h2>{title}</h2>
                 <h4>{description}</h4>
                 <h2>{price}</h2>
            </div>
        </div>
    )
}

export default Card
