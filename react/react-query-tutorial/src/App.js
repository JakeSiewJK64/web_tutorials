import "./App.css";

import Characters from "./components/ricknmorty/Characters";
import { QueryClientProvider, QueryClient } from "react-query";
import Signup from "./components/signup/signup";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {/* <Characters /> */}
        <Signup />
      </QueryClientProvider>
    </div>
  );
}

export default App;
