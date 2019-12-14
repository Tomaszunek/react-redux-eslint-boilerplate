import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { INCRE } from "./store/Counter/actions";
import { IRootState } from "./store";
import { Counter } from "./store/Counter/types";

export const thunkSendMessage = (
  counter: Counter
): ThunkAction<void, IRootState, null, Action> => async dispatch => {
  const asyncResp = await exampleAPI();
  dispatch(
    INCRE({count: asyncResp + counter.count})
  );
};

function exampleAPI() {
  return Promise.resolve(5);
}
