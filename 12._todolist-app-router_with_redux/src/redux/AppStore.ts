import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, Middleware } from "@reduxjs/toolkit";
import TimeReducer, { HomeStatesType } from "./TimeReducer_saga";
import TodoReducer, { TodoStatesType } from "./TodoReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas";

// 사가 미들웨어 객체를 생성합니다.
const sagaMiddleware = createSagaMiddleware();


export type RootStatesType = {
  home: HomeStatesType;
  todos: TodoStatesType;
};

const RootReducer = combineReducers({
  home: TimeReducer,
  todos: TodoReducer,
});

const loggerMW: Middleware = (store) => (next) => (action) => {
  console.log("### action 실행 : ", action);
  console.log("### action 변경 전 상태 : ", store.getState());
  next(action);
  console.log("### action 변경 후 상태 : ", store.getState());
}

// 사가 미들웨어 등록 
const AppStore = configureStore({ 
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false}).concat(loggerMW).concat(sagaMiddleware);
  },
  devTools: process.env.NODE_ENV !== "propduction",
});

// 사가 미들웨어를 먼저 등록한 후 rootSaga를 이용해 사가를 구동합니다.
sagaMiddleware.run(rootSaga);

export default AppStore;
