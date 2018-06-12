import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    expect(selectExpensesTotal([])).toBe(0);
});

test('Should correctly add up a  single expense', () => {
    expect(selectExpensesTotal([expenses[0]])).toBe(4500);
});

test('Should correctly add up multiple expenses', () => {
    expect(selectExpensesTotal(expenses)).toBe(119500);
});