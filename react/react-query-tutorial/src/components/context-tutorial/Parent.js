import { Button } from "@mui/material";
import React, { useState, createContext } from "react";
import Child from "./Child";

export const CountContext = createContext(0);

export default function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Child count={count} />
      </CountContext.Provider>
      <Button
        onClick={() => setCount(count + 1)}
        variant="contained"
        disableElevation
      >
        Add
      </Button>
    </div>
  );
}
