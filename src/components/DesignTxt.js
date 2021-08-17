import React from 'react'
import FsmDiagram from '../assets/FSM.jpg'


function DesignTxt() {
  return (
    <div className="ood_box">
      The "Game" object is a finite state machine which has 3 states (Idle, PlayerTurn, DealerTurn): 
      <img className="fsm" src={FsmDiagram} alt={"FSM Diagram"} />

      
      Now the Game is at "Idle" state, press "start" button to start game. <br />
    </div>
  )
}

export default DesignTxt