import React from 'react'

function GoalDetails({event}) {
   const time = parseInt(event.time);
   
   let cardAwarded;
   if(event.card) {
      if(event.card === 'red card') {cardAwarded = 'red'}
      else {cardAwarded = 'yellow'}
   }

  return (
      <li className="row" >
         <div className="column">
            <span className="time fs-small">{event.time}'</span>
            <div className="home-goalscorer player">
                  <span className="home-scorer">{event.home_scorer ?? event.home_fault }</span>
                  {event.home_assist && <span className="home-scorer-assist | fs-tiny">{event.home_assist}</span>} 
            </div>
            {(cardAwarded && event.home_fault) && (<div className={`card ${cardAwarded}`}></div>)}
         </div>

         <div className="score fw-semi-bold">{event.score}</div>
         
         <div className="column">
            {(cardAwarded && event.away_fault) && (<div className={`card ${cardAwarded}`}></div>)}
            <div className="away-goalscorer player">
                  <span className="away-scorer">{event.away_scorer ?? event.away_fault }</span>
                  {event.away_assist && <span className="away-scorer-assist | fs-tiny">{event.away_assist}</span>}
            </div>
         </div>
      </li>
   )
}

export default GoalDetails