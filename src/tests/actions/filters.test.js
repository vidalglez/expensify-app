import moment from 'moment';
import { 
    setStartDate, 
    setEndDate, 
    setTextFilter, 
    sortByDate, 
    sortByAmount 
} from '../../actions/filters';

test('Should generate setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should generate setEndDate action object', () => {
    const action = setEndDate(moment(1000));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1000)
    });
});

test('Should setTextFilter action object', () => {
    const text = 'Some value';
    const action = setTextFilter(text);
    
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('Should setTextFilter action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should set sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should set sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});