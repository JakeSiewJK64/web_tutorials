import "./App.css";

import { QueryClientProvider, QueryClient } from "react-query";
import Characters from "./components/ricknmorty/Characters";
import Signup from "./components/signup/signup";
import DoughnutChart from "./components/charts/doughnut";
import ResponsiveScreen from "./components/responsive/responsive-screen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Parent from "./components/context-tutorial/Parent";
import Usereducer from "./components/usereducer/usereducer";

const queryClient = new QueryClient();

function App() {
  const authenticated = false;
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/">
              <Route
                index
                element={authenticated ? <Characters /> : <Signup />}
              />
              <Route path="signup" element={<Signup />} />
              <Route path="doughnut" element={<DoughnutChart />} />
              <Route path="signup" element={<Signup />} />
              <Route path="counter" element={<Parent />} />
              <Route path="reducer" element={<Usereducer />} />
            </Route>
            <Route path="screen">
              <Route path="responsive" element={<ResponsiveScreen />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
