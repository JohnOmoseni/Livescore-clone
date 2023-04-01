import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BiStar } from "react-icons/bi";
import FavoriteRow from "/styled-components/fixtureRow.js";

function FixtureRow({ event }) {
  const [favorite, setFavorite] = useState(false);

  const {
    match_time,
    match_hometeam_name: hometeam,
    match_awayteam_name: awayteam,
    match_hometeam_score,
    match_awayteam_score,
    team_home_badge,
    team_away_badge,
    country_name: country,
    league_name: league,
    match_id: id,
    league_id,
  } = event;

  const replaceSpace = (name = "unknown") => name.toLowerCase().replace(/[/\ ]/g, "");

  return (
    <FavoriteRow className="fixture_row">
      <Link
        to={`/scores/football/${replaceSpace(country)}/${replaceSpace(league)}/${replaceSpace(
          hometeam
        )}-vs-${replaceSpace(awayteam)}/${league_id}/${id}`}
      >
        <div className="content">
          <span className="match_time fw-semi-bold">{match_time}</span>
          <div className="teams">
            <div className="team home_team">
              <div className="badge">
                <img src="team_home_badge" alt="" />
              </div>
              <h3 className="team-name fw-semi-bold">{hometeam}</h3>
            </div>
            <div className="team away_team">
              <div className="badge">
                <img src="team_away_badge" alt="" />
              </div>
              <h3 className="team-name fw-semi-bold">{awayteam}</h3>
            </div>
          </div>
          <div className="score">
            <span className="home_score fw-semi-bold">
              {match_hometeam_score ? match_hometeam_score : ""}
            </span>
            <span className="away_score fw-semi-bold">
              {match_awayteam_score ? match_awayteam_score : ""}
            </span>
          </div>
          <div className="favorite icon" onClick={() => setFavorite(!favorite)}>
            <BiStar className="icon" />
          </div>
        </div>
      </Link>
    </FavoriteRow>
  );
}

export default FixtureRow;
