import { useState, useEffect, createContext, useContext } from "react";
import Events from "/events.json";

const EventsContext = createContext();

function EventProvider(props) {
  const [events, setEvents] = useState([]);

  function updateEvents() {
    return null;
  }

  return <EventsContext.Provider value={[events, updateEvents]} {...props} />;
}

function useEventsContext() {
  const events = useContext(EventsContext);

  return events;
}

// {
//     "data": {
//         "error": 404,
//         "message": "Authentification failed!"
//     },
//     "status": 200,
//     "statusText": "",
//     "headers": {
//         "content-type": "application/json; charset=utf-8"
//     },
//     "config": {
//         "transitional": {
//             "silentJSONParsing": true,
//             "forcedJSONParsing": true,
//             "clarifyTimeoutError": false
//         },
//         "adapter": [
//             "xhr",
//             "http"
//         ],
//         "transformRequest": [
//             null
//         ],
//         "transformResponse": [
//             null
//         ],
//         "timeout": 0,
//         "xsrfCookieName": "XSRF-TOKEN",
//         "xsrfHeaderName": "X-XSRF-TOKEN",
//         "maxContentLength": -1,
//         "maxBodyLength": -1,
//         "env": {},
//         "headers": {
//             "Accept": "application/json, text/plain, */*"
//         },
//         "method": "get",
//         "url": "https://apiv3.apifootball.com/?action=get_events&APIKey=60128ebf30msh8f1f6e2da0491d6p151b06jsn9ef08e64d149"
//     },
//     "request": {}
// }

export { useEventsContext, EventProvider };
