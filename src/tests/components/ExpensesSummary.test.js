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
test('Should correctyl render ExpensesSummary with multiple expenses', () => {
    const expensesList = [expenses[0], expenses[1]];
    const expensesTotal = selectExpensesTotal(expensesList);
    const wrapper = shallow(<ExpensesSummary 
        expenseCount={expensesList.length} 
        expensesTotal={expensesTotal} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctyl render ExpensesSummary with single expense', () => {
    const expensesList = [expenses[1]];
    const expensesTotal = selectExpensesTotal(expensesList);
    const wrapper = shallow(<ExpensesSummary 
        expenseCount={expensesList.length} 
        expensesTotal={expensesTotal} />);
    expect(wrapper).toMatchSnapshot();
});