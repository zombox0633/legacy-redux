import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer, { RootState } from "./rootReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { RootActionType } from "./rootActionType";

//แบบปกติ
// const store = createStore(rootReducer);

export type AppDispatch = ThunkDispatch<RootState, void, RootActionType>

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
