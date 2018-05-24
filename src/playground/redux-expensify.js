import {createStore, combineReducers} from 'redux';

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
};

//Filters Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate : undefined   
}

const filtersReducers = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducers
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'dsada',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate : undefined
    }
};