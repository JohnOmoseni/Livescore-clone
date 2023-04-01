import React from 'react'
import GoalDetails from './GoalDetails'
import MatchTimeout from './MatchTimeout'

function MatchSummary({matchObj}) {
  const goalscorer = matchObj?.goalscorer
  const cards = matchObj?.cards

  // combine the card and goals events
  const combinedEvents = [...goalscorer, ...cards].sort((a, b) => {
      const timeA = parseInt(a.time)
      const timeB = parseInt(b.time)
      return timeA - timeB
  })
  console.log(combinedEvents);

  let timeout = true
  const rows = []

 if(combinedEvents.length > 0) {
    (combinedEvents.map((event, idx) => {
      const time = parseInt(event.time)
      if(time >= 45 && timeout) {
        rows.push(<MatchTimeout key={idx} status='HT' matchObj={matchObj} />)
        timeout = false
      }
      rows.push(<GoalDetails key={event.time} event={event}/>)
    })
    ) 
    rows.push( <MatchTimeout key='FT' status='FT' matchObj={matchObj} />)

  } else {
    rows.push(<li className='row no-events'>No Events</li>)
  } 
      
  return (
    <div className="match__summary-tab ">
        <div className="events_heading">
            <span className="events tab active | fs-small fw-semi-bold ">Events</span>
            <span className="commentary tab | fs-small fw-semi-bold">Commentary</span>
        </div>
        <ul className="summary-content" >
          {
            rows
          }
        </ul>
    </div>

  )
}

export default MatchSummary