import React from 'react'
import Favorite from '../assets/svgs/favourites-active-svg.svg';

import { HeaderRow } from '/styled-components/leagueMatches.js'


function FixtureHeader({event, isleaguebox}) {
    const {country_logo, country_name, league_name} = event;

    return (
    <HeaderRow gridNo='3' className="header">
      <div className="country_logo">
          <img src='country_logo' alt="" />
      </div>
      <div className="league_details">
          <h3 className=" league_name fw-semi-bold">{league_name}</h3>
          <span className="country_name">{country_name}</span>
      </div>

      {isleaguebox === 'true' ? <img src={Favorite} className="favorite icon" /> 
      : <div className="right-arrow">&gt;</div>}
    </HeaderRow>

  )
}

export default FixtureHeader