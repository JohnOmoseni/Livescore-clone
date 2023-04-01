import React, { useState, useEffect } from "react";
import { useParams, useLocation, useSearchParams, useMatch } from "react-router-dom";
import { useEventsContext } from "/src/Contexts/EventsContext";

import events from "/events.json";
import InfoTab from "./InfoTab";
import MatchHeader from "./MatchHeader";
import MatchSummary from "./MatchSummary";
import Lineups from "./Lineups";
import LeagueTable from "./LeagueTable";
import MatchNav from "./MatchNav";

import "/sass/pages/details-page.scss";
import TabNav from "../Composition/TabNav";
import TabContent from "../Composition/TabContent";
import useGetStandings from "../../Hooks/useStandingsQuery";
import useMatchDetailsQuery from "../../Hooks/useMatchDetailsQuery";
import H2H from "./H2H";

function MatchDetails() {
  const { leagueid, id } = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("info");

  const { data } = useMatchDetailsQuery(id);
  const { data: standings } = useGetStandings(leagueid);

  const matchObj = events.find(obj => obj.match_id === id);
  // console.log(data, matchObj);

  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab]);
  const handleTabSwitch = id => {
    setActiveTab(id);
  };

  return (
    <div id="details_container">
      <MatchNav matchObj={matchObj} />
      <main>
        <section id="content-center">
          <div className="row-content">
            <MatchHeader matchObj={matchObj} />
            <ul className="tabs">
              <TabNav
                id="info"
                className="info"
                title="Info"
                activeTab={activeTab}
                onTabSwitch={handleTabSwitch}
              />
              <TabNav
                id="summary"
                className="summary"
                title="Summary"
                activeTab={activeTab}
                onTabSwitch={handleTabSwitch}
              />
              <TabNav
                id="lineups"
                className="lineups"
                title="Line-ups"
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
              <TabNav
                id="h2h"
                className="h2h"
                title="H2H"
                activeTab={activeTab}
                onTabSwitch={handleTabSwitch}
              />
            </ul>
          </div>

          <TabContent id="info" activeTab={activeTab}>
            <InfoTab matchObj={matchObj} />
          </TabContent>
          <TabContent id="summary" activeTab={activeTab}>
            <MatchSummary matchObj={matchObj} />
          </TabContent>
          <TabContent id="table" activeTab={activeTab}>
            <LeagueTable matchObj={matchObj} />
          </TabContent>
          <TabContent id="lineups" activeTab={activeTab}>
            <Lineups matchObj={matchObj} />
          </TabContent>
          <TabContent id="h2h" activeTab={activeTab}>
            <H2H matchObj={matchObj} />
          </TabContent>
        </section>
      </main>
    </div>
  );
}

export default MatchDetails;
