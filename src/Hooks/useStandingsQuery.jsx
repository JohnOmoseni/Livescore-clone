import axios from "axios";
import { useQuery } from "react-query";

const baseURL = "https://apiv3.apifootball.com/";
const apiKey = "60128ebf30msh8f1f6e2da0491d6p151b06jsn9ef08e64d149";

const fetchStandings = ({ queryKey }) => {
  const [_key, leagueid] = queryKey;
  //   const { baseURL, apiKey } = useApiContext();

  console.log("making fetch request for standings");
  return axios.get(`${baseURL}?action=get_standings&league_id=${leagueid}&APIKey=${apiKey}`);
};

function useGetStandings(leagueid) {
  const { data, error, isLoading, isError, isFetching } = useQuery(
    ["standings", leagueid],
    fetchStandings
  );

  return { data, error, isError, isLoading };
}

export default useGetStandings;
