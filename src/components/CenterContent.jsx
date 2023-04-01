import React, { useState } from "react";
import CalendarContainer from "./CalendarContainer";
import ErrorUI from "./Fallback-UI/ErrorUI";
import Fixtures from "./Fixtures";

import useEventsQuery from "../Hooks/useEventsQuery";
import { useQuery } from "react-query";

function CenterContent() {
  const { data: events, error, isLoading, rows } = useEventsQuery();
  const [fromDate, setFromDate] = useState(null);

  const { data, refetch } = useQuery(
    ["events", fromDate],
    () => {
      const baseURL = "https://apiv3.apifootball.com/";
      const apiKey = "60128ebf30msh8f1f6e2da0491d6p151b06jsn9ef08e64d149";

      console.log(`making fetch request for matches for ${fromDate}`);
      return axios.get(
        `${baseURL}?action=get_events&from=${fromDate}&to=${fromDate}&APIKey=${apiKey}}`
      );
    },
    {
      enabled: !!fromDate,
    }
  );

  console.log(error, fromDate);
  return (
    <section id="content-center">
      <div className="center-column">
        <CalendarContainer
          fromDate={fromDate}
          triggerFetch={() => refetch()}
          setFromDate={setFromDate}
        />
        <Fixtures rows={rows} isLoading={isLoading} data={data} />
      </div>

      {/* {error && <ErrorUI />} */}
    </section>
  );
}

export default CenterContent;
