export default (expenses) => {
    const getTotal = (total, num) => {
        return total + num
    }

    const expenseArr = expenses.map((amount) => {
        return amount.amount
    })

    return expenseArr.reduce(getTotal, 0)
}