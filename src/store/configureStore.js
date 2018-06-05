import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses'
import filtersReducers from '../reducers/filters'

export default () => {
  //Store creation
  
  const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducers
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}




