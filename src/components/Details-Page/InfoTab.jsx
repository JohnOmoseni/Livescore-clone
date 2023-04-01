import React from 'react'
import Calendar from '../../assets/svgs/calendar-svg.svg'
import Whistle from '../../assets/svgs/referee-svg.svg'

function InfoTab({matchObj}) {
    const {match_date, match_referee, match_stadium} = matchObj

    const dtConstruct = new Date(match_date).toUTCString().split(" ")
    const date = `${dtConstruct[1]} ${dtConstruct[2]} ${dtConstruct[3]}`;   

  return (
    <div className="match__info-tab" >
        <div className="match-info">
            <p className="fw-bold fs-small">Match Info</p>
            
            <ul className="match_info">
                <li className="match-date">
                    <div className="calendar-icon icon">
                        <img src={Calendar} alt="" />
                    </div>
                    <div className="details">
                        <span className="date fw-semi-bold">{date}</span>
                        <span className="fs-tiny">Date</span>
                    </div>
                </li>
                <li className="match-referee">
                    <div className="referee-icon icon">
                        <img src={Whistle} alt="" />
                    </div>
                    <div className="details">
                        <span className="match-referee-name fw-semi-bold">{match_referee ? match_referee: 'E no get name'}</span>
                        <span className="fs-tiny">Referee</span>
                    </div>
                </li>
                <li className="match-venue">
                    <div className="stadium-icon icon">
                        <img src="" alt="" />
                    </div>
                    <div className="details">
                        <span className="match-stadium fw-semi-bold">{match_stadium ?? 'Be like venue no dey'}</span>
                        <span className="fs-tiny">Venue</span>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default InfoTab