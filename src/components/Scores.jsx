import { Route, Routes } from "react-router-dom";

import Top from "./Top";
import FootballMain from "./FootballMain";
import OtherSports from "./OtherSports";

import MatchDetails from "./Details-Page/MatchDetails";
import CenterContent from "./CenterContent";
import LeagueContent from "./Details-Page/LeagueContent";

function Scores() {
  return (
    <>
      <Top />
      <Routes>
        <Route path="/football/*" element={<FootballMain />}>
          <Route index element={<CenterContent />} />
          <Route path=":country/:league/" element={<LeagueContent />} />
          <Route path=":country/:league/:match/:leagueid/:id" element={<MatchDetails />} />
        </Route>

        <Route path="/hockey" element={<OtherSports title="Hockey" />} />
        <Route path="/basketball" element={<OtherSports title="Basketball" />} />
        <Route path="/tennis" element={<OtherSports title="Tennis" />} />
        <Route path="/cricket" element={<OtherSports title="Cricket" />} />
      </Routes>
    </>
  );
}

export default Scores;
