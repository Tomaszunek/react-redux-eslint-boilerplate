import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { INCRE } from "./store/Counter/actions";
import { IRootState } from "./store";

export const thunkSendMessage = (
  counter: number
): ThunkAction<void, IRootState, null, Action> => async dispatch => {
  const asyncResp = await exampleAPI();
  dispatch(
    INCRE({count: asyncResp + counter})
  );
};

function exampleAPI() {
  return Promise.resolve(5);
}
