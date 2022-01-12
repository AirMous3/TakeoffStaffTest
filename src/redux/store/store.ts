import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { appReducer } from "../reducers/appReducer/appReducer";

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// Store Type
export type RootStateType = ReturnType<typeof rootReducer>;
