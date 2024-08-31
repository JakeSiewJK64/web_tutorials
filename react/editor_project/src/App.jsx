import { BrowserRouter, Route } from "react-router-dom";
import { CustomTipTapEditor } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <CustomTipTapEditor />
      </Route>
    </BrowserRouter>
  );
}

export default App;
