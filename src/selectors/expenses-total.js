export default (expenses) => {
    return expenses.length > 0 ?
        expenses
            .map((expense) => expense.amount)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0) : 0;
};