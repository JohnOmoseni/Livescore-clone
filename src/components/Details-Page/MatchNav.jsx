import React from 'react'
import Tracker from '/src/assets/svgs/tracker-svg.svg'
import Venue from '/src/assets/svgs/venue-svg.svg';
import Favorite from '/src/assets/svgs/favourites-active-svg.svg';

function MatchNav({matchObj}) {
    const { league_logo, league_name, country_name} = matchObj

    return (
        <nav className="nav__menu">
            <div className="competition">
                <div className="country-logo icon">
                    <img src={league_logo} alt="" />
                </div>                    
                <div className="league-details">
                    <h3 className="league-name fw-semi-bold">{league_name}</h3>
                    <span className="country fs-small">{country_name ?? 'Unknown'}</span>
                </div>
            </div>

            <div className="match__icons">
                <div className="watch-video icon"><img src={Tracker} alt="" /></div>
                <div className="lineups icon"><img src={Venue} alt="" /></div>
                <div className="favorite icon"><img src={Favorite} alt="" /></div>
            </div>
        </nav>
    )
}

export default MatchNav