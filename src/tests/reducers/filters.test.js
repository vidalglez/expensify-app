import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
    const result = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual(result);
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('Should set setTextFilter', () => {  
  const text = 'Some text';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  }
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('Should set startDate filter', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  }
  const state = filtersReducer( undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('Should set endDate filter', () => {
  const endDate = moment().startOf('month');
  const action = {
    type: 'SET_END_DATE',
    endDate
  }
  const state = filtersReducer( undefined, action);
  expect(state.endDate).toEqual(endDate);
});