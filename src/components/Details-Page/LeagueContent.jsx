import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import LeagueHeader from "../FixtureHeader";
import FixtureRow from "../FixtureRow";
import Events from "/events.json";
import TabNav from "../Composition/TabNav";

import {
  LeagueWrapper,
  LeagueTop,
  LeagueBody,
  HeaderRow,
} from "/styled-components/leagueMatches.js";
import { Tabs } from "/styled-components/tabs.js";

function LeagueContent({ isleaguebox }) {
  const {
    state: { countryname, league },
  } = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  const LeagueMatches = Events.filter(
    event => event.league_name === league && event.country_name === countryname
  );
  console.log(Events, LeagueMatches, league, countryname, isleaguebox);

  const rows = LeagueMatches.map((match, idx) => {
    return <FixtureRow key={idx} event={match} />;
  });

  const handleTabSwitch = id => {
    setActiveTab(id);
  };

  return (
    <section id="content-center">
      <LeagueWrapper className="center-column">
        <LeagueTop className="top">
          <LeagueHeader event={LeagueMatches[0]} isleaguebox={isleaguebox} />

          <Tabs className="tabs" isleaguebox={isleaguebox}>
            <TabNav
              id="overview"
              className="overview"
              title="Overview"
              activeTab={activeTab}
              onTabSwitch={handleTabSwitch}
            />
            <TabNav
              id="matches"
              className="matches"
              title="Matches"
              activeTab={activeTab}
              onTabSwitch={handleTabSwitch}
            />
            <TabNav
              id="table"
              className="table"
              title="Table"
              activeTab={activeTab}
              onTabSwitch={handleTabSwitch}
            />
          </Tabs>
        </LeagueTop>

        <LeagueBody className="league-content">
          <HeaderRow className="fixture-tab header">
            <h3 className="fw-semi-bold">FIXTURES</h3>
            <div className="right-arrow">&gt;</div>
          </HeaderRow>
          {rows}
        </LeagueBody>
      </LeagueWrapper>
    </section>
  );
}

export default LeagueContent;
