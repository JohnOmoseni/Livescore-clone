import React from 'react'

function LeagueTable() {
  return (
    <div className="table__tab" >
    <div className="tabs">
        <span className="all tab active | fs-small fw-semi-bold">All</span>
        <span className="home tab | fs-small fw-semi-bold">Home</span>
        <span className="away tab | fs-small fw-semi-bold">Away</span>
    </div>

    <div className="table__content">
        <div className="heading row">
            <div className="even-row">
                <div className="team-position">
                    <span className="fw-semi-bold">#</span>
                    <span className="team fw-bold">Team</span>
                </div>
                <div className="team-details">
                    <span className="points">P</span>
                    <span className="wins">W</span>
                    <span className="draws">D</span>
                    <span className="loss">L</span>
                    <span className="gaols_for">F</span>
                    <span className="goals_against">A</span>
                </div>
            </div>
        </div>
        <ul className="table-body">
            <li className="even-row">
                <div className="team-position">
                    <span className="pos fw-semi-bold">1</span>
                    <span className="team">
                        <div className="team-badge badge">
                            <img src="/public/svgs/europa-league.png" alt="" />
                        </div>
                        <div className="team-name | fs-small fw-semi-bold">Manchester City</div>
                    </span>
                </div>
                <div className="team-details">
                    <span className="points">2</span>
                    <span className="wins">2</span>
                    <span className="draws">0</span>
                    <span className="loss">0</span>
                    <span className="gaols_for">6</span>
                    <span className="goals_against">0</span>
                </div>
            </li>
            <li className="even-row">
                <div className="team-position">
                    <span className="pos fw-semi-bold">2</span>
                    <span className="team">
                        <div className="team-badge badge">
                            <img src="/public/svgs/europa-league.png" alt="" />
                        </div>
                        <div className="team-name | fs-small fw-semi-bold">Manchester United</div>
                    </span>
                </div>
                <div className="team-details">
                    <span className="points">2</span>
                    <span className="wins">2</span>
                    <span className="draws">0</span>
                    <span className="loss">0</span>
                    <span className="gaols_for">6</span>
                    <span className="goals_against">0</span>
                </div>
            </li>
            <li className="even-row">
                <div className="team-position">
                    <span className="pos fw-semi-bold">3</span>
                    <span className="team">
                        <div className="team-badge badge">
                            <img src="/public/svgs/europa-league.png" alt="" />
                        </div>
                        <div className="team-name | fs-small fw-semi-bold">Liverpool</div>
                    </span>
                </div>
                <div className="team-details">
                    <span className="points">2</span>
                    <span className="wins">2</span>
                    <span className="draws">0</span>
                    <span className="loss">0</span>
                    <span className="gaols_for">6</span>
                    <span className="goals_against">0</span>
                </div>
            </li>
        </ul>
    </div>
</div>
  )
}

export default LeagueTable