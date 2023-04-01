import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ApiContextProvider } from "./Contexts/apiContext";

import "/sass/global/global.scss";
import Livescore from "./components/LiveScore";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiContextProvider>
        <Livescore />
        <ReactQueryDevtools />
      </ApiContextProvider>
    </QueryClientProvider>
  );
}

export default App;
