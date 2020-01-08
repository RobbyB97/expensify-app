export default (expenses) => {
    const expenseArr = expenses.map((amount) => {
        return amount.amount
    })

    return expenseArr.reduce((total, value) => total + value, 0)
}