import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
    return (
        <p>Viewing {props.expenseCount} expense{props.expenseCount > 1 ? 's' : ''} totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}</p>
    );
};

const mapStateToProps = (state) => {
    return {
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        expensesTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
    };
}

export default connect(mapStateToProps)(ExpensesSummary);