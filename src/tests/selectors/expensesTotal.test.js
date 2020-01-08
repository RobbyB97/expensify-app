import expensesTotal from '../../selectors/expensesTotal'
import expenses from '../fixtures/expenses'


test('expensesTotal with no expenses', () => {
    const sum = expensesTotal([])
    expect(sum).toBe(0)
})


test('expensesTotal with one expense', () => {
    const sum = expensesTotal([expenses[1]])
    expect(sum).toBe(19500)
})


test('expensesTotal with multiple expenses', () => {
    const sum = expensesTotal(expenses)
    expect(sum).toBe(24195)
})