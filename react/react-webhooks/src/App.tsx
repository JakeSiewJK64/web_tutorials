import { TraditionalWebsocket } from "./components/TraditionalWebsocket";
import { UseWebsocket } from "./components/UseWebhooks";

const App = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        gap: "10px",
      }}
    >
      <TraditionalWebsocket />
      <UseWebsocket />
    </div>
  );
};

export default App;
