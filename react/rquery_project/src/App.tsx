import { BrowserRouter, Route } from "react-router-dom";
import { CharacterTable } from "./components/CharacterTable";
import { CharacterInfiniteScroll } from "./components/CharacterInfiniteScroll";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div style={{ width: "80rem" }}>
            <h2>My Characters</h2>
            <CharacterTable />
          </div>
        </div>
      </Route>
      <Route path="/infinite-characters" exact>
        <h2>Infinte Query:</h2>
        <CharacterInfiniteScroll />
      </Route>
    </BrowserRouter>
  );
}

export default App;
