import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../action/bank-action-creators";
import { Button } from "@mui/material";

export default function Bankredux() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  const account = useSelector((state) => state.account);

  return (
    <div>
      <h1 style={{ color: "black" }}>{account}</h1>
      <Button
        variant="contained"
        disableElevation
        onClick={() => depositMoney(5)}
      >
        Deposit
      </Button>
      <Button
        variant="contained"
        disableElevation
        onClick={() => withdrawMoney(5)}
      >
        Withdraw
      </Button>
    </div>
  );
}
