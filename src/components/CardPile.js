import React from 'react'
import {CardAlbum} from './CardAlbum'
import './CardPile.css'

function CardPile(props) {
  return (
    <div className="cardPile">
      {!props.hide && <img className="card" src={CardAlbum[props.cards[0]]} alt={"card"} />}
      {props.hide && <img className="card" src={CardAlbum[0]} alt={"card"} />}

      {
        props.cards.slice(1).map((card)=>{
          let cardDisplay = CardAlbum[card]
          return <img className="card" src={cardDisplay} alt={"card"} />
        })
      }
    </div>
  )
}

export default CardPile