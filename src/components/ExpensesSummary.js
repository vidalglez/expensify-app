import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
    const expenseWord = `expense${props.expenseCount === 1 ? '' : 's'}`;
    const expensesTotal = numeral(props.expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {props.expenseCount} {expenseWord} totalling {expensesTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const selectedExpenes = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: selectedExpenes.length,
        expensesTotal: selectExpensesTotal(selectedExpenes)
    };
}

export default connect(mapStateToProps)(ExpensesSummary);