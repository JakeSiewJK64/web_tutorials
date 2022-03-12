import React, { useReducer } from "react";
import { Button, Box } from "@mui/material";
import { reducer } from "./reducer";
import "./usereducer.css";

export default function Usereducer() {
  const deposit = (amount) => {
    dispatch({
      type: "DEPOSIT",
      payload: amount,
    });
  };

  const withdraw = (amount) => {
    dispatch({
      type: "WITHDRAW",
      payload: amount,
    });
  };

  const [amount, dispatch] = useReducer(reducer, 500);

  return (
    <div>
      <h1 style={{ color: "#000" }}>{amount}</h1>
      <Box className="">
        <Button
          id="button-spacing"
          variant={"contained"}
          disableElevation
          onClick={() => deposit(500)}
        >
          Deposit
        </Button>
        <Button
          id="button-spacing"
          variant={"contained"}
          disableElevation
          onClick={() => withdraw(500)}
        >
          Withdraw
        </Button>
      </Box>
    </div>
  );
}
