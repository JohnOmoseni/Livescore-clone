import { createContext, useContext } from "react";

const ApiContext = createContext(null);

export function ApiContextProvider({ children }) {
  const baseURL = "https://apiv3.apifootball.com/";
  const apiKey = "60128ebf30msh8f1f6e2da0491d6p151b06jsn9ef08e64d149";

  const value = { baseURL, apiKey };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

function useApiContext() {
  const context = useContext(ApiContext);

  if (!context) throw new Error("useApiContext must be used within ApiContextProvider");
  return context;
}

export default useApiContext;
