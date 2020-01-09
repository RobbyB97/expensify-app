import React from 'react'
import {shallow} from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary'


test('Render ExpensesSummary with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary />)
    
    expect(wrapper).toMatchSnapshot()
})


test('Render ExpensesSummary with one expense', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expensesCount={1}
            expensesTotal={'$100.00'}
        />
    )

    expect(wrapper).toMatchSnapshot()
})


test('Render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(
        <ExpensesSummary
            expensesCount={3}
            expensesTotal={'$340.60'}
        />
    )

    expect(wrapper).toMatchSnapshot()
})