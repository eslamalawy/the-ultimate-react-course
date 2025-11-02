import { createSlice } from "@reduxjs/toolkit";
// we will seem to mutate the state as an atvantages of RTK but it converts it to immutable logic behind the scenes by immer library
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account", // the name is the first part of -> account/deposit
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return { payload: { amount, purpose } };
      },
      reducer(state, action) {
        if (state.loan > 0) return; // return nothing as it behind the scenes return the state by the end
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
// this is the old way of thunk make sure you use the same shape type convention "account/deposit",
// and same function name
export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };
  // thunk middleware function
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    // API CALL
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    // return action
    dispatch({ type: "account/deposit", payload: converted });
  };
}

export default accountSlice.reducer;
