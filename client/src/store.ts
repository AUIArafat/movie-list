import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createInjectorsEnhancer } from "redux-injectors";
import { rootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  const middlewares = [sagaMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer: rootReducer,
      runSaga,
    }),
  ];
  const store = configureStore({
    reducer: rootReducer(),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
    enhancers,
  });
  sagaMiddleware.run(rootSaga);
  return store;
}
