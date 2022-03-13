import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas'
import { reducer as CardDetailsReducer } from './CardDetails/Reducers'


export default () => {
  const rootReducer = combineReducers({
    cardDetails: CardDetailsReducer ,
  });

  return configureStore(rootReducer, rootSaga)
}
