import "./App.css";

import Characters from "./components/ricknmorty/Characters";
import { QueryClientProvider, QueryClient } from "react-query";
import Signup from "./components/signup/signup";
import DoughnutChart from "./components/charts/doughnut";
import ResponsiveScreen from "./components/responsive/responsive-screen";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {/* <Characters /> */}
        {/* <Signup /> */}
        {/* <DoughnutChart /> */}
        <ResponsiveScreen />
      </QueryClientProvider>
    </div>
  );
}

export default App;
