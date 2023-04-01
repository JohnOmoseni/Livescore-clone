import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import useApiContext from "../Contexts/apiContext";

const baseURL = "https://apiv3.apifootball.com/";
const apiKey = "60128ebf30msh8f1f6e2da0491d6p151b06jsn9ef08e64d149";

const fetchMatchDetails = ({ queryKey }) => {
  const [_key, matchid] = queryKey;

  console.log("making fetch request for match-details", baseURL);
  return axios.get(`${baseURL}?action=get_events&match_id=${matchid}&APIKey=${apiKey}`);
};

function useMatchDetailsQuery(matchid) {
  const { baseURL, apiKey } = useApiContext();
  const queryClient = useQueryClient();
  const { data, error, isLoading, isError } = useQuery(
    ["match_details", matchid],
    () => fetchMatchDetails(baseURL, apiKey),
    {
      initialData: () => {
        const match = queryClient
          .getQueryData("events")
          ?.data?.find(event => event.match_id === matchid);

        if (match) return { data: match };
        return undefined;
      },
    }
  );

  return { data, error, isError, isLoading };
}

export default useMatchDetailsQuery;
