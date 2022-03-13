// normal return function
export function depositMoney(amount) {
  return function (dispatch) {
    dispatch({
      type: "DEPOSIT",
      payload: amount,
    });
  };
}

// functional return statement
export function withdrawMoney(amount) {
  return (dispatch) => {
    dispatch({
      type: "WITHDRAW",
      payload: amount,
    });
  };
}
