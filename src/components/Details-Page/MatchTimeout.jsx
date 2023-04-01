import React from 'react'

function MatchTimeout({status, matchObj}) {
   const {match_hometeam_halftime_score: hometeam_HT_score,
      match_awayteam_halftime_score: awayteam_HT_score,
      match_hometeam_score: hometeam_FT_score,
      match_awayteam_score: awayteam_FT_score} = matchObj
  
   const HTScore = `${hometeam_HT_score} - ${awayteam_HT_score}`
   const FTScore = `${hometeam_FT_score} - ${awayteam_FT_score}`
  
   return (
      <li className="match-timeout" >
         <div className="time fs-small">
            {status}
         </div>

         <div className="score fw-semi-bold">{status === 'HT' ? HTScore : FTScore}</div>
      </li>
   )
}

export default MatchTimeout