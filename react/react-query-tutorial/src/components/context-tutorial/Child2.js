import React, { useContext } from "react";
import { CountContext } from "./Parent";

export default function Child2() {
  const count = useContext(CountContext);
  return (
    <div>
      <h1 style={{ color: "black" }}>{count}</h1>
    </div>
  );
}
