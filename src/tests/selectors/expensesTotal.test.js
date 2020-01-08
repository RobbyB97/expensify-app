import expensesTotal from '../../selectors/expensesTotal'
import expenses from '../fixtures/expenses'


test('expensesTotal with multiple expenses', () => {
    const sum = expensesTotal(expenses)
    expect(sum).toBe(24195)
})