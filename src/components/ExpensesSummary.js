import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => {
    const expenseWord = `expense${props.expenseCount === 1 ? '' : 's'}`;
    const expensesTotal = numeral(props.expensesTotal / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{props.expenseCount}</span> {expenseWord} totalling <span>{expensesTotal}</span>
                </h1>
                <div className="page_header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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