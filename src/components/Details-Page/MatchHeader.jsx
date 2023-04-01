import React from 'react'

function MatchHeader({matchObj}) {
    const {team_home_bagde, match_hometeam_name, match_time,
            team_away_bagde, match_awayteam_name, match_date } = matchObj

    const isoDate = new Date().toISOString().split('T')[0].toString()
    const dtString = new Date(match_date).toLocaleDateString()

    return (
    <div className="match__fixture">
        <div className="home__team">
            <div className="hometeam-badge badge">
                <img src={team_home_bagde} alt="" />
            </div>
            <span className="hometeam_name | fw-semi-bold fs-small">{match_hometeam_name}</span>
        </div>
        <div className="match__time">
            <h3 className="time fw-semi-bold">{match_time}</h3>
            <span className="fs-tiny fw-semi-bold">{isoDate === match_date? 'Today': dtString}</span>
        </div>
        <div className="away__team">
            <div className="awayteam-badge badge">
                <img src={team_away_bagde} alt="" />
            </div>
            <span className="awayteam-name | fw-semi-bold fs-small">{match_awayteam_name}</span>
        </div>
    </div>
  )
}

export default MatchHeader