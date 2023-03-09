import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

//logger if one middleware?
// const store = createStore(rootReducer, applyMiddleware(logger))

// if many middlewares -> spread array of middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;