import React from 'react'
import {shallow} from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary'


test('Render ExpensesSummary with no expenses', () => {
    const wrapper = shallow(<ExpensesSummary />)
    expect(wrapper).toMatchSnapshot()
})