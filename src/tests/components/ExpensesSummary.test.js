import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
/*
let expenses;

beforeEach(() => {
    
});
*/
test('Viewing 2 expenses totalling $94.34', () => {
    const expensesList = [expenses[0], expenses[1]];
    const expensesTotal = selectExpensesTotal(expensesList);
    const wrapper = shallow(<ExpensesSummary 
        expenseCount={expensesList.length} 
        expensesTotal={expensesTotal} />);
    expect(wrapper.text()).toBe('Viewing 2 expenses totalling $1,140.00');
});

test('Viewing 1 expense totalling $94.34', () => {
    const expensesList = [expenses[1]];
    const expensesTotal = selectExpensesTotal(expensesList);
    const wrapper = shallow(<ExpensesSummary 
        expenseCount={expensesList.length} 
        expensesTotal={expensesTotal} />);
    expect(wrapper.text()).toBe('Viewing 1 expense totalling $1,095.00');
});