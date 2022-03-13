import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
/**
 * This import defaults to localStorage for web and AsyncStorage for react-native.
 *
 * Keep in mind this storage *is not secure*. Do not use it to store sensitive information
 * (like API tokens, private and sensitive data, etc.).
 *
 * If you need to store sensitive information, use redux-persist-sensitive-storage.
 * @see https://github.com/CodingZeal/redux-persist-sensitive-storage
 */
import createSagaMiddleware from 'redux-saga';


export default (rootReducer, rootSaga) => {
  const enhancers = []

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware();

  enhancers.push(applyMiddleware(sagaMiddleware, createLogger()))

  const store = createStore(rootReducer, compose(...enhancers))

  // Kick off the root saga
  sagaMiddleware.run(rootSaga)

  return { store }
}
