import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
//store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Water bill'}));
store.dispatch(addExpense({ description: 'Gas bill'}));
store.dispatch(setTextFilter('water'));

setTimeOut(() => {
    store.dispatch(setTextFilter('rent'));
});

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters );
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter  />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));