import { Plate, PlateContent } from "@udecode/plate-common";

function App() {
  return (
    <>
      <p>stuff</p>
      <Plate>
        <PlateContent
          style={{
            height: "30rem",
            width: "30rem",
            border: "solid 1px black",
          }}
        />
      </Plate>
    </>
  );
}

export default App;
