import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'

import expensesTotal from '../selectors/expensesTotal'


export const ExpensesSummary = (props) => (
    <div>
        {
            props.expensesCount ?
                `You have ${props.expensesCount} expenses totalling ${props.expensesTotal}.`
            :
            'You have no expenses.'
        }
    </div>
)


const mapStateToProps = (state) => {
    return {
        expensesTotal: numeral(expensesTotal(state.expenses)/100).format('$0,0.00'),
        expensesCount:  state.expenses.length
    }
}


export default connect(mapStateToProps)(ExpensesSummary)