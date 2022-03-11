import "./App.css";

import Characters from "./components/ricknmorty/Characters";
import { QueryClientProvider, QueryClient } from "react-query";
import Signup from "./components/signup/signup";
import DoughnutChart from "./components/charts/doughnut";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {/* <Characters /> */}
        {/* <Signup /> */}
        <DoughnutChart />
      </QueryClientProvider>
    </div>
  );
}

export default App;
