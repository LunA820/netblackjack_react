import React from 'react'
import CardPile from './CardPile'
import DesignTxt from './DesignTxt'
import Alert from 'react-bootstrap/Alert'
import './CardZone.css'


// Props: Status, dCards, pCards
function CardZone(props) {
  return (
    <div className="cardZone">
      {
        props.state !== 0 ? <div>
          <h5>Dealer</h5>
          {
            // Dealer hides first card if it's in player turn.
            props.state === 1 ? 
              <CardPile cards={props.dCards} hide={true}/>:
                <CardPile cards={props.dCards} hide={false}/>
          }
          
          {props.state < 2 && <br />}
          {
            // If state = DealerTurn, display who's the winner
            props.state > 1 && <div>
              {props.state === 2 ? 
                <Alert variant="success">Player Win!</Alert>
                :
                <Alert variant="danger">Dealer Win!</Alert>}
            </div>
          }

          <CardPile cards={props.pCards} hide={false}/>
          <h5>Player</h5>
        </div>:<DesignTxt />
      }
    </div>
  )
}

export default CardZone